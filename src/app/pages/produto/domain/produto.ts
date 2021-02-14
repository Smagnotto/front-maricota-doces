import { Insumo } from '../../insumos/domain/insumo';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
  ativo: boolean;
}
