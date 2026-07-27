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