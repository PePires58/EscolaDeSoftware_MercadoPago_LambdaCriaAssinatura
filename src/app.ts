
import { Erro } from './models/erro';

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda/trigger/api-gateway-proxy';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {


    try {
        return defaultResult(200, {});
    } catch (error) {
        console.log(error);
        throw error;
    }
};

function errorResult(statusCode: number, erros: Erro[]) {
    return defaultResult(statusCode, {
        erros: erros,
    });
}

function defaultResult(statusCode: number, object: object) {
    return {
        statusCode: statusCode,
        body: JSON.stringify(object),
        isBase64Encoded: false,
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
