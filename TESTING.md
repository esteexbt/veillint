# Manual acceptance checks

- [ ] Initial page loads without a console error.
- [ ] Navigation switches between Source scanner, Privacy checklist, and Methodology.
- [ ] Load sample → Run privacy scan shows findings with source line references.
- [ ] Source excerpts are inserted as text, not interpreted as HTML.
- [ ] Clear resets the source and findings.
- [ ] Uploading a supported text file loads its contents in the browser.
- [ ] Export report downloads valid JSON with findings and limitations.
- [ ] A benign sample with no configured pattern matches does not claim the code is safe.
- [ ] The browser Network panel shows no third-party request on initial load.
- [ ] On deployed site, confirm HTTPS and expected security headers.

These are manual acceptance checks, not a comprehensive security test suite.
