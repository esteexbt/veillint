# Deploy VeilLint (static demo)

## Fastest: Netlify Drop

1. Unzip `veillint-hackathon-prototype.zip` on your computer.
2. Open the extracted `veillint` folder and confirm it contains `index.html`, `app.js`, `styles.css`, and `netlify.toml`.
3. Sign in to Netlify and open its manual deploy / Netlify Drop page: https://app.netlify.com/drop
4. Drag the **veillint folder itself** into the drop area. Do not drag the ZIP file.
5. Wait for the deploy to finish, open the generated HTTPS URL, and test: Load sample → Run privacy scan → Export report → Checklist → Methodology.
6. Save the generated URL. You can change the site name in Netlify site settings.

The `_headers` file configures security headers for Netlify static hosting. `netlify.toml` is included for Git-based deployments. If you deploy with another host, configure equivalent headers there.

## GitHub + Netlify (better for hackathon submission)

1. Create a public GitHub repository named `veillint`.
2. Upload the contents of the `veillint` folder to the repository root (not the parent folder).
3. In Netlify, choose **Add new site → Import an existing project**, connect GitHub, select the repository, and deploy.
4. Build command: leave blank. Publish directory: `.`
5. After changes are pushed to GitHub, Netlify automatically redeploys.

## Verify after deployment

- Open the public URL in a private/incognito window.
- Load the built-in sample and run a scan; it should show multiple review findings.
- Clear the editor, paste harmless code, and confirm the UI explains that no pattern matches are not proof of safety.
- Export a report and confirm the downloaded JSON opens.
- Visit Privacy checklist and Methodology.
- In browser DevTools → Network, reload and verify the app makes no third-party requests. Source scanning itself runs locally in the browser.
- Check the site is HTTPS and that response headers include CSP, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options`.

## Important scope statement

This is an early heuristic prototype, not an audited security scanner or proof of privacy. Do not submit it as production security certification. Before hackathon submission, improve rule tests, add multi-file scanning, verify findings against real Zcash SDK examples, publish a clear threat model, and record a truthful two-minute demo.
