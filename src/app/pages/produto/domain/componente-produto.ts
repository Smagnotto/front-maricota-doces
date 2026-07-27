import { TiposInsumos } from "../../insumos/domain/tipos-insumos";

export interface ComponenteProduto {
    id_produto: number;
    nome: string;
    quantidade: number;
    tipo: TiposInsumos;
    valor: number;
}
