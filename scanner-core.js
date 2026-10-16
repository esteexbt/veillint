// VeilLint heuristic rules. These are review prompts, not proof of vulnerabilities.
export const rules = [
  { id:'secret-log', severity:'high', title:'Potential secret or key material in logs', description:'A logging call appears to include a seed, private key, spending key, or wallet secret. If real, logs and crash reports can expose funds.', fix:'Never log secret material. Remove the field at source, redact structured logs, and check crash/telemetry pipelines.', test:/\b(console\.(?:log|info|debug|warn|error)|logger\.(?:info|debug|warn|error)|print)\s*\([^\n]*(?:seed(?:Phrase)?|mnemonic|privateKey|spendingKey|secretKey)\b/i },
  { id:'viewing-key', severity:'high', title:'Viewing-key export or handling detected', description:'Viewing keys can reveal sensitive wallet history even when they cannot spend funds. Check whether the key reaches a server, analytics, logs, or untrusted client code.', fix:'Keep viewing keys within the wallet boundary. Share only when necessary, with explicit consent and a documented scope; never include them in telemetry.', test:/\b(?:exportFullViewingKey|exportViewingKey|z_exportviewingkey|fullViewingKey|viewingKey)\b/i },
  { id:'transparent-send', severity:'high', title:'Transparent-send API pattern detected', description:'This API name may indicate a transparent payment path. Confirm the intended pool and address type; a function name alone does not prove transaction privacy.', fix:'If privacy is required, use a supported shielded payment flow and verify source and destination behavior against the actual SDK.', test:/\b(?:sendtoaddress|sendmany|sendrawtransaction|transparentSend|sendTransparent|taddr)\b/i },
  { id:'personal-memo', severity:'medium', title:'Potential personal data in a payment memo', description:'Memo text appears to contain an email, phone number, or personal identifier. Recipients and app code may still see plaintext even when an on-chain shielded memo is encrypted.', fix:'Prefer opaque invoice references. Minimize memo content and check where plaintext is constructed, stored, backed up, and displayed.', test:/(?:memo|message|note)\s*(?:=|:).*?(?:[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|\b(?:\+?\d[\d ()-]{7,}\d)\b|\b[A-Z][a-z]+\s[A-Z][a-z]+\b)/i },
  { id:'analytics-tx', severity:'medium', title:'Payment identifiers or amounts sent to analytics', description:'An analytics or telemetry call appears near transaction identifiers, addresses, or amounts. This can create identifying links when joined with account or device metadata.', fix:'Minimize telemetry. Avoid sending addresses, amounts, transaction IDs, memos, or precise timing unless essential; document retention and access controls.', test:/(?:analytics|track|telemetry|capture|posthog|segment)\s*\([^\n]*(?:address|recipient|amount|txid|transaction|memo)/i },
  { id:'rpc-endpoint', severity:'medium', title:'Direct RPC / lightwallet endpoint configured', description:'A direct endpoint may observe connection metadata such as IP address and request timing. Shielded transaction contents do not hide all network metadata.', fix:'Document the endpoint trust model. Minimize identifying request patterns and review transport, routing, and broadcast behavior.', test:/(?:lightwalletd|LightwalletdClient|rpcUrl|rpc_url|zcashd|fetch\s*\(\s*['"]https?:\/\/)/i },
  { id:'address-log', severity:'medium', title:'Address or transaction data may be logged', description:'A logging statement appears to include a recipient, address, transaction ID, amount, or memo. Correlation with identity can undermine application privacy.', fix:'Log coarse operational events instead of transaction details. Redact sensitive fields and inspect production logs, observability, and error-reporting paths.', test:/\b(?:console\.(?:log|info|debug|warn|error)|logger\.(?:info|debug|warn|error))\s*\([^\n]*(?:address|recipient|txid|transaction|amount|memo)\b/i },
  { id:'transparent-address', severity:'low', title:'Transparent address prefix or field detected', description:'The source includes a possible transparent address or related variable. Transparent addresses are not inherently vulnerabilities, but may conflict with a shielded-only privacy promise.', fix:'Validate address type at the payment boundary. Distinguish transparent, shielded, and shielding flows in UI copy and tests.', test:/(?:\bt1[a-km-zA-HJ-NP-Z1-9]{25,}\b|\bt3[a-km-zA-HJ-NP-Z1-9]{25,}\b|transparentAddress|transparent_address)/i }
];

// Avoid obvious non-executable text that commonly causes self-scan false positives.
// This is deliberately conservative and is not a full parser.
function isNonCodeContext(line) {
  const trimmed = line.trim();
  if (!trimmed || /^(?:\/\/|\*|\*\/|<!--|#\s)/.test(trimmed)) return true;
  if (/\bchecklist\s*=\s*\[/.test(line)) return true;
  if (/\bid\s*:\s*['"](?:secret-log|viewing-key|transparent-send|personal-memo|analytics-tx|rpc-endpoint|address-log|transparent-address)['"]/.test(line)
      && /\b(?:severity|title|description|fix|test|extract)\s*:/.test(line)) return true;
  return false;
}

export function scanSource(sourceText) {
  const lines = String(sourceText ?? '').split(/\r?\n/);
  const found = [];
  for (const rule of rules) {
    const matches = [];
    lines.forEach((line, index) => {
      if (isNonCodeContext(line)) return;
      // Reset state defensively in case a future rule uses a global regex.
      rule.test.lastIndex = 0;
      if (rule.test.test(line)) matches.push({ line: index + 1, text: line.trim().slice(0, 240) });
    });
    if (matches.length) found.push({ ...rule, matches });
  }
  return found;
}
