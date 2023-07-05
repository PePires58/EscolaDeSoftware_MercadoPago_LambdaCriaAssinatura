import { PlanosService } from './../../services/planos.service';
import { expect, describe, it } from '@jest/globals';

describe('Testes para o serviço de planos', () => {

    process.env.SecretRotaApiMercadoPago = '/escoladesoftware/dev/apis/mercadopago';

    it('Deve ter um plano', async () => {

        const plano = await new PlanosService().BuscaPlanoPorCodigo('ESAST');

        expect(plano).not.toBe(undefined);
    });

    it('Não deve ter um plano', async () => {
        const plano = await new PlanosService().BuscaPlanoPorCodigo('123123');

        expect(plano).not.toBe(undefined);
    });
});
