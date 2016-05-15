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
    .option("m", {
        alias: "mandatory",
        default: true,
        describe: "Check if you want your push is mandatory",
        type: "boolean"
    })
    .option("d", {
        alias: "description",
        default: "travis deploy - $TRAVIS_COMMIT",
        describe: "Description of the deployment",
        type: "string"
    })
    .option("p", {
        alias: "platform",
        default: ["ios", "android"],
        describe: "Platform to push [ios or android]",
        choices: ["ios", "android"],
        type: "array"
    })
    .argv;

codePushTravis(argv);
