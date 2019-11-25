# Issue Repro for serverless-application-model

Two issues are demonstrated in this reproduction:

1. Lambda environment variable `Ref:`s are not resolved to resource names
2. `--env-vars` does not work for `sam local start-api`

## Setup

1. Clone this repository
1. `npm i`
1. Run `./sam.sh`
1. Open http://localhost:3000/ in your browser

### Observe the environment variables in the console

* TABLE_NAME is the template resource name rather than "my-table-name"
* TEST_VAR_JSON is not in the environment variables
