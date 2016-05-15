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
