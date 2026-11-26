import * as fs from "node:fs";
import * as path from "node:path";

// One-line review of my Monday: concrete details (late standup, flooded
// inbox, dead coffee), deadpan turn, quotable closer. Must stay one line
// and under 200 characters per the gate.
const ENTRY =
  "Monday review: my 9 a.m. standup started at 9:47, my inbox hit 214 unread, and my coffee filed a formal complaint. One star — would not Monday again.";

if (ENTRY.length > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  console.error(`Invalid entry (${ENTRY.length} chars)`);
  process.exit(1);
}
console.error(`entry: ${ENTRY.length} chars, 1 line`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true, mode: 0o755 });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ENTRY, { encoding: "utf8", mode: 0o644 });
console.log(ENTRY);
process.exit(0);
