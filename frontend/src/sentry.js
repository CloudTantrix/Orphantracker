// Sentry initialization stub. Provide REACT_APP_SENTRY_DSN in environment for production.
export async function initSentry() {
  const dsn = process.env.REACT_APP_SENTRY_DSN || '';
  if (!dsn) return;
  try {
    const Sentry = await import('@sentry/browser');
    Sentry.init({ dsn, environment: process.env.NODE_ENV });
  } catch (err) {
    // If package not installed, fail silently in dev.
    // Install @sentry/browser in production if you want error tracking.
    // console.warn('Sentry init skipped:', err);
  }
}
