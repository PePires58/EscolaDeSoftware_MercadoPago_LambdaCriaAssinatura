import { Recorrencia } from "./recorrencia";

export interface Plano {
    Id: string;
    NomePlano: string;
    Status: string;
    BackUrl: string;
    Recorrencia: Recorrencia;
    ReferenciaExterna: string;
}