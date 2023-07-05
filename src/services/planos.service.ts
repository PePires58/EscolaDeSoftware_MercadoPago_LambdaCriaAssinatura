import { PlanosClient } from "../clients/planos.client";
import { Plano } from "../models/plano";

export class PlanosService {

    constructor() {
        this.planoClient = new PlanosClient();
    }

    private planoClient: PlanosClient;

    async BuscaPlanoPorCodigo(codigoExterno: string): Promise<Plano | undefined> {
        const planos = await this.planoClient.BuscaPlanos();
        return planos.find(c => c.ReferenciaExterna === codigoExterno);
    }
}