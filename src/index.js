import {contains} from "ramda";

import installCodePushCli from "./steps/install";
import codepushLogin from "./steps/login";
import codepushDeployAndroid from "./steps/deploy-android";
import codepushDeployIOS from "./steps/deploy-ios";
import codepushLogout from "./steps/logout";

export default function codePushTravis (argv) {
    if (process.env.TRAVIS_BRANCH === "master" && process.env.TRAVIS_PULL_REQUEST === "false") {
        installCodePushCli();
        codepushLogin();
        contains("android", argv.p) ? codepushDeployAndroid(argv) : null;
        contains("ios", argv.p) ? codepushDeployIOS(argv) : null;
        codepushLogout();
    }
}
