# privacy-notice Specification

## Purpose

Provides a bilingual privacy and aviso de privacidad notice that truthfully discloses what this static portfolio collects, which third parties are involved, and how visitors exercise ARCO and GDPR rights.

## Requirements

### Requirement: Bilingual notice availability
The system SHALL publish a privacy notice in English and Spanish at a stable `/privacy` route, linked from the site footer on every page.

#### Scenario: Visitor opens notice in either language
- **WHEN** a visitor clicks the footer privacy link with `?lang=en` or `?lang=es`
- **THEN** the notice renders in the matching language with identical structure and equivalent legal content

#### Scenario: Notice reachable without navigation tricks
- **WHEN** a visitor loads any page of the site
- **THEN** a visible footer link to `/privacy` is present without login, payment, or script-enabled tricks

### Requirement: Truthful data inventory disclosure
The system SHALL list every actual collection or storage: Umami Cloud pageviews plus custom events (`section-view`, `social-click`, `contact-click`, `project-click`, `project-demo-click`, `resume-click`), client-side fetch to GitHub API, `localStorage` theme key, and `lang` URL parameter; and SHALL state what is NOT collected (no accounts, no forms, no backend DB, no storage bucket, no AI prompts).

#### Scenario: Analytics events match code
- **WHEN** a reviewer compares `src/hooks/useAnalytics.ts` event names against the notice
- **THEN** every emitted event name appears in the notice with purpose (statistics) and legal basis

#### Scenario: No hidden collection claimed
- **WHEN** a visitor reads the inventory section
- **THEN** the notice explicitly states no contact form storage, no auth, and no AI processing occur on this site

### Requirement: Third-party and transfer disclosure
The system SHALL name each third party that may receive visitor network data: Umami Cloud (analytics processor), GitHub API (repo fetch), and outbound destinations on click (GitHub, LinkedIn, Google Drive CV, github.io demos); and SHALL state hosting (GitHub Pages) plus DPA/EU-region status for Umami.

#### Scenario: Click-away transfer understood
- **WHEN** a visitor clicks the CV or social link
- **THEN** the notice has already warned that the destination operator processes IP and request metadata under its own policy

#### Scenario: Fonts produce no transfer
- **WHEN** fonts are self-hosted per design
- **THEN** the notice states fonts load from the same origin with no Google Fonts transfer, or omits Google Fonts entirely with no stale claim

### Requirement: Legal bases and purposes for EU and Mexico
The system SHALL state per-purpose basis: legitimate interest / statistical purpose for cookieless Umami under GDPR, and tacit consent via prior notice for LFPDPPP; SHALL distinguish primary (site operation, aggregated statistics) from any secondary purposes; and SHALL include owner identity and domicile as LFPDPPP Art.15 requires plus GDPR controller contact.

#### Scenario: Dual-regime reader finds their basis
- **WHEN** an EU visitor reads the GDPR subsection or a Mexican visitor reads the LFPDPPP subsection
- **THEN** each finds purpose, basis, identity/contact, and scope applicable to them without contradiction

### Requirement: ARCO and GDPR rights procedure
The system SHALL provide a contact channel (email) for access, rectification, cancellation/erasure, opposition/portability, consent revocation, and use-limitation requests; SHALL commit to LFPDPPP timelines (response within 20 business days, execution within 15) and GDPR timeline (1 month); and SHALL describe identity verification limited to what is proportionate.

#### Scenario: Rights request submitted
- **WHEN** a titular sends a rights request to the published contact with minimal identifying detail
- **THEN** the owner acknowledges, verifies proportionately, and responds within the stricter applicable deadline

#### Scenario: Umami data subject request honored
- **WHEN** a request concerns aggregated analytics without a persistent identifier
- **THEN** the notice honestly explains limits of individual lookup and offers opt-out going forward

### Requirement: Retention and security statement
The system SHALL state retention for analytics (per Umami Cloud settings), `localStorage` persistence until cleared, and that no server-side visitor store exists; and SHALL summarize security measures (HTTPS via GitHub Pages, no credential storage).

#### Scenario: Retention verifiable
- **WHEN** a visitor checks the retention clause against the Umami dashboard setting
- **THEN** the stated period matches the configured value

### Requirement: Opt-out and change communication
The system SHALL link Umami opt-out / DNT behavior and SHALL define how material changes are communicated (notice version date + prominent link for 30 days).

#### Scenario: Visitor opts out
- **WHEN** a visitor follows the opt-out instruction
- **THEN** subsequent visits are not tracked by Umami on that browser

#### Scenario: Notice updated
- **WHEN** the owner publishes a material change
- **THEN** the version date updates and the change is reachable from the same `/privacy` URL
