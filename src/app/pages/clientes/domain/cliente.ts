import { Endereco } from "./endereco";

export interface Cliente {
    id: number;
    nome: String;
    enderecos?: Endereco[] | null;
}