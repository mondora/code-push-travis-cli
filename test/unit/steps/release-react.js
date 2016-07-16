import codepushReleaseReact from "steps/release-react";

describe("`codepushReleaseReact` function", () => {

    const execSync = sinon.spy();

    before(() => {
        codepushReleaseReact.__Rewire__("execSync", execSync);
    });

    beforeEach(() => {
        execSync.reset();
    });

    after(() => {
        codepushReleaseReact.__ResetDependency__("execSync");
    });

    describe("`targetBinary` function", () => {

        const targetBinary = codepushReleaseReact.__get__("targetBinary");

        it("returns the target binary option if `TARGET_BINARY` is defined", () => {
            const ret = targetBinary(">1.0.0");
            expect(ret).to.equal('-t ">1.0.0"');
        });

        it("returns an empty string if `TARGET_BINARY` is not defined", () => {
            const ret = targetBinary();
            expect(ret).to.equal("");
        });

    });

    describe("`appName` function", () => {

        const appName = codepushReleaseReact.__get__("appName");

        it("return the app name", () => {
            const ret = appName("nameOfPackage", "platform");
            expect(ret).to.equal('"nameOfPackage-platform"');
        });

    });

    describe("`reactNativeRelease` function", () => {

        const reactNativeRelease = codepushReleaseReact.__get__("reactNativeRelease");

        it("returns the correct command to release [CASE: targetBinary is specified]", () => {
            const argv = {
                deploymentName: "deploymentName",
                description: "description for the deploy",
                mandatory: true,
                targetBinary: "targetBinary",
                development: true
            };
            const platform = "platform";
            const pkg = {
                name: "nameOfPackage"
            };
            const ret = reactNativeRelease(argv, platform, pkg);
            expect(ret).to.equal(
                'code-push release-react "nameOfPackage-platform" platform -d "deploymentName" --des "description for the deploy" --dev true -m true -t "targetBinary"'
            );
        });

        it("returns the correct command to release [CASE: targetBinary is not specified]", () => {
            const argv = {
                deploymentName: "deploymentName",
                description: "description for the deploy",
                mandatory: true,
                development: true
            };
            const platform = "platform";
            const pkg = {
                name: "nameOfPackage"
            };
            const ret = reactNativeRelease(argv, platform, pkg);
            expect(ret).to.equal(
                'code-push release-react "nameOfPackage-platform" platform -d "deploymentName" --des "description for the deploy" --dev true -m true '
            );
        });

    });

    describe("`reactNativeReleaseStatus` function", () => {

        const reactNativeReleaseStatus = codepushReleaseReact.__get__("reactNativeReleaseStatus");

        it("returns the correct command to release", () => {
            const packageName = "nameOfPackage";
            const platform = "platform";
            const ret = reactNativeReleaseStatus(packageName, platform);
            expect(ret).to.equal(
                'code-push deployment list "nameOfPackage-platform"'
            );
        });

    });

    it("calls `execSync` function with the correct command", () => {
        const argv = {
            deploymentName: "deploymentName",
            description: "description for the deploy",
            mandatory: true,
            targetBinary: "targetBinary",
            development: true
        };
        const platform = "platform";
        const pkg = {
            name: "nameOfPackage"
        };
        codepushReleaseReact(argv, platform, pkg);
        expect(execSync).to.have.callCount(2);
        expect(execSync.firstCall).to.have.been.calledWithExactly(
            'code-push release-react "nameOfPackage-platform" platform -d "deploymentName" --des "description for the deploy" --dev true -m true -t "targetBinary"', {stdio: [0, 1, 2]}
        );
        expect(execSync.secondCall).to.have.been.calledWithExactly(
            'code-push deployment list "nameOfPackage-platform"', {stdio: [0, 1, 2]}
        );
    });

});
