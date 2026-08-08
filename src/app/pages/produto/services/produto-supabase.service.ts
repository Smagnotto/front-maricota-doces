import { Injectable, inject } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { SupabaseService } from 'src/app/core/supabase/supabase.service';
import { Produto } from '../domain/produto';
import { ListaProduto } from '../domain/produto-lista';
import { Precificacao } from '../domain/precificacao';
import { InsumoProduto } from '../domain/insumo-produto';
import { ComponenteProduto } from '../domain/componente-produto';
import { ProdutoService } from './produto.service';

@Injectable()
export class ProdutoSupabaseService extends ProdutoService {
  private supabase = inject(SupabaseService);

  getAllProdutos(ativo?: boolean): Observable<ListaProduto[]> {
    let query = this.supabase.client
      .from('produtos')
      .select('id, nome, custo, preco, ativo');
    if (ativo !== undefined) {
      query = query.eq('ativo', ativo);
    }
    return from(query.order('nome')).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as ListaProduto[];
      }),
      catchError(this.handleError)
    );
  }

  getProdutoById(id: number): Observable<Produto> {
    return from(
      this.supabase.client
        .from('produtos')
        .select(`
          id, nome, ativo, preco, custo, margem_percentual,
          insumos_produtos (id, nome, quantidade, tipo, valor),
          componentes_produtos (id_produto, nome, quantidade, valor)
        `)
        .eq('id', id)
        .single()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return {
          ...data,
          margemPercentual: data.margem_percentual,
          insumos: data.insumos_produtos as InsumoProduto[],
          componentes: data.componentes_produtos as ComponenteProduto[],
        } as Produto;
      }),
      catchError(this.handleError)
    );
  }

  getProdutoByNome(nome: string): Observable<Produto[]> {
    return from(
      this.supabase.client.from('produtos').select('*').ilike('nome', `%${nome}%`)
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Produto[];
      }),
      catchError(this.handleError)
    );
  }

  saveProduto(produto: Produto): Observable<Produto> {
    const { id, insumos, componentes, margemPercentual, ...payload } = produto;
    return from(
      this.supabase.client.from('produtos')
        .insert({ ...payload, margem_percentual: margemPercentual })
        .select()
        .single()
    ).pipe(
      switchMap(({ data, error }) => {
        if (error) throw error;
        const produtoId = data.id;
        return this.saveRelations(produtoId, insumos, componentes).pipe(
          map(() => ({ ...data, insumos, componentes, margemPercentual } as Produto))
        );
      }),
      catchError(this.handleError)
    );
  }

  updateProduto(produto: Produto): Observable<Produto> {
    const { id, insumos, componentes, margemPercentual, ...payload } = produto;
    return from(
      this.supabase.client.from('produtos')
        .update({ ...payload, margem_percentual: margemPercentual })
        .eq('id', id)
        .select()
        .single()
    ).pipe(
      switchMap(({ data, error }) => {
        if (error) throw error;
        return this.deleteRelations(id).pipe(
          switchMap(() => this.saveRelations(id, insumos, componentes)),
          map(() => ({ ...data, insumos, componentes, margemPercentual } as Produto))
        );
      }),
      catchError(this.handleError)
    );
  }

  deleteProduto(id: number): Observable<Produto> {
    return this.deleteRelations(id).pipe(
      switchMap(() => from(
        this.supabase.client.from('produtos').delete().eq('id', id).select().single()
      )),
      map(({ data, error }) => {
        if (error) throw error;
        return data as Produto;
      }),
      catchError(this.handleError)
    );
  }

  simularProduto(produto: Produto): Observable<Precificacao> {
    return from(
      this.supabase.client.rpc('simular_produto', {
        p_insumos: produto.insumos,
        p_componentes: produto.componentes,
      })
    ).pipe(
      map(({ data, error }) => {
        if (error) {
          return this.calcularPrecificacaoLocal(produto);
        }
        return data as Precificacao;
      }),
      catchError(() => {
        return from(Promise.resolve(this.calcularPrecificacaoLocal(produto)));
      })
    );
  }

  private calcularPrecificacaoLocal(produto: Produto): Precificacao {
    let custo = 0;
    for (const insumo of produto.insumos) {
      custo += insumo.valor * insumo.quantidade;
    }
    for (const comp of produto.componentes) {
      custo += comp.valor * comp.quantidade;
    }
    return { custo, preco: custo };
  }

  private saveRelations(produtoId: number, insumos: InsumoProduto[], componentes: ComponenteProduto[]): Observable<void> {
    const promises: PromiseLike<any>[] = [];

    if (insumos?.length) {
      const insumosPayload = insumos.map(i => ({
        produto_id: produtoId,
        insumo_id: i.id,
        nome: i.nome,
        quantidade: i.quantidade,
        tipo: i.tipo,
        valor: i.valor,
      }));
      promises.push(this.supabase.client.from('insumos_produtos').insert(insumosPayload));
    }

    if (componentes?.length) {
      const componentesPayload = componentes.map(c => ({
        produto_id: produtoId,
        componente_produto_id: c.id_produto,
        nome: c.nome,
        quantidade: c.quantidade,
        valor: c.valor,
      }));
      promises.push(this.supabase.client.from('componentes_produtos').insert(componentesPayload));
    }

    return from(Promise.all(promises)).pipe(map(() => undefined));
  }

  private deleteRelations(produtoId: number): Observable<void> {
    return from(
      Promise.all([
        this.supabase.client.from('insumos_produtos').delete().eq('produto_id', produtoId),
        this.supabase.client.from('componentes_produtos').delete().eq('produto_id', produtoId),
      ])
    ).pipe(map(() => undefined));
  }

  private handleError(error: any) {
    return throwError(() => error?.message || 'Erro ao acessar o Supabase');
  }
}
