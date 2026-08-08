import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SupabaseService } from 'src/app/core/supabase/supabase.service';
import { Configuracoes } from '../domain/configuracoes';
import { ConfiguracoesService } from './configuracoes.service';

@Injectable()
export class ConfiguracoesSupabaseService extends ConfiguracoesService {
  private supabase = inject(SupabaseService);

  getConfiguracoes(): Observable<Configuracoes> {
    return this.supabase.fromQuery(
      this.supabase.client
        .from('configuracoes')
        .select('margem_percentual')
        .limit(1)
        .single()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return { margemPercentual: data.margem_percentual } as Configuracoes;
      }),
      catchError(this.handleError)
    );
  }

  updateConfiguracoes(configuracoes: Configuracoes): Observable<Configuracoes> {
    return this.supabase.fromQuery(
      this.supabase.client
        .from('configuracoes')
        .update({ margem_percentual: configuracoes.margemPercentual })
        .eq('id', 1)
        .select('margem_percentual')
        .single()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return { margemPercentual: data.margem_percentual } as Configuracoes;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    return throwError(() => error?.message || 'Erro ao acessar o Supabase');
  }
}
