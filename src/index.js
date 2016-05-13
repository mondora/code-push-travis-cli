import {contains} from "ramda";

import installCodePushCli from "./steps/install";
import codepushLogin from "./steps/login";
import codepushAndroidDeploy from "./steps/deploy-android";
import codepushIOSDeploy from "./steps/deploy-ios";
import codepushLogout from "./steps/logout";

export default function codePushTravis (argv) {
    if (process.env.TRAVIS_BRANCH === "master" && process.env.TRAVIS_PULL_REQUEST === "false") {
        installCodePushCli();
        codepushLogin();
        contains("android", argv.p) ? codepushAndroidDeploy(argv) : null;
        contains("android", argv.p) ? codepushIOSDeploy(argv) : null;
        codepushLogout();
    }
}
