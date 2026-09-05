## Context

See proposal.md Why. Current state: React+Vite SPA on GitHub Pages, no router (anchor sections), no backend. Tracking: Umami Cloud script in `index.html:12` + custom events in `src/hooks/useAnalytics.ts`. Fonts: 3 CDN links in `index.html:9-11`. Storage: `localStorage theme` (`useTheme.ts`), `?lang=` param (`LanguageContext.tsx`). Outbound: GitHub/LinkedIn/Drive CV/github.io. i18n exists (`src/i18n/en.ts`, `es.ts`). Footer has no legal link.

Constraints: gh-pages static hosting (no headers control beyond static files, no server redirects); must keep analytics; EN+ES parity; EU+MX dual regime.

## Goals / Non-Goals

**Goals:**
- Bilingual notice matching actual code behavior, verifiable event-by-event.
- Kill Google Fonts transfer via Fontsource bundle.
- Keep Umami Cloud with EU region + DPA + disclosed opt-out.
- Footer-visible `/privacy` with no consent-banner false promise.

**Non-Goals:**
- No consent-management platform, no cookie banner (cookieless analytics + strictly-necessary storage only).
- No backend, no DSAR automation portal (email procedure suffices at this scale).
- No AI disclosure section (no AI feature in scope).
- No Terms of Service / Impressum beyond controller identity in notice.

## Decisions

### 1. `/privacy` route via react-router + footer link + `?lang=` reuse
Why: matches existing i18n pattern, zero backend, stable URL both regimes require. `BrowserRouter` with `/` and `/privacy` routes (plus `*` redirect home), `ScrollToTop` on navigation, `Link` carrying the `?lang=` search string so locale survives route changes without reload. Alternatives: hand-rolled pathname switch — rejected (owner preference for clearer code; router handles history, fallback, and redirects). External doc (Google Doc/Notion) — rejected (third-party tracker, version instability, offline fail). Hash-anchor section — rejected (not a stable standalone URL for regulators).

### 2. Fontsource Variant A (`@fontsource-variable/inter` import in CSS) over manual woff2 / Bunny Fonts
Why: npm versioned, Vite bundles automatically, single variable file covers weights 300-800 used today, no CSS hand-writing, no extra CDN trust. Manual `public/fonts/` — viable fallback if bundle size audit demands subsetting. Bunny Fonts — rejected (swaps one third party for another, keeps transfer).

### 3. Keep Umami Cloud (EU region) + signed DPA over self-host or drop
Why: user decision; free tier covers traffic; cookieless keeps no-banner posture; EU region + DPA resolves Art.28 + Schrems II exposure as far as a US vendor allows. Self-host Umami — rejected (VPS cost/ops for portfolio scale). Drop analytics — rejected (owner wants stats). Plausible/Pirsch EU vendors — noted alternative if Umami DPA/EU-region fails.

### 4. No consent banner, explicit opt-out section instead
Why: Umami default sets no cookies; `localStorage theme` is strictly-necessary functional storage; ePrivacy consent trigger absent. Banner would degrade trust and data quality for no legal gain. Mitigation: notice documents DNT respect + Umami opt-out link; reintroduce banner only if a cookie-setting tool is added later.

### 5. Email-channel ARCO/GDPR procedure, no portal
Why: volume near zero; LFPDPPP allows any accessible free channel; portal would create new data store and new risk. Identity check kept proportionate (request-from + minimal detail, no ID scan by default).

## Risks / Trade-offs

- [US CLOUD Act residual] Umami Software Inc is US-incorporated despite EU hosting → DPA + SCCs reduce but never zero risk. Mitigation: EU region toggle, data minimization (no custom PII in event payloads — audit `trackEvent` args), documented vendor alternative.
- [Stale notice drift] New `trackEvent` added later without notice update → false disclosure. Mitigation: spec scenario requires event-name parity; add checklist item to PR template (tasks phase).
- [Bundle weight] Variable Inter adds ~100-200KB to build vs CDN cache sharing. Mitigation: variable single file + `font-display:swap` + preload; acceptable on gh-pages HTTP/2.
- [Routing on gh-pages] SPA route `/privacy` needs fallback (`404.html` copy or hash route) or direct-link refresh breaks. Mitigation: verify `gh-pages` SPA fallback in tasks; fallback to `#/privacy` if needed.
- [ES legal wording] Direct translation of GDPR terms may fail LFPDPPP Art.15 vocabulary (responsable, titular, ARCO). Mitigation: ES text drafted against LFPDPPP terms first, EN mapped second — not machine-translated.

## Migration Plan

1. Sign Umami DPA, set EU region + retention value; record values for notice text.
2. Land font + route + footer + i18n changes in one release (no flag needed; purely additive except font link removal).
3. Deploy, verify: Network tab zero `googleapis`/`gstatic`, `/privacy` loads deep-link + refresh, footer link visible EN+ES, events still flow to Umami dashboard.
4. Rollback: revert single commit restores CDN fonts; notice stays (still truthful if fonts row versioned). No data migration.

## Open Questions

- Umami Cloud dashboard: which region is the current website ID on, and what retention is configured? (Fills notice numbers; answer later without changing approach.)
- Owner domicile to publish under LFPDPPP Art.15: full address vs city + contact email? (Legal comfort choice; text placeholder until decided.)
