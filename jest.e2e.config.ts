export default {
    displayName: "e2e",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/__tests__/**/e2e/**/*.[jt]s?(x)"],
}