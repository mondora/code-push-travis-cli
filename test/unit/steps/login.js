import codepushLogin from "steps/login";

describe("`codepushLogin` function", () => {

    const execSync = sinon.spy();

    before(() => {
        process.env.CODE_PUSH_ACCESS_KEY = "code-push-access-key";
        codepushLogin.__Rewire__("execSync", execSync);
    });

    beforeEach(() => {
        execSync.reset();
    });

    after(() => {
        codepushLogin.__ResetDependency__("execSync");
        delete process.env.CODE_PUSH_ACCESS_KEY;
    });

    it("calls `execSync` function with the correct command to login", () => {
        codepushLogin();
        expect(execSync).to.have.callCount(1);
        expect(execSync).to.have.been.calledWithExactly("code-push login --accessKey \"code-push-access-key\"");
    });

});
