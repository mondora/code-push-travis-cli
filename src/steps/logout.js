import {execSync as sh} from "child_process";

export default function codepushLogout () {
    sh("code-push logout");
}
