# OrphanTracker Production Roadmap

## Completed (Phase 1: Design System & Infrastructure)

### ✅ Design System & UI (Complete)
- **Design Tokens** (`src/styles/design-tokens.css`)
  - Color palette: primary (#667eea, #764ba2), accents (green, amber)
  - Spacing scale (xs-xxl), border radii, shadows
  - Typography system with Apple system fonts
  - CSS utility classes (.glass, .btn-primary, etc.)

- **UI Components** (reusable, documented in Storybook)
  - `Button.jsx` – primary/outline variants with hover effects
  - `GlassCard.jsx` – glassmorphic card container
  - Stories for both components with interactive preview

- **Storybook** (component library + documentation)
  - Config: `.storybook/main.js` and `.storybook/preview.js`
  - Run: `npm run storybook` (opens on `http://localhost:6006`)
  - Stories: `Button.stories.jsx`, `GlassCard.stories.jsx`

- **Page Updates** (all pages use design-system components)
  - Home.js, About.js, Impact.js, Donate.js, FileComplaint.js, Orphanages.js
  - All cards now use `.glass` class for consistency
  - Buttons use design-system `Button` component

### ✅ CI/CD & Deployment Scaffolding (Partial)
- **GitHub Actions Workflow** (`.github/workflows/ci.yml`)
  - Runs on push/PR to main
  - Installs deps, builds, runs tests
  - Auto-triggered; no manual steps needed

- **Error Tracking** (Sentry stub)
  - `src/sentry.js` with async dynamic import
  - Initialized in `src/index.js`
  - Configured via `REACT_APP_SENTRY_DSN` environment variable
  - Optional dependency (won't break if not installed)

### ✅ Testing & QA Scaffolding (Partial)
- **Cypress E2E** (smoke tests)
  - Config: `cypress.config.js`
  - Home page smoke test: `cypress/e2e/home.cy.js`
  - Run: `npm run cypress:run` (headless) or `npm run cypress:open` (interactive)

- **Scripts in package.json**
  - `npm run storybook` – component library
  - `npm run cypress:open` – interactive E2E testing
  - `npm run cypress:run` – CI E2E testing
  - `npm run lint` – ESLint
  - `npm run format` – Prettier

---

## Next Steps by Priority

### 🔴 CRITICAL (Blocking Launch)

#### 1. **Security Hardening** (Task #5)
- [ ] Enable HTTPS on all endpoints
- [ ] Add CORS headers to API
- [ ] Implement CSRF protection
- [ ] Validate all form inputs (server-side)
- [ ] Add rate limiting to API endpoints
- [ ] Secure cookies (httpOnly, Secure, SameSite flags)
- [ ] Encrypt sensitive data at rest (DB)
- [ ] Prepare Privacy Policy and Terms of Service

**Files to create/update:**
- Backend: middleware for CORS, CSRF, rate limiting, validation
- Frontend: `.env.production` with secure API endpoints
- Legal docs: `PRIVACY_POLICY.md`, `TERMS_OF_SERVICE.md`

#### 2. **Payments & Donations** (Task #6)
- [ ] Integrate Stripe or PayPal (choose one)
- [ ] Backend webhook handler for payment confirmations
- [ ] Donation receipt emails
- [ ] Support recurring donations
- [ ] Test in Stripe/PayPal sandbox mode first
- [ ] Add PCI compliance notes to docs

**Recommended:** Stripe (simpler API, better docs)

**Files to create:**
- `backend/routes/donations.js` with payment processing
- `frontend/pages/Payment.js` with Stripe/PayPal integration
- `.env.example` with `STRIPE_SECRET_KEY`, `STRIPE_PUBLIC_KEY`, etc.

#### 3. **Accessibility & i18n** (Task #3)
- [ ] WCAG 2.1 AA audit (use `axe-core` or similar)
- [ ] Add semantic HTML (`<button>`, `<nav>`, `<main>`, `<section>`)
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] ARIA labels where needed (alt text, aria-label, aria-live)
- [ ] Nepali localization (i18n-js or react-i18next)
  - Strings file: `src/locales/ne.json`, `src/locales/en.json`
  - Date/number formatting for Nepal (24-hour, Nepali calendar optional)

**Files to create:**
- `src/i18n/config.js` – i18next setup
- `src/locales/en.json`, `src/locales/ne.json`
- `src/hooks/useTranslation.js` – custom hook

---

### 🟡 HIGH PRIORITY (1-2 weeks before launch)

#### 4. **Backend & API Hardening** (Task #7)
- [ ] Pagination for large result sets (orphanages, complaints, children)
- [ ] Input validation (server-side, not just client)
- [ ] Consistent error responses (400, 401, 403, 500 with messages)
- [ ] Authentication & authorization (JWT, roles: admin, staff, donor)
- [ ] Health check endpoint (`GET /health`)
- [ ] Load testing (100+ concurrent users)
- [ ] API documentation (OpenAPI/Swagger)

**Files to create:**
- `backend/middleware/validate.js` – input validation
- `backend/middleware/errorHandler.js` – consistent error responses
- `backend/routes/health.js` – health check
- `backend/docs/openapi.yaml` – API spec
- `tests/load.js` – load testing script (Artillery or k6)

#### 5. **Performance Optimization** (Task #4)
- [ ] Run Lighthouse on all pages (target >90 for all metrics)
- [ ] Image optimization (WebP, lazy loading)
- [ ] Code splitting (React.lazy for routes)
- [ ] CSS critical path optimization
- [ ] Enable gzip compression on backend
- [ ] Cache headers (expires, max-age, etag)
- [ ] Target <2s TTFB, <4s LCP

**Commands:**
```bash
npm run build
npx lighthouse http://localhost:3000 --view
```

**Files to create/update:**
- `backend/.htaccess` or nginx config for cache headers
- `frontend/src/pages/` – wrap with React.lazy()

#### 6. **Testing & QA** (Task #8)
- [ ] Unit tests (Jest) for components and utils
- [ ] Integration tests for API endpoints
- [ ] E2E tests (Cypress) for critical flows: donate, file complaint, view orphanages
- [ ] Coverage target: >=80% for critical paths
- [ ] Automated test runs in CI (add to `.github/workflows/ci.yml`)

**Files to create:**
- `src/components/__tests__/Button.test.js`
- `src/pages/__tests__/Home.test.js`
- `cypress/e2e/donate.cy.js` – donation flow test
- `cypress/e2e/file-complaint.cy.js` – complaint filing test

---

### 🟢 MEDIUM PRIORITY (2-4 weeks)

#### 7. **Monitoring & Observability** (Task #10)
- [ ] Setup Sentry (error tracking)
  - `npm install @sentry/browser`
  - Create Sentry account, get DSN
  - Set `REACT_APP_SENTRY_DSN` in `.env.production`
  
- [ ] Logging (structured logs, Winston or Bunyan)
- [ ] Performance monitoring (Datadog, New Relic, or Sentry Performance)
- [ ] Uptime monitoring (Pingdom, StatusPage.io)
- [ ] Alerts for >2s response time, >5% error rate

#### 8. **Legal & Compliance** (Task #11)
- [ ] Draft Privacy Policy (mention data collection, retention, GDPR if applicable)
- [ ] Draft Terms of Service
- [ ] NGO registration & tax receipts setup (contact local authorities)
- [ ] Donation receipt email template
- [ ] Data retention policy (how long we store child records)

**Files to create:**
- `frontend/pages/PrivacyPolicy.js`
- `frontend/pages/TermsOfService.js`
- `docs/DATA_RETENTION_POLICY.md`
- `backend/templates/donation-receipt.html`

#### 9. **Branding & Assets** (Task #2)
- [ ] Finalize logo (SVG version)
- [ ] Color palette locked in
- [ ] Font licenses (if using custom fonts)
- [ ] Hero images, illustrations
- [ ] Press kit (1-page PDF with logo, colors, tagline, team photo)

---

### 🔵 LOWER PRIORITY (After Launch)

#### 10. **Launch & Marketing Prep** (Task #12)
- [ ] SEO: meta tags, sitemap.xml, og:image
- [ ] Google Analytics 4 setup
- [ ] App screenshots (App Store / Play Store if needed)
- [ ] Email campaign templates
- [ ] Social media assets
- [ ] Landing page copywriting
- [ ] Outreach plan (press release, social, email list)

---

## Deployment Checklist

### Before Going Live

- [ ] All secrets (API keys, DB credentials) in `.env.production`, not in repo
- [ ] `npm run build` passes without warnings
- [ ] All E2E tests pass: `npm run cypress:run`
- [ ] Lighthouse score >90 on all pages
- [ ] HTTPS enabled
- [ ] CORS, CSRF, rate limiting active
- [ ] Database backups configured
- [ ] Monitoring & alerting active
- [ ] Legal docs (Privacy Policy, ToS) live at `/privacy` and `/terms`
- [ ] Contact/support email working

### Hosting Options

- **Frontend:** Vercel, Netlify, AWS S3 + CloudFront
- **Backend:** AWS EC2, Heroku, DigitalOcean, Google Cloud Run
- **Database:** AWS RDS, MongoDB Atlas, PostgreSQL managed
- **Email:** SendGrid, Mailgun, AWS SES

**Recommended:** Vercel (frontend) + AWS or Heroku (backend) for simplicity

---

## Quick Reference: Run Commands

```bash
# Development
npm start                 # Dev server on localhost:3000
npm run storybook         # Component library on localhost:6006

# Testing
npm run cypress:open      # Interactive E2E testing
npm run cypress:run       # Headless E2E testing
npm test                  # Jest unit tests

# Production
npm run build             # Production build (optimized)
npm run lint              # ESLint check
npm run format            # Prettier auto-format

# Git
git add -A && git commit -m "..." && git push origin main
```

---

## Design System Reference

### Colors
- **Primary:** #667eea (purple), #764ba2 (deep purple)
- **Accent:** #10b981 (green), #f59e0b (amber)
- **Background:** linear-gradient(#f5f7fa → #c3cfe2)
- **Text:** #1f2937 (dark), #6b7280 (muted)
- **Glass:** rgba(255,255,255,0.7) with 10px blur

### Spacing
- xs: 0.25rem, sm: 0.5rem, md: 1rem, lg: 1.5rem, xl: 3rem, xxl: 6rem

### Utilities
- `.glass` – glassmorphic card
- `.py-6` – padding top/bottom 6rem
- `.btn-primary` – primary button

### Components
- `<Button>` – use `<Button className="btn-primary">...</Button>`
- `<GlassCard>` – use `<GlassCard>...</GlassCard>`

---

## Support & Questions

If you get stuck on any task:

1. Check the design-tokens CSS for color/spacing references
2. Look at Storybook for component usage examples
3. Review existing page implementations (Home.js, Donate.js) as templates
4. Run tests with `npm run cypress:open` for interactive debugging

---

**Updated:** February 12, 2026  
**Status:** Phase 1 Complete, Ready for Phase 2 (Security & Payments)
