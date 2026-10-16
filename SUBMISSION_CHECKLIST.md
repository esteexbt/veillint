# ZECATHON submission readiness checklist

Use this as the final gate before submitting. Do not mark a box complete until it has been checked directly.

## Project and source

- [ ] Repository is public and contains the complete source, README, threat model, tests, and demo fixtures.
- [ ] The project is submitted to one track only; current positioning is **Core & Tooling**.
- [ ] The submission describes VeilLint as a heuristic preflight scanner, not a formal audit or privacy guarantee.
- [ ] The final commit history reflects the work completed during the hackathon build window; do not fabricate timestamps or prior work.
- [ ] `npm test` passes from the repository root and the result is recorded accurately.

## Live demo

- [ ] `https://veillint.vercel.app/` loads over HTTPS.
- [ ] Load sample → Run privacy scan displays line-numbered findings and recommended actions.
- [ ] Uploading a text file works and does not require a wallet connection.
- [ ] Export report downloads valid JSON.
- [ ] Checklist and Methodology navigation work.
- [ ] Browser console has no blocking errors.
- [ ] Browser Network panel is checked to confirm what requests occur during load and scanning; describe data handling only as strongly as this check supports.
- [ ] Security headers are checked on the deployed response.

## Evidence and video

- [ ] Record the demo using `DEMO_SCRIPT.md`; keep it within the required duration.
- [ ] Show the real application, a realistic risky example, actionable results, and the exported report.
- [ ] Do not show real secrets or claim that a clean scan proves privacy.
- [ ] Add the public repository and live demo URLs to the submission.
- [ ] Verify all required submission fields and the deadline in the official portal before the final submit.

## Before pressing Submit

- [ ] Confirm the submission is saved and any final confirmation is visible.
- [ ] Keep a local copy of the final source and video.
- [ ] Do not wait until the last minutes to upload the video or resolve portal issues.
