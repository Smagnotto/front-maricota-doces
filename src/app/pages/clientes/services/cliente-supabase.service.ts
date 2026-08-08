import { Injectable, inject } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { SupabaseService } from 'src/app/core/supabase/supabase.service';
import { Cliente } from '../domain/cliente';
import { Endereco } from '../domain/endereco';
import { ClienteService } from './cliente.service';

@Injectable()
export class ClienteSupabaseService extends ClienteService {
  private supabase = inject(SupabaseService);

  getAllClientes(ativo?: boolean): Observable<Cliente[]> {
    let query = this.supabase.client.from('clientes').select('id, nome, ativo');
    if (ativo !== undefined) {
      query = query.eq('ativo', ativo);
    }
    return this.supabase.fromQuery(query.order('nome')).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Cliente[];
      }),
      catchError(this.handleError)
    );
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.supabase.fromQuery(
      this.supabase.client
        .from('clientes')
        .select('id, nome, ativo, enderecos (id, logradouro, cep, complemento, numero)')
        .eq('id', id)
        .single()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Cliente;
      }),
      catchError(this.handleError)
    );
  }

  getClienteByNome(nome: string): Observable<Cliente[]> {
    return this.supabase.fromQuery(
      this.supabase.client.from('clientes').select('*').ilike('nome', `%${nome}%`)
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Cliente[];
      }),
      catchError(this.handleError)
    );
  }

  saveCliente(cliente: Cliente): Observable<Cliente> {
    const { id, enderecos, ...payload } = cliente;
    return this.supabase.fromQuery(
      this.supabase.client.from('clientes').insert(payload).select().single()
    ).pipe(
      switchMap(({ data, error }) => {
        if (error) throw error;
        const clienteId = data.id;
        if (enderecos?.length) {
          return this.saveEnderecos(clienteId, enderecos).pipe(
            map(() => ({ ...data, enderecos } as Cliente))
          );
        }
        return from(Promise.resolve({ ...data, enderecos: [] } as Cliente));
      }),
      catchError(this.handleError)
    );
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    const { id, enderecos, ...payload } = cliente;
    return this.supabase.fromQuery(
      this.supabase.client.from('clientes').update(payload).eq('id', id).select().single()
    ).pipe(
      switchMap(({ data, error }) => {
        if (error) throw error;
        return this.supabase.fromQuery(
          this.supabase.client.from('enderecos').delete().eq('cliente_id', id)
        ).pipe(
          switchMap(() => {
            if (enderecos?.length) {
              return this.saveEnderecos(id, enderecos).pipe(
                map(() => ({ ...data, enderecos } as Cliente))
              );
            }
            return from(Promise.resolve({ ...data, enderecos: [] } as Cliente));
          })
        );
      }),
      catchError(this.handleError)
    );
  }

  deleteCliente(id: number): Observable<Cliente> {
    return this.supabase.fromQuery(
      this.supabase.client.from('enderecos').delete().eq('cliente_id', id)
    ).pipe(
      switchMap(() => this.supabase.fromQuery(
        this.supabase.client.from('clientes').delete().eq('id', id).select().single()
      )),
      map(({ data, error }) => {
        if (error) throw error;
        return data as Cliente;
      }),
      catchError(this.handleError)
    );
  }

  private saveEnderecos(clienteId: number, enderecos: Endereco[]): Observable<void> {
    const payload = enderecos.map(e => ({
      cliente_id: clienteId,
      logradouro: e.logradouro,
      cep: e.cep,
      complemento: e.complemento || null,
      numero: e.numero,
    }));
    return this.supabase.fromQuery(
      this.supabase.client.from('enderecos').insert(payload)
    ).pipe(map(() => undefined));
  }

  private handleError(error: any) {
    return throwError(() => error?.message || 'Erro ao acessar o Supabase');
  }
}
