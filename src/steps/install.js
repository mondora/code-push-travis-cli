import {execSync as sh} from "child_process";

export default function installCodePushCli () {
    sh("npm install -g code-push-cli");
}
