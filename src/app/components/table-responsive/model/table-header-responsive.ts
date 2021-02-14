import { TypeColumns } from "./type-columns";

export interface TableHeader {
    labelColumn: string;
    fieldName: string;
    typeColumn: TypeColumns;
    sortableColumn: boolean;
}