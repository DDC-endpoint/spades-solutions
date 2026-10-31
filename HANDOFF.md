# Spades Solutions — Website Handoff

**Project:** Marketing website for **Spades Solutions**, Colombo: custom apparel & printing, and event logistics.
**Status:** v2 redesign built on branch `redesign/card-dark` (3 pages, static). Waiting on real contact details, a form backend and deployment.
**Stack:** Plain HTML / CSS / JS, no build step. Host the folder anywhere (Netlify, GitHub Pages, Cloudflare Pages, any static host).
**Instagram:** https://www.instagram.com/spades_solutions_/

---

## 1. Brief & confirmed decisions

| Area | Decision |
|---|---|
| Company name | **Spades Solutions** |
| Services | **Two separate services**, each with its own quote: Custom Apparel & Printing, and Event Logistics |
| "Logistics" | Always **event logistics** (sound, lighting, stages, crew, coordination). Never freight or delivery |
| Audience | **General**: schools, companies, weddings & private functions, concerts & festivals, sports teams. No segment leads |
| Service area | **Colombo & surrounds** |
| Pages | **Home**, **Services**, **Contact / Request a Quote** |
| Order flow | Quote form + WhatsApp |
| Brand asset kept | **Logo only.** Everything from v1 (heraldic styling, Fraunces/Cinzel, gold, rotating seal) is gone |
| Visual direction | **"The Card Face", dark premium**, chosen from two side-by-side mocks |
| Confirmed claims | Quotes are free · reply within 1 working day · apparel from 1 piece · apparel turnaround about 1–2 weeks |
| Quote form | **Demo for now** (shows success, sends nothing) until a backend is chosen |
| Contact details | **Placeholders** until the client supplies them |

---

## 2. Design direction — "The Card Face"

The logo is a spade, so each service is dealt as its own playing card on a navy-black table.

- **Home hero:** a fanned hand of three cards. Apparel & Printing (ace) on the left, the card back with the logo's filigree spade in the middle, Event Logistics (king) on the right. Each face card lists what it covers and has its own quote button.
- **Signature motion:** on load the two face cards deal out from behind the card back. Hover or keyboard focus lifts one card at a time. Below 1080px the card back shrinks to a small deck card above the two faces, and they deal out from it. With reduced motion turned on, the hand appears already dealt.
- **Frames:** cards and service panels carry a two-hairline inner frame taken from the double ring on the round badge logo.
- **Card indices:** rank (A, K, or 2/3/4 for steps) plus a spade pip. Service panels show the rank with the pip beneath it. The pip is the logo's own spade silhouette (`assets/spade.png`) used as a CSS mask, so it recolours with the theme.

### Colour tokens (`:root` in `assets/css/styles.css`)
| Token | Hex | Use |
|---|---|---|
| `--felt` | `#0A1628` | Page background (the table) |
| `--deep` | `#060E1B` | Footer |
| `--band` | `#0D1C33` | Closing call-to-action band |
| `--face` | `#12284A` | Card faces, form card |
| `--navy` | `#1B355E` | Logo navy: card back, WhatsApp card |
| `--white` | `#F2F5F9` | Headings, strong text |
| `--silver` | `#CDD5E0` | Buttons, ranks, frames, focus rings |
| `--text` | `#A9B8CB` | Body copy |
| `--danger` | `#F2A5A5` | Form errors only |

### Typography (self-hosted in `assets/fonts/`, SIL OFL)
- **Marcellus**: headings and card ranks. Roman capitals that echo the logo wordmark.
- **Figtree** (variable 400–700): body and UI.

The design system is documented in full in `DESIGN.md`. Product facts live in `PRODUCT.md`.

---

