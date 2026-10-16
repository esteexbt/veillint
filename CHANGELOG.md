# Changelog

## 0.3.0 — 2026-10-16

- Added heuristics for seed material written to browser storage, transaction data passed to error-reporting tools, and payment identifiers included in URLs.
- Expanded automated tests from six to twelve, including negative tests for benign browser storage, ordinary error reporting, and non-payment URL parameters.
- Updated the visible rule count and report metadata.

Limitations: rules remain line-oriented heuristics. They can miss aliases, indirect flows, multi-line calls, and other forms of sensitive data flow; findings are review prompts, not confirmed vulnerabilities.

## 0.2.0 — 2026-10-16

- Extracted heuristic rules into `scanner-core.js` so the detection logic can be tested independently.
- Suppressed full-line comments, the scanner's own rule-metadata definitions, and the built-in checklist definition to reduce known self-scan false positives.
- Added six automated tests for representative detections and known false-positive cases.
- Added Vercel response security headers in `vercel.json`.
- Updated JSON report version and analysis description.

Limitations: this remains a line-oriented heuristic scanner, not a parser, data-flow engine, formal audit, or privacy proof. Inline comments, complex syntax, aliases, and indirect flows can still cause false positives or misses.
