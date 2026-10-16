# VeilLint — 2-minute demo video script

**Goal:** Show a judge the problem, the working scan, actionable findings, and the privacy-first design. Do not claim the tool proves an application is private or secure.

## Recording plan (about 1:50–2:00)

### 0:00–0:15 — The problem
**On screen:** Open the live VeilLint dashboard.

**Say:** “Zcash gives users strong privacy tools, but an application can still leak sensitive information through logs, analytics, browser storage, URLs, or its network choices. Developers need a quick preflight check before they ship.”

### 0:15–0:30 — What VeilLint is
**On screen:** Briefly show the scanner, rule count, and local-first note.

**Say:** “VeilLint is a local-first static heuristic scanner for Zcash application source. You can paste code or load a text file; scanning happens in this browser tab. It does not need a wallet connection or a live transaction.”

### 0:30–1:05 — The risky example
**On screen:** Click **Load sample**, then **Run privacy scan**. Scroll through findings for secret logging, viewing-key handling, analytics, and payment routing.

**Say:** “This deliberately risky example triggers review prompts for sensitive key material in logs, viewing-key handling, transaction details sent to analytics, and a transparent-send API pattern. Each result points to a source line, explains why it deserves review, and suggests a next action.”

### 1:05–1:25 — New privacy surfaces
**On screen:** Show the findings for browser storage, error reporting, and URL parameters. If using the supplied fixture instead of the built-in sample, load `examples/risky-payment-flow.ts`.

**Say:** “The checks also look for seed material written to browser storage, transaction data passed to error-reporting tools, and payment identifiers placed in URLs. These are easy-to-overlook ways to create extra records that may link activity to a person or device.”

### 1:25–1:40 — Actionability and report
**On screen:** Show a recommended action, click **Export report**, and briefly show the JSON report.

**Say:** “A developer can export a JSON report for triage and use the privacy checklist to guide manual review. The report preserves the rule, severity, source line, and recommended action.”

### 1:40–1:55 — Honesty about limits
**On screen:** Show the Methodology or limitations text.

**Say:** “VeilLint is an early-stage prototype, not a formal audit or a proof of privacy. Pattern matching can miss indirect flows and produce false positives. The next step is parser-backed analysis and review of the rules by Zcash privacy engineers.”

### 1:55–2:00 — Close
**On screen:** Return to the live dashboard and show the project name and repository link in the video description or final frame.

**Say:** “VeilLint: a privacy preflight for Zcash developers.”

## Recording quality checklist

- Use the actual deployed site and a readable browser zoom.
- Record the full scan and report export; do not fake or edit findings into the UI.
- Ensure the repository is public and its URL is visible in the submission or video description.
- Keep the video under two minutes if the submission instructions specify a strict two-minute maximum.
- Do not include real wallet addresses, seed phrases, private keys, account details, or personal information in the recording.
