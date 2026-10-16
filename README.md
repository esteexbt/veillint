# VeilLint — Zcash Privacy Preflight

**An early-stage, local-first static heuristic scanner for Zcash application source and configuration.** Built as a hackathon prototype for the ZECATHON Core & Tooling track.

## Run locally

No build step or dependency installation is required. Open `index.html` in a modern browser, or serve the folder with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Current features

- Scan pasted source/configuration text for eight classes of potential privacy/security risks.
- Upload a supported text source file; it is read in the browser and is not uploaded.
- Findings include severity, matched line, context, explanation, and a suggested review action.
- Export a JSON report.
- Privacy review checklist and methodology page.
- Responsive dark UI.

## Important limitations

This is a **heuristic prototype**, not a formal security audit, static-analysis engine, transaction verifier, or proof of privacy. Pattern matches can be false positives and misses are possible. It does not execute code, resolve data flow, inspect dependency trees, inspect binaries, capture runtime traffic, validate Zcash transactions, or verify cryptography. A clean scan is not a security guarantee. All findings require human review.

The sample source is intentionally risky and entirely illustrative; it is not live chain data and does not send a transaction.

## Privacy behavior

Source text is processed in the current browser tab. The app has no backend and no analytics integration. The Google Fonts import is optional presentation infrastructure; for a strict offline review, remove the Google Fonts `<link>` tags from `index.html` and the browser will use fallback fonts.

## Suggested next engineering steps

1. Convert heuristics into tested rules with positive and negative fixtures.
2. Add multi-file project scanning and dependency/config review.
3. Introduce a parser-backed AST analysis for JavaScript/TypeScript and Rust instead of relying only on regexes.
4. Add explicit threat-model profiles (wallet, merchant, payment processor, light-client app).
5. Build a documented Zcash testnet fixture and verify the transaction properties against a real supported SDK before making any on-chain claims.
6. Have Zcash/privacy engineers review every rule and the tool's threat model.

## References

- Zcash address and value-pool privacy documentation: https://zcash.readthedocs.io/en/latest/rtd_pages/addresses.html
- Zcash light-client support and threat-model pointers: https://zcash.readthedocs.io/en/master/rtd_pages/lightclient_support.html
- Zcash Android Wallet SDK (experimental; review its current warnings and threat model): https://github.com/zcash/zcash-android-wallet-sdk
