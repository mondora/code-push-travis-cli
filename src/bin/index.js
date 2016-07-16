#!/usr/bin/env node

import yargs from "yargs";

import pkg from "../../package.json";
import codePushTravis from "../index";

const argv = yargs
    .version(pkg.version)
    .help("h")
    .alias("h", "help")
    .wrap(100)
    .usage("Usage: $0 <options>")
    .option("b", {
        alias: "branchToDeploy",
        default: "master",
        describe: "This specifies which branch you want to deploy",
        type: "string"
    })
    .option("d", {
        alias: "deploymentName",
        default: "Staging",
        describe: "This specifies which deployment you want to release the update to",
        type: "string"
    })
    .option("des", {
        alias: "description",
        default: "travis deploy - $TRAVIS_COMMIT",
        describe: "Description of the deployment",
        type: "string"
    })
    .option("dev", {
        alias: "development",
        default: false,
        describe: "This specifies whether to generate a unminified, development JS bundle",
        type: "boolean"
    })
    .option("m", {
        alias: "mandatory",
        default: true,
        describe: "Check if you want your push is mandatory",
        type: "boolean"
    })
    .option("platform", {
        alias: "platforms",
        default: ["android", "ios"],
        describe: "Platform to push [ios or android]",
        choices: ["android", "ios"],
        type: "array"
    })
    .option("targetBinary", {
        alias: "t",
        describe: "The store/binary version of the application you are releasing the update for",
        type: "string"
    })
    .argv;

codePushTravis(argv);
