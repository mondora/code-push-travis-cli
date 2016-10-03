[![npm version](https://badge.fury.io/js/code-push-travis-cli.svg)](https://badge.fury.io/js/code-push-travis-cli)
[![Build Status](https://travis-ci.org/mondora/code-push-travis-cli.svg?branch=master)](https://travis-ci.org/mondora/code-push-travis-cli)
[![codecov.io](https://codecov.io/github/mondora/code-push-travis-cli/coverage.svg?branch=master)](https://codecov.io/github/mondora/code-push-travis-cli?branch=master)
[![Dependency Status](https://david-dm.org/mondora/code-push-travis-cli.svg)](https://david-dm.org/mondora/code-push-travis-cli)
[![devDependency Status](https://david-dm.org/mondora/code-push-travis-cli/dev-status.svg)](https://david-dm.org/mondora/code-push-travis-cli#info=devDependencies)

# code-push-travis-cli

code-push cli for travis-ci.

## Usage

![CLI options](https://cloud.githubusercontent.com/assets/10374360/19037197/4bf7fb16-8975-11e6-9589-7f550f461f1a.png)

## Configuration

The following environment variables are needed to configure the CLI:

* `CODE_PUSH_ACCESS_KEY` __string__ *required*: the code-push access key for the login

## Example usage

In your `.travis.yml` file:

```yml
language: node_js

node_js:
  - 6

script:
  - code-push-travis
```
