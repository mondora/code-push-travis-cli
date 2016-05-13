import {execSync as sh} from "child_process";

export default function codepushLogin () {
    sh("code-push login --accessKey $CODE_PUSH_ACCESS_KEY");
}
