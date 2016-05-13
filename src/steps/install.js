import {execSync as sh} from "child_process";

export default function installCodePushCli () {
    // TODO: change this with latest on npm update
    sh("npm install -g Microsoft/code-push#v1.10.0-beta");
}
