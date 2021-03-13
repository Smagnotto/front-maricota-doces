import { Cliente } from '../../clientes/domain/cliente';
import { ProdutoEncomenda } from '../encomenda-info/produtos-encomenda/model/ProdutoEncomenda';

export class Encomenda {
  constructor(
    id?: number,
    pago?: boolean,
    retira?: boolean,
    cliente?: Cliente,
    produtos?: ProdutoEncomenda[]
  ) {
    this.id = id || 0;
    this.pago = pago || false;
    this.retira = retira || false;
    this.cliente = cliente || undefined;
    this.produtos = produtos || undefined;
  }

  id: number;
  data: Date;
  pago: boolean;
  retira: boolean;
  cliente?: Cliente;
  produtos?: ProdutoEncomenda[];

  isValid(): boolean {
    return this.data !== undefined && this.cliente !== undefined && this.produtos !== undefined;
  }

  addProduto(produto: ProdutoEncomenda) {
    this.produtos?.push(produto);
  }
}
