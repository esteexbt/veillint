# VeilLint Deployment Guide

VeilLint is a browser-based, local-first heuristic scanner for identifying potential privacy and security risks in Zcash application source code.

This guide covers deploying VeilLint using GitHub and Vercel.

## 1. Prerequisites

You need:

- A GitHub account.
- A Vercel account connected to GitHub.
- The VeilLint repository pushed to GitHub.

VeilLint is a static web application. Its core scanning functionality runs in the browser and does not require a backend server.

## 2. Deploy to Vercel

### Step 1: Import the GitHub repository

1. Sign in to [Vercel](https://vercel.com/).
2. Select **Add New → Project**.
3. Import the VeilLint GitHub repository.
4. Select the repository containing `index.html`, `app.js`, `scanner-core.js`, `styles.css`, and `vercel.json`.

### Step 2: Configure the project

Use the following settings for the current static application:

- **Framework Preset:** Other
- **Root Directory:** The directory containing `index.html` and `vercel.json`
- **Build Command:** Leave empty if Vercel permits it.
- **Output Directory:** `.` (the project root)
- **Install Command:** Leave empty if Vercel permits it.

If Vercel requires a build command or the project settings differ, review the deployment logs before changing the configuration.

### Step 3: Deploy

1. Click **Deploy**.
2. Wait for the deployment to finish.
3. Open the deployment URL.
4. Confirm the VeilLint interface loads correctly.

If the project is already connected to Vercel, you do not need to create another project. Push changes to the connected GitHub branch and confirm that Vercel completes the resulting deployment.

## 3. Verify the deployment

After deploying, verify the following:

- The homepage loads without a blank screen or JavaScript errors.
- The sample source code loads.
- Running a scan displays findings.
- A clean example can be scanned without inappropriate warnings for the tested cases.
- The report export produces valid JSON.
- The interface remains usable on desktop and mobile.
- The browser console contains no unexpected errors.

For a more complete check, run the automated tests locally:

```bash
npm test
```

The test command is defined in `package.json`. Run the tests from the project root.

## 4. Security and privacy considerations

VeilLint is designed to perform source-code scanning locally in the browser.

- Do not enter real seed phrases, private keys, recovery phrases, or other production secrets into demonstrations.
- Do not describe VeilLint as a formal security audit or proof that an application is private.
- Findings are heuristic warnings and may include false positives or miss risks.
- Review the browser's Network panel to verify that source code being scanned is not transmitted to an unexpected third-party service.
- Keep the repository free of credentials, API keys, and other secrets.
- Review `THREAT_MODEL.md` for the tool's intended scope and limitations.

The presence of a deployment URL alone does not establish that all privacy properties have been verified.

## 5. Updating VeilLint

1. Make changes in the local repository.
2. Run `npm test`.
3. Commit the changes to Git.
4. Push to the GitHub branch connected to Vercel.
5. Check the Vercel deployment status.
6. Test the deployed version after the deployment succeeds.

Example commands:

```bash
npm test
git add .
git commit -m "Describe the change"
git push
```

Review the staged changes before committing to ensure that no secrets, generated files, or unrelated changes are included.

## 6. Troubleshooting

**The deployment fails**

- Open the failed deployment in Vercel.
- Read the build and deployment logs.
- Confirm that the configured root directory contains `index.html` and `vercel.json`.
- Check that the repository changes were pushed successfully.

**The page loads but scanning fails**

- Open the browser developer console.
- Check for JavaScript errors.
- Confirm that `app.js` and `scanner-core.js` are present and load successfully.

**Security headers are missing**

- Review `vercel.json`.
- Inspect the deployed site's response headers in the browser's Network panel.
- Confirm that the latest deployment completed successfully.

## 7. Deployment platform

Vercel is the supported deployment platform for the current project configuration. Netlify-specific deployment configuration is not required for this setup.

## 8. Project limitations

VeilLint is a heuristic privacy preflight tool. It does not prove that a Zcash application is secure, does not guarantee transaction privacy, and does not replace expert security review.

Its purpose is to help developers notice potential privacy risks earlier in development.
