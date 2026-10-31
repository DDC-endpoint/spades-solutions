# Spades Solutions — Website

Static marketing site for **Spades Solutions**, Colombo. Two separate services:

1. **Custom Apparel & Printing**: bulk printing, embroidery, branded merchandise, design support.
2. **Event Logistics**: sound & lighting, staging & structures, transport & crew, planning & coordination.

"Logistics" here always means event logistics, never freight or delivery.

Plain HTML / CSS / JS with no build step. Open `index.html` or host the folder on any static host.

## Structure
```
spades-solutions/
├── index.html          # Home: fanned card hero, who it's for, both services, booking steps
├── services.html       # Services: one framed panel per service, with facts and quote button
├── contact.html        # Request a Quote: form (demo) + WhatsApp + contact details
├── PRODUCT.md          # Product truth: audience, services, confirmed claims, open facts
├── DESIGN.md           # Design system: tokens, type, components, rules
├── HANDOFF.md          # Full handoff notes and launch checklist
├── .impeccable/        # Design-tool records (direction contract, design.json)
└── assets/
    ├── css/styles.css  # Whole design system; tokens at the top in :root
    ├── js/main.js      # Sticky header, mobile menu, quote form
    ├── fonts/          # Self-hosted Marcellus + Figtree (SIL Open Font License)
    └── *.png / *.jpeg  # Client logo originals + downscaled copies used on the pages
```

## Design system (short)
- **World:** "The Card Face", dark. Each service is a playing card on a navy-black table.
- **Colours:** table `#0A1628`, card face `#12284A`, logo navy `#1B355E`, silver `#CDD5E0`, body text `#A9B8CB`. No other hue.
- **Fonts:** Marcellus (headings, card ranks; echoes the logo's Roman capitals) and Figtree (body).
- Full details in `DESIGN.md`.

## Local preview
```
npm run dev        # serves on http://localhost:3002
```
Note: `serve` rewrites `contact.html` to `/contact` and drops query strings, so the service pre-select uses a hash: `contact.html#apparel` or `contact.html#events`.

## ⚠️ Before launch
Search the project for `TODO(launch)` to find every spot.

| Placeholder | Where | Replace with |
|---|---|---|
| `940000000000` | all pages (WhatsApp links) | Real WhatsApp number: country code, no `+` (e.g. `9477XXXXXXX`) |
| `hello@spadessolutions.com` | `contact.html` | Real email address |
| Business hours (Mon–Sat 9–6) | `contact.html` | Confirmed hours |
| Quote form | `assets/js/main.js` | Wire to Formspree or a backend. It currently shows a success message and sends nothing |
