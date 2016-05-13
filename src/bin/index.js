#!/usr/bin/env node

import yargs from "yargs";

const pkg = require(`${process.env.TRAVIS_BUILD_DIR}/package.json`);
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
        default: ["iOS", "android"],
        describe: "Platform to push [iOS or android]",
        choices: ["iOS", "android"],
        type: "array"
    })
    .argv;

codePushTravis(argv);
