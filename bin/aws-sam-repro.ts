#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwsSamReproStack } from '../lib/aws-sam-repro-stack';

const app = new cdk.App();
new AwsSamReproStack(app, 'AwsSamReproStack');
