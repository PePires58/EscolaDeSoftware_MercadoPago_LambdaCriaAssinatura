import { PlanosClient } from '../../clients/planos.client';
import { expect, describe, it } from '@jest/globals';

describe('Testes para o cliente de planos', () => {

    process.env.SecretRotaApiMercadoPago = '/escoladesoftware/dev/apis/mercadopago';

    it('Deve ter planos disponíveis', async () => {
        const planos = await new PlanosClient().BuscaPlanos();

        expect(planos.length).not.toEqual(0);
    });
});
