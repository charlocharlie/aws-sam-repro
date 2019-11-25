import { APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (): Promise<APIGatewayProxyResult> => {
  console.log('ENV_VARS:', process.env)
  return {
    statusCode: 200,
    body: "OK"
  }
};