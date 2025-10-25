/* eslint-disable */
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const dataDir = path.join(projectRoot, "data");

if (!fs.existsSync(dataDir)) {
    console.error("data directory not found at", dataDir);
    process.exit(2);
}

const requiredFields = ["id", "title", "levels", "units", "lessons"];

const files = fs
    .readdirSync(dataDir)
    .filter(f => f.endsWith(".ts") || f.endsWith(".js"));

console.log("Validating curriculum files in", dataDir);
console.log("Found", files.length, "files");

const report = [];

for (const file of files) {
    const fp = path.join(dataDir, file);
    const txt = fs.readFileSync(fp, "utf8");
    const missing = [];
    for (const field of requiredFields) {
        // simple heuristic: field name appears as a word in the file
        const re = new RegExp("\\b" + field + "\\b");
        if (!re.test(txt)) missing.push(field);
    }
    const hasExport =
        /export\s+(default|const|let|var|function|class)\s+/m.test(txt);
    report.push({ file, missing, hasExport });
}

let problems = 0;
for (const r of report) {
    if (!r.hasExport) {
        console.log(`\n[ERROR] ${r.file}: no export statement detected`);
        problems++;
    }
    if (r.missing.length) {
        console.log(
            `\n[WARN] ${r.file}: missing fields -> ${r.missing.join(", ")}`,
        );
        problems++;
    } else {
        console.log(`\n[OK] ${r.file}: seems to contain required fields`);
    }
}

console.log("\nSummary:");
console.log("  files checked:", report.length);
console.log("  issues found:", problems);

process.exit(problems > 0 ? 1 : 0);
