import { Endereco } from "./endereco";

export interface Cliente {
    id: number;
    nome: String;
    ativo: boolean;
    enderecos?: Endereco[] | null;
}