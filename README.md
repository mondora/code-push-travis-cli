[![npm version](https://badge.fury.io/js/code-push-travis-cli.svg)](https://badge.fury.io/js/code-push-travis-cli)
[![Build Status](https://travis-ci.org/mondora/code-push-travis-cli.svg?branch=master)](https://travis-ci.org/mondora/code-push-travis-cli)
[![Dependency Status](https://david-dm.org/mondora/code-push-travis-cli.svg)](https://david-dm.org/mondora/code-push-travis-cli)
[![devDependency Status](https://david-dm.org/mondora/code-push-travis-cli/dev-status.svg)](https://david-dm.org/mondora/code-push-travis-cli#info=devDependencies)

# code-push-travis-cli

code-push script for travis-ci.

## Usage

In your `.travis.yml` file:

```yml
language: node_js

node_js:
  - 6

install:
  - npm install

script:
  - code-push-travis
```

## Todo

Add option for deployment name.
