
export interface Produto {
    nome: string;
    preco: number;
    ativo: boolean;
    materia_prima: boolean;
    lista_materia_prima?: Produto[];
}