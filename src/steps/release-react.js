import {execSync} from "child_process";

function targetBinary (targetBinary) {
    return targetBinary ? `-t "${targetBinary}"` : "";
}

function appName (pkgName, platform) {
    return `"${pkgName}-${platform}"`;
}

function reactNativeRelease (argv, platform, pkg) {
    return [
        "code-push",
        "release-react",
        appName(pkg.name, platform),
        platform,
        `-d "${argv.deploymentName}"`,
        `--des "${argv.description}"`,
        `--dev ${argv.development}`,
        `-m ${argv.mandatory}`,
        targetBinary(argv.targetBinary)
    ].join(" ");
}

function reactNativeReleaseStatus (pkgName, platform) {
    return [
        "code-push",
        "deployment",
        "list",
        appName(pkgName, platform)
    ].join(" ");
}

export default function codepushReleaseReact (argv, platform, pkg) {
    execSync(reactNativeRelease(argv, platform, pkg), {stdio: [0, 1, 2]});
    execSync(reactNativeReleaseStatus(pkg.name, platform), {stdio: [0, 1, 2]});
}
