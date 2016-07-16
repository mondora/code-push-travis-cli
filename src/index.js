import codepushLogin from "./steps/login";
import codepushReleaseReact from "./steps/release-react";
import codepushLogout from "./steps/logout";

export default function codePushTravis (argv) {
    if (process.env.TRAVIS_BRANCH === argv.branchToDeploy && process.env.TRAVIS_PULL_REQUEST === "false") {
        const pkg = require(`${process.env.TRAVIS_BUILD_DIR}/package.json`);
        codepushLogin();
        argv.platforms.forEach(platform => codepushReleaseReact(argv, platform, pkg));
        codepushLogout();
    }
}
