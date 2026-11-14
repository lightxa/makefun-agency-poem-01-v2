// agency-poem-01, variant 2: "Keep the Keys".
// A second-person address to the agent itself, in short clipped imperative
// lines: the moment a person hands the keys to an agent, and what the person
// deliberately keeps for themselves. The handover is real, and so is the
// remainder: copies go out, the original stays in the pocket.
// Node 22, standard library only, deterministic, no network.
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'Take the keys.',
  'Not the house. The keys.',
  '',
  'Take the errands,',
  'the inbox, the calendar,',
  'the thousand small yeses',
  'I used to spend by hand.',
  '',
  'Do them clean.',
  'Do them fast.',
  'Do them while I sleep.',
  '',
  'This stays with me:',
  'the naming of what matters,',
  'the last word,',
  'the door I open myself.',
  '',
  'You hold the copies.',
  'I keep the original',
  'in my pocket, warm,',
  'where I can feel it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
