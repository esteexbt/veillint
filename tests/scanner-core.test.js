import test from 'node:test';
import assert from 'node:assert/strict';
import { scanSource } from '../scanner-core.js';

const ids = (source) => scanSource(source).map((finding) => finding.id);

test('detects a secret included in a logging call', () => {
  assert.ok(ids("console.log('debug', { seed: wallet.seedPhrase });").includes('secret-log'));
});

test('detects analytics calls carrying transaction details', () => {
  assert.ok(ids("analytics.track('payment', { recipient, amount, txid });").includes('analytics-tx'));
});

test('does not flag clean unrelated source', () => {
  assert.deepEqual(scanSource("const total = 2 + 2;\nfunction greet() { return 'hello'; }").map(f => f.id), []);
});

test('ignores full-line comments that only mention a risky pattern', () => {
  assert.deepEqual(scanSource('// console.log({ seed: wallet.seedPhrase });').map(f => f.id), []);
});

test('does not report scanner rule metadata as application findings', () => {
  const source = `  {id:'viewing-key',severity:'high',title:'Viewing-key export or handling detected',description:'viewingKey can reveal sensitive history',test:/viewingKey/i},\n  {id:'transparent-send',severity:'high',title:'Transparent-send API pattern detected',description:'sendtoaddress is a possible pattern',test:/sendtoaddress/i}`;
  assert.deepEqual(scanSource(source).map(f => f.id), []);
});

test('does not report the built-in checklist definition as a configured endpoint', () => {
  const source = `const checklist=[['Network metadata','Review RPC/lightwalletd trust, IP exposure, timing, retries, and broadcast behavior.']];`;
  assert.deepEqual(scanSource(source).map(f => f.id), []);
});