## 3. File structure
```
spades-solutions/
├── index.html          # Home
├── services.html       # Services (two framed panels)
├── contact.html        # Request a Quote (form + WhatsApp + details)
├── PRODUCT.md          # Product truth
├── DESIGN.md           # Design system
├── README.md           # Short readme + launch placeholders
├── HANDOFF.md          # This file
├── package.json        # dev/start: npx serve . -l 3002
├── .impeccable/        # Design-tool records: direction contract (surfaces/), design.json
└── assets/
    ├── css/styles.css  # Entire design system (tokens at top)
    ├── js/main.js      # Sticky header, mobile menu, quote form validation + demo submit
    ├── fonts/          # marcellus-latin.woff2, figtree-latin-var.woff2
    ├── Spades_White.png, Spades_Navy.png, spade.png, logo-lockup.png, Spades_solutions.jpeg (client logo originals)
    └── spade-white-96.png, spade-white-420.png, favicon-64.png (downscaled copies used on the pages)
```

---

## 4. Page-by-page contents

### Home (`index.html`)
- Sticky header: white filigree spade + "SPADES SOLUTIONS" wordmark, Home / Services / Contact, "Get a Quote". Hamburger menu under 760px.
- **Hero:** "Custom Apparel & Event Logistics in Colombo", one-line lede, the fanned hand of cards.
- **Who it's for:** two lists, one per service (apparel: class & club T-shirts, staff uniforms, team kits, event merchandise; events: concerts & festivals, corporate events, weddings & parties, school functions).
- **Service facts:** two compact framed panels side by side (rank, one-line description, fact chips, link to details).
- **How a Booking Works:** 4 steps.
- **Closing band:** free quote + WhatsApp, then footer with DDC Web Solutions credit.

### Services (`services.html`)
- One framed panel per service (`#apparel`, `#events`): description, "Good for" list, fact chips (minimum order, turnaround, free quote / service area, free quote), quote button, and a detailed list of what's included.
- Booking steps and a "Not Sure Which One You Need?" closing band.

### Contact (`contact.html`)
- **Form:** name*, email*, phone (optional), organisation (optional), service* (Apparel & Printing / Event Logistics / Both / Not sure yet), date needed (optional), details*. Inline errors on blur and submit, the first invalid field is focused, and status is announced with `aria-live`.
- Service pre-selects from the URL hash: `contact.html#apparel`, `contact.html#events` (hash used because clean-URL hosts drop query strings).
- **Side:** WhatsApp card, other contact ways (Instagram, email, hours, area), "What Happens Next" (3 steps).

---

## 5. ⚠️ Placeholders to replace before launch

Search the project for `TODO(launch)`.

| Placeholder | Where | Replace with |
|---|---|---|
| `940000000000` | all 3 pages (WhatsApp `wa.me` links) | Real WhatsApp number: country code, **no `+`** |
| `hello@spadessolutions.com` | `contact.html` | Real email |
| Mon–Sat, 9:00 AM–6:00 PM | `contact.html` | Confirmed business hours |
| Quote form submit | `assets/js/main.js` (`#quote-form`) | Formspree / email / backend. Currently a simulated 0.9s success that tells the visitor "your request is in" — must be wired or reworded before going live |

---

## 6. Accessibility & responsive notes
- Skip link, semantic landmarks, one `h1` per page, ordered headings.
- Visible silver focus rings (`:focus-visible`), 48px minimum targets, `aria-expanded` on the menu button, Escape closes the menu.
- Form: real `<label>`s, `autocomplete`, `aria-required`, `aria-invalid`, `aria-describedby` error text, polite live status.
- Decorative card indices, ranks and the card back are `aria-hidden`.
- `prefers-reduced-motion`: deal animation and transitions off.
- Breakpoints: 1080px (card back becomes a small deck card above two side-by-side faces), 960px (single-column panels/contact), 760px (mobile menu, stacked cards), 480px (ranks stack above panel text).
- Verified in Chrome at 1440px and 390px: no horizontal overflow, no console errors. Menu, form validation, demo submit and service pre-select tested.

---

## 7. Suggested next steps
1. Client supplies WhatsApp number, email and hours.
2. Wire the form to Formspree (fastest) or a backend.
3. Add real photos when available (past events, printed apparel). The layout has no photo slots yet, so add them deliberately rather than as filler.
4. Merge `redesign/card-dark` → `main`, deploy to a static host and connect the domain.
5. Nice-to-haves: social share image (card back art), sitemap/robots, analytics.
