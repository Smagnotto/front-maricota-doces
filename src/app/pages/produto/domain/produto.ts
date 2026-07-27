import { InsumoProduto } from "./insumo-produto";
import { ComponenteProduto } from "./componente-produto";

export interface Produto {
    id: number;
    nome: String;
    ativo: boolean;
    preco?: number;
    custo?: number;
    margemPercentual?: number;
    insumos: InsumoProduto[];
    componentes: ComponenteProduto[];
}
