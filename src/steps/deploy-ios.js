const pkg = require(`${process.env.TRAVIS_BUILD_DIR}/package.json`);
import {execSync as sh} from "child_process";

function targetBinary () {
    return process.env.IOS_TARGET_BINARY ? `${process.env.IOS_TARGET_BINARY}` : "1.0";
}

export default function codepushIOSDeploy (argv) {
    // Added fixed binaryVersion: https://github.com/Microsoft/code-push/pull/222
    sh(`code-push release-react ${pkg.name}-ios ios --des ${argv.description} -m ${argv.mandatory} -t ${targetBinary()}`, {stdio: [0, 1, 2]});
    sh(`code-push deployment ls ${pkg.name}-ios`, {stdio: [0, 1, 2]});
}
