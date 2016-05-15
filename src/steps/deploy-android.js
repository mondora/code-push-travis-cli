const pkg = require(`${process.env.TRAVIS_BUILD_DIR}/package.json`);
import {execSync as sh} from "child_process";

function targetBinary () {
    return process.env.ANDROID_TARGET_BINARY ? `-t ${process.env.ANDROID_TARGET_BINARY}` : "";
}

export default function codepushAndroidDeploy (argv) {
    sh(`code-push release-react ${pkg.name}-android android --des "${argv.description}" -m ${argv.mandatory} ${targetBinary(argv)}`, {stdio: [0, 1, 2]});
    sh(`code-push deployment ls ${pkg.name}-android`, {stdio: [0, 1, 2]});
}
