import { Insumo } from '../../insumos/domain/insumo';

export interface ListaProduto {
  id: number;
  nome: string;
  preco: number;
  ativo: boolean;
}
