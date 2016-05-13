const pkg = require(`${process.env.TRAVIS_BUILD_DIR}/package.json`);
import {execSync as sh} from "child_process";

function targetBinary () {
    return process.env.IOS_TARGET_BINARY ? `-t ${process.env.IOS_TARGET_BINARY}` : "";
}

export default function codepushIOSDeploy (argv) {
    sh(`code-push release-react ${pkg.name}-ios ios --des ${argv.description} -m ${argv.mandatory} ${targetBinary(argv)}`, {stdio: [0, 1, 2]});
    sh(`code-push deployment ls ${appName}`, {stdio: [0, 1, 2]});
}
