#!/bin/bash
echo "Generating CFN template..."

# Install SAM if not installed
if [[ ! sam ]]; then
  pip install -U aws-sam-cli
fi

# Build lambda code
(cd lambda && npm run build)

# Generate template for SAM local to use
npx cdk synth --no-staging > template.yml

# Run SAM start-api with environment variables from the JSON
sam local start-api --env-vars environment.json --debug