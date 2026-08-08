import { Injectable, inject } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SupabaseService } from 'src/app/core/supabase/supabase.service';
import { Insumo } from '../domain/insumo';
import { InsumoService } from './insumo.service';

@Injectable()
export class InsumoSupabaseService extends InsumoService {
  private supabase = inject(SupabaseService);

  getAllInsumos(ativo?: boolean): Observable<Insumo[]> {
    let query = this.supabase.client.from('insumos').select('*');
    if (ativo !== undefined) {
      query = query.eq('ativo', ativo);
    }
    return from(query.order('nome')).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Insumo[];
      }),
      catchError(this.handleError)
    );
  }

  getInsumoByNome(nome: string): Observable<Insumo[]> {
    return from(
      this.supabase.client.from('insumos').select('*').ilike('nome', `%${nome}%`)
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Insumo[];
      }),
      catchError(this.handleError)
    );
  }

  getInsumoById(id: number): Observable<Insumo> {
    return from(
      this.supabase.client.from('insumos').select('*').eq('id', id).single()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Insumo;
      }),
      catchError(this.handleError)
    );
  }

  saveInsumo(insumo: Insumo): Observable<Insumo> {
    const { id, ...payload } = insumo;
    return from(
      this.supabase.client.from('insumos').insert(payload).select().single()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Insumo;
      }),
      catchError(this.handleError)
    );
  }

  updateInsumo(insumo: Insumo): Observable<Insumo> {
    const { id, ...payload } = insumo;
    return from(
      this.supabase.client.from('insumos').update(payload).eq('id', id).select().single()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Insumo;
      }),
      catchError(this.handleError)
    );
  }

  deleteInsumo(id: number): Observable<Insumo> {
    return from(
      this.supabase.client.from('insumos').delete().eq('id', id).select().single()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Insumo;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(() => error?.message || 'Erro ao acessar o Supabase');
  }
}
