## Why

Portfolio collects visitor data via Umami Cloud analytics and Google Fonts without any privacy notice. Worldwide audience with focus EU + Mexico triggers GDPR/ePrivacy and LFPDPPP duties. Missing notice exposes owner to complaints, fines, and loss of trust.

## What Changes

- Add bilingual (EN+ES) privacy notice at `/privacy`, linked from footer, covering all actual data flows.
- Disclose Umami Cloud tracking (pageviews + custom events) with purpose, basis, retention, and opt-out.
- Disclose third parties: Umami Cloud, GitHub API, LinkedIn/GitHub/Google Drive outbound links; remove Google Fonts transfer by self-hosting.
- Self-host Inter via Fontsource (Variant A), delete `fonts.googleapis.com` / `fonts.gstatic.com` links.
- Document ARCO + GDPR rights procedure (contact channel, response timelines) and notice-change procedure.
- No backend, no storage bucket, no AI feature: explicitly out of scope, recorded to avoid future confusion.

## Capabilities

### New Capabilities

- `privacy-notice`: bilingual privacy/aviso notice content, data inventory disclosure, third-party list, rights (ARCO + GDPR) procedure, retention, contact, and change communication.

### Modified Capabilities

- None. No existing specs under `openspec/specs/`.

## Impact

- Code: `index.html` (remove font CDN links, optional preload), `src/index.css` (Fontsource import), `src/components/Footer.tsx` (privacy link), `src/i18n/*` (EN+ES strings), `src/App.tsx` + router (new `/privacy` route).
- Deps: add `@fontsource-variable/inter`, remove runtime dependency on Google Fonts CDN.
- Ops/legal: sign Umami Cloud DPA, select EU region, confirm retention settings; publish owner identity + contact for ARCO/GDPR requests.
