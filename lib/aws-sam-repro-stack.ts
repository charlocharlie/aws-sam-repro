import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as dynamodb from '@aws-cdk/aws-dynamodb';


export class AwsSamReproStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new dynamodb.Table(this, 'Table', {
      tableName: 'my-table-name',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    })

    const handler = new lambda.Function(this, 'Handler', {
      code: lambda.Code.fromAsset(`./lambda/dist`),
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'handler.handler',
      environment: {
        TABLE_NAME: table.tableName,
        TEST_VAR_TEMPLATE: 'TEST',
      }
    });

    const api = new apigateway.RestApi(this, 'APIGateway');
    api.root.addMethod('GET', new apigateway.LambdaIntegration(handler));
  }
}
