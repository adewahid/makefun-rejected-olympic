import { writeFileSync, mkdirSync } from "node:fs";

// Rejected Olympic Sports: one funny single-line sport the Olympics turned down.
// Small talk as an endurance event: two athletes, one weather forecast, four
// hours, and a single forbidden word — traffic. The commentator has to call
// it like a marathon while nothing at all happens, which is the whole joke:
// the most boring conversation on earth, played dead straight, until one
// athlete cracks and mentions the M25. The disqualification rule is the
// punchline, and the punchline is the rule.
const entry =
  "Competitive Small Talk: two athletes discuss the weather for four hours straight — the first to mention the traffic is disqualified.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
