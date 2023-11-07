export default {
    projects: [
        "<rootDir>/jest.unit.config.ts",
        "<rootDir>/jest.e2e.config.ts",
    ] ,
    roots: ["<rootDir>/src"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}