import { Observable } from 'rxjs';
import { Insumo } from '../domain/insumo';

export abstract class InsumoService {
  abstract getAllInsumos(ativo?: boolean): Observable<Insumo[]>;
  abstract getInsumoByNome(nome: string): Observable<Insumo[]>;
  abstract getInsumoById(id: number): Observable<Insumo>;
  abstract saveInsumo(insumo: Insumo): Observable<Insumo>;
  abstract updateInsumo(insumo: Insumo): Observable<Insumo>;
  abstract deleteInsumo(id: number): Observable<Insumo>;
}
