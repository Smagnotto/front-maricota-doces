import { InsumoProduto } from "./insumo-produto";

export interface Produto {
    id: number;
    nome: String;
    preco: number;
    ativo: boolean;
    insumos: InsumoProduto[];
}