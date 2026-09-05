## 1. Legal and Ops Prep

- [ ] 1.1 Sign Umami Cloud DPA and set EU region, record region plus retention value and verify dashboard shows EU region and retention number
- [x] 1.2 Decide owner domicile text for LFPDPPP Art.15 (full address vs city plus email) and verify chosen text appears verbatim in both EN and ES drafts

## 2. Font Self-Host

- [x] 2.1 Add `@fontsource-variable/inter` dependency and import in CSS, remove 3 Google Fonts links from `index.html`, and verify no `googleapis` or `gstatic` requests in Network tab
- [x] 2.2 Confirm Inter weights render correctly in light and dark mode and verify visual check plus successful production build

## 3. Privacy Notice Page

- [x] 3.1 Add `/privacy` route with gh-pages SPA fallback handling and verify deep link plus refresh loads the notice directly
- [x] 3.2 Write EN notice text covering inventory, third parties, bases, ARCO plus GDPR rights, retention, opt-out, and version date, and verify every `trackEvent` name from `useAnalytics.ts` appears with purpose
- [x] 3.3 Write ES aviso text with LFPDPPP vocabulary (responsable, titular, ARCO, finalidades) equivalent to EN and verify side-by-side structural parity
- [x] 3.4 Add footer privacy link on all pages wired to `?lang=` locale and verify link visible and language switch preserves route

## 4. Verification

- [x] 4.1 Run production build and full click-through (all sections, CV, social, project links) and verify Umami dashboard still receives events and no console errors
- [x] 4.2 Cross-check notice against live behavior (events, `localStorage theme`, `lang` param, outbound list, font origin) and verify each claim matches observed Network plus Application tab state
