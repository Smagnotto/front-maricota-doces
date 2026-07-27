import { Insumo } from '../../insumos/domain/insumo';

export interface ListaProduto {
  id: number;
  nome: string;
  custo?: number;
  preco: number;
  ativo: boolean;
}
