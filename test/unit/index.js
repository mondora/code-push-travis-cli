import path from "path";

import codePushTravis from "index";
import pkg from "../mocks/package";

describe("`codePushTravis` function", () => {

    const codepushLogin = sinon.spy();
    const codepushLogout = sinon.spy();
    const codepushReleaseReact = sinon.spy();
    var defaultProcessEnv = {};

    before(() => {
        defaultProcessEnv = process.env;
        codePushTravis.__Rewire__("codepushLogin", codepushLogin);
        codePushTravis.__Rewire__("codepushLogout", codepushLogout);
        codePushTravis.__Rewire__("codepushReleaseReact", codepushReleaseReact);
    });

    beforeEach(() => {
        process.env = defaultProcessEnv;
        codepushLogin.reset();
        codepushLogout.reset();
        codepushReleaseReact.reset();
    });

    after(() => {
        process.env = defaultProcessEnv;
        codePushTravis.__ResetDependency__("codepushLogin");
        codePushTravis.__ResetDependency__("codepushLogout");
        codePushTravis.__ResetDependency__("codepushReleaseReact");
    });

    it("skip all functions [CASE: `TRAVIS_PULL_REQUEST` is true]", () => {
        process.env.TRAVIS_PULL_REQUEST = true;
        process.env.TRAVIS_BRANCH = "master";
        const argv = {
            branchToDeploy: "master"
        };
        codePushTravis(argv);
        expect(codepushLogin).to.have.callCount(0);
        expect(codepushReleaseReact).to.have.callCount(0);
        expect(codepushLogout).to.have.callCount(0);
    });

    it("skip all functions [CASE: `TRAVIS_BRANCH` is not the branchToDeploy]", () => {
        process.env.TRAVIS_PULL_REQUEST = false;
        process.env.TRAVIS_BRANCH = "not-master";
        const argv = {
            branchToDeploy: "master"
        };
        codePushTravis(argv);
        expect(codepushLogin).to.have.callCount(0);
        expect(codepushReleaseReact).to.have.callCount(0);
        expect(codepushLogout).to.have.callCount(0);
    });

    it("release to code-push [CASE: platforms contains only android]", () => {
        process.env.TRAVIS_PULL_REQUEST = false;
        process.env.TRAVIS_BRANCH = "master";
        process.env.TRAVIS_BUILD_DIR = path.join(__dirname, "..", "mocks");
        const argv = {
            branchToDeploy: "master",
            platforms: ["android"]
        };
        codePushTravis(argv);
        expect(codepushLogin).to.have.callCount(1);
        expect(codepushReleaseReact).to.have.callCount(1);
        expect(codepushReleaseReact).to.have.been.calledWithExactly(argv, "android", pkg);
        expect(codepushLogout).to.have.callCount(1);
    });

    it("release to code-push [CASE: platforms contains both android and ios]", () => {
        process.env.TRAVIS_PULL_REQUEST = false;
        process.env.TRAVIS_BRANCH = "master";
        process.env.TRAVIS_BUILD_DIR = path.join(__dirname, "..", "mocks");
        const argv = {
            branchToDeploy: "master",
            platforms: ["android", "ios"]
        };
        codePushTravis(argv);
        expect(codepushLogin).to.have.callCount(1);
        expect(codepushReleaseReact).to.have.callCount(2);
        expect(codepushReleaseReact.firstCall).to.have.been.calledWithExactly(argv, "android", pkg);
        expect(codepushReleaseReact.secondCall).to.have.been.calledWithExactly(argv, "ios", pkg);
        expect(codepushLogout).to.have.callCount(1);
    });

});
