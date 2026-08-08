import { Observable } from 'rxjs';
import { Cliente } from '../domain/cliente';

export abstract class ClienteService {
  abstract getAllClientes(ativo?: boolean): Observable<Cliente[]>;
  abstract getClienteById(id: number): Observable<Cliente>;
  abstract getClienteByNome(nome: string): Observable<Cliente[]>;
  abstract saveCliente(cliente: Cliente): Observable<Cliente>;
  abstract updateCliente(cliente: Cliente): Observable<Cliente>;
  abstract deleteCliente(id: number): Observable<Cliente>;
}
