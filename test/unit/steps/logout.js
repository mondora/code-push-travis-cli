import codepushLogout from "steps/logout";

describe("`codepushLogout` function", () => {

    const execSync = sinon.spy();

    before(() => {
        codepushLogout.__Rewire__("execSync", execSync);
    });

    beforeEach(() => {
        execSync.reset();
    });

    after(() => {
        codepushLogout.__ResetDependency__("execSync");
    });

    it("call `execSync` function with the correct command to logout", () => {
        codepushLogout();
        expect(execSync).to.have.callCount(1);
        expect(execSync).to.have.been.calledWithExactly("code-push logout");
    });

});
