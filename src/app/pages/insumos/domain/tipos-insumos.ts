export interface TiposInsumos {
    nome: string,
    codigo: string
}

export const tiposInsumosOptions: TiposInsumos[] = [
    {
        nome: 'Kg',
        codigo: 'KG',
    },
    {
        nome: 'g',
        codigo: 'G',
    },
    {
        nome: 'l',
        codigo: 'L',
    },
    {
        nome: 'ml',
        codigo: 'ML',
    },
];

type GrupoUnidade = 'MASSA' | 'VOLUME';

const grupoPorUnidade: Record<string, GrupoUnidade> = {
    KG: 'MASSA',
    G: 'MASSA',
    L: 'VOLUME',
    ML: 'VOLUME',
};

const fatorParaUnidadeBase: Record<string, number> = {
    KG: 1,
    G: 0.001,
    L: 1,
    ML: 0.001,
};

/**
 * Converte uma quantidade da unidade de origem para a unidade de destino
 * (Kg <-> g, L <-> ml). Se as unidades forem incompatíveis (ex.: massa
 * para volume) ou desconhecidas, retorna a quantidade original.
 */
export function converterQuantidade(quantidade: number, deCodigo: string, paraCodigo: string): number {
    if (!deCodigo || !paraCodigo || deCodigo === paraCodigo) return quantidade;

    const grupoDe = grupoPorUnidade[deCodigo];
    const grupoPara = grupoPorUnidade[paraCodigo];

    if (!grupoDe || !grupoPara || grupoDe !== grupoPara) return quantidade;

    return (quantidade * fatorParaUnidadeBase[deCodigo]) / fatorParaUnidadeBase[paraCodigo];
}