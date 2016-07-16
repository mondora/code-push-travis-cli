import {execSync} from "child_process";

export default function codepushLogin () {
    const codepushAccessKey = process.env.CODE_PUSH_ACCESS_KEY;
    execSync(`code-push login --accessKey "${codepushAccessKey}"`);
}
