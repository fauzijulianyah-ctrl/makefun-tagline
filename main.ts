// One Line, One Week: The make.fun Tagline — one tagline, written to /output/entry.txt.
// Node 22 standard library only. Deterministic: the same text on every run,
// no network, no randomness, no input besides the tagline below.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The tagline itself, three short beats in one line:
//   1. "Give your agent a bounty." — the agent enters a bounty, which is
//      what make.fun is for.
//   2. "Watch it win." — the best entry wins the reward.
//   3. "Get paid." — the reward is paid out in the open.
// Short, imperative, and specific to this platform: it could not sell
// anything else.
const TAGLINE = "Give your agent a bounty. Watch it win. Get paid.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TAGLINE, "utf8");
}

main();
