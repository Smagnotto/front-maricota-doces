import { TiposInsumos } from "../../insumos/domain/tipos-insumos";

export interface InsumoProduto {
    id_insumo: number;
    nome: string;
    quantidade: number;    
    tipo: TiposInsumos
}