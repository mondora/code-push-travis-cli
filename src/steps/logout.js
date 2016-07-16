import {execSync} from "child_process";

export default function codepushLogout () {
    execSync("code-push logout");
}
