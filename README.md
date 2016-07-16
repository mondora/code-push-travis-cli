[![npm version](https://badge.fury.io/js/code-push-travis-cli.svg)](https://badge.fury.io/js/code-push-travis-cli)
[![Build Status](https://travis-ci.org/mondora/code-push-travis-cli.svg?branch=master)](https://travis-ci.org/mondora/code-push-travis-cli)
[![Dependency Status](https://david-dm.org/mondora/code-push-travis-cli.svg)](https://david-dm.org/mondora/code-push-travis-cli)
[![devDependency Status](https://david-dm.org/mondora/code-push-travis-cli/dev-status.svg)](https://david-dm.org/mondora/code-push-travis-cli#info=devDependencies)

# code-push-travis-cli

code-push cli for travis-ci.

## Usage

![CLI options](https://cloud.githubusercontent.com/assets/10374360/16896740/5cc09834-4b9c-11e6-8c40-e59edb0f60f6.png)

## Example usage

In your `.travis.yml` file:

```yml
language: node_js

node_js:
  - 6

script:
  - code-push-travis
```
