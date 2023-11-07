export default {
    displayName: "unit",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/__tests__/**/unit/**/*.[jt]s?(x)"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}