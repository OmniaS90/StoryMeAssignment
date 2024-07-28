module.exports = {
    default: {
        "require": [
            "StepDefinitions/*.ts",
            "Support/Hooks.ts"
        ],
        "format":
        [
            "progress-bar",
            ["json", "Reports/Cucumber-Reporter.json"],
            ["html", "Reports/Report.html"]
        ],
            "retry":
        2,
        requireModule: ['ts-node/register']
    },
};