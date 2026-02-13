OrphanTracker — Production Readiness Checklist

This file lists the steps taken and remaining actions to make the frontend production-ready, plus commands to run locally and in CI.

Quick commands

Install deps:

```bash
cd frontend
npm ci
```

Run dev:

```bash
npm start
```

Build:

```bash
npm run build
```

Install Storybook (dev):

```bash
cd frontend
npm ci
npx storybook@latest init  # optional: follow prompts
npm run storybook          # if script added
```

What I added

- Design tokens: `src/styles/design-tokens.css`
- UI primitives: `src/components/ui/Button.jsx`, `GlassCard.jsx`
- Storybook config: `.storybook/*` and stories for `Button` and `GlassCard`
- CI workflow: `.github/workflows/ci.yml` (build + tests)
- Sentry stub: `src/sentry.js` and init hook in `src/index.js`
- Production checklist: this file

Next actions (recommended)

- Replace Sentry DSN with `REACT_APP_SENTRY_DSN` in deployment environment.
- Setup Stripe/PayPal backend support and webhooks; do not store sensitive keys in repo.
- Run Lighthouse and iterate on performance; add `next/image` style optimization if migrating to Next.js.
- Add automated tests (unit + Cypress e2e) and include coverage checks in CI.
- Set up deployment (Vercel, Netlify, or AWS S3 + CloudFront) and add a staging environment.
- Add legal docs: Privacy Policy, Terms of Service, Donation receipts.

If you want, I can push these changes to `origin/main` and run `npm ci` + `npm run build` in CI (requires GitHub access).
