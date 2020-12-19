const baseURL = "https://github.com/DefinitelyTyped/DefinitelyTyped";
const readmeLink = (header: string) =>
    `${baseURL}#user-content-${header.replace(/[^\w -]/g, "").replace(/ /g, "-").toLowerCase()}`;

export const review = (n: number) => `${baseURL}/pull/${n}/files`;
export const testingEditedPackages = readmeLink("Test editing an existing package");
export const testingNewPackages = readmeLink("Adding tests to a new package");
export const definitionOwners = readmeLink("Definition Owners");
export const workflow = readmeLink("Make a pull request");
export const packageJson = readmeLink("`package.json`");
export const linterJson = readmeLink("Linter: `tslint.json`");
export const tsconfigJson = readmeLink("`tsconfig.json`");
