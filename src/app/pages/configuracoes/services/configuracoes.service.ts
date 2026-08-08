import { Observable } from 'rxjs';
import { Configuracoes } from '../domain/configuracoes';

export abstract class ConfiguracoesService {
  abstract getConfiguracoes(): Observable<Configuracoes>;
  abstract updateConfiguracoes(configuracoes: Configuracoes): Observable<Configuracoes>;
}
