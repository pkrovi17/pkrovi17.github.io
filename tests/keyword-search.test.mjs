import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { findMatches, matchedWords } from '../keyword-search/match.mjs';
const resume = JSON.parse(fs.readFileSync(new URL('../keyword-search/resume.json', import.meta.url)));

test('index is built from the current PDF and every highlight fits its page', () => {
  const pdf = fs.readFileSync(new URL('../resume(1).pdf', import.meta.url));
  assert.equal(createHash('sha256').update(pdf).digest('hex'), resume.sha256);
  for (const entry of resume.entries) {
    assert.ok(resume.pages[entry.page - 1]);
    for (const word of entry.words) {
      assert.ok(word.x >= 0 && word.y >= 0 && word.x + word.w <= 100 && word.y + word.h <= 100);
      assert.ok(word.end > word.start && word.end <= entry.text.length);
    }
  }
});

test('results contain actual experience with employer context and matching word positions', () => {
  const python = findMatches(resume.entries, 'PYTHON');
  assert.ok(python.some(match => match.entry.role.includes('ACM') && match.entry.text.includes('sensor')));
  for (const match of python) {
    assert.ok(matchedWords(match).some(word => match.entry.text.slice(word.start, word.end).toLowerCase().includes('python')));
  }
  assert.ok(findMatches(resume.entries, 'telemetry').some(match => match.entry.role.includes('Baja')));
  assert.ok(findMatches(resume.entries, 'aerospace').some(match => match.entry.role.includes('Plexus')));
});

test('phrases span wrapped lines; punctuation is literal and empty/missing queries are safe', () => {
  assert.ok(findMatches(resume.entries, 'navigation using Arduino').length);
  assert.ok(findMatches(resume.entries, '  real-time   vehicle  ').length);
  assert.ok(findMatches(resume.entries, 'C++').length);
  for (const query of ['', '   ', 'unmatchedxyz', '<script>', '[.*]']) assert.deepEqual(findMatches(resume.entries, query), []);
});
