import { Produto } from 'src/app/pages/produto/domain/produto';

export interface ProdutoEncomenda extends Omit<Produto, 'insumos' | 'ativo'> {
  quantidade: number;
  total: number;
}
