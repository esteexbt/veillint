# VeilLint prototype threat model

## Goal
Surface source-level patterns that deserve review because they may undermine privacy or wallet security in applications that use Zcash.

## In scope
- Literal/configured transparent-payment API signals.
- Possible secret material in logging statements.
- Viewing-key export/handling signals.
- Memo text that may contain personal data.
- Analytics/telemetry calls that appear to receive transaction details.
- Direct RPC/lightwalletd endpoint configuration and network-metadata review prompts.

## Out of scope
- Proving a transaction is shielded.
- Cryptographic correctness, key derivation, proof generation, consensus validation.
- Complete program analysis, taint tracking, cross-file data flow, or dependency auditing.
- Runtime traffic, DNS, IP, timing, browser extensions, operating-system compromise, server logs, backups, screenshots, clipboard, or third-party telemetry behavior.
- Detecting every leak or determining whether a detected pattern is exploitable.

## Assumptions and risks
- Source text is processed locally by the browser app; the prototype does not intentionally transmit source content.
- Heuristics can be evaded by aliases, wrappers, dynamic calls, minification, generated code, or indirect data flow.
- Findings can be false positives: transparent addresses can be legitimate; viewing keys can be intentionally and safely shared; RPC calls are not automatically vulnerabilities.
- The tool itself is not security-audited. Its output must not be represented as certification.

## Safe product claims
Use: “flags potential risks for human review.”
Do not use: “guarantees privacy,” “proves the wallet is safe,” or “detects every privacy leak.”
