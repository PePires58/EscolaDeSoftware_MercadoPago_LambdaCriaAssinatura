import axios from "axios";
import { Plano } from "../models/plano";
import { ParameterStoreService } from "../services/parameter-store.service";

export class PlanosClient {

    async BuscaPlanos(): Promise<Plano[]> {

        try {
            const urlBuscaPlano = `${await this.BuscaUrl()}/planos`;
            const response = await axios.get<Plano[]>(urlBuscaPlano);

            if (response.status === 200)
                return response.data;
            return [];
        } catch (error) {
            console.error('Erro ao obter os planos:', error);
            throw error;
        }

    }

    private async BuscaUrl(): Promise<string> {
        return await new ParameterStoreService().BuscarSegredo(
            process.env.SecretRotaApiMercadoPago || '',
            false
        );
    }
}