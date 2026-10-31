---
name: Spades Solutions
description: Custom apparel and event logistics in Colombo, each service dealt as its own playing card on a navy-black table.
colors:
  silver: "#CDD5E0"
  felt: "#0A1628"
  felt-glow: "#13294B"
  deep: "#060E1B"
  band: "#0D1C33"
  face: "#12284A"
  navy: "#1B355E"
  white: "#F2F5F9"
  text: "#A9B8CB"
  rule: "rgba(205, 213, 224, .18)"
  rule-strong: "rgba(205, 213, 224, .42)"
  danger: "#F2A5A5"
typography:
  display:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "clamp(2.75rem, 6.5vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-.01em"
  display-hero:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-.01em"
  headline:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "clamp(2.1rem, 4.4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-.01em"
  title:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-.01em"
  rank:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "clamp(5rem, 9vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 0.82
  wordmark:
    fontFamily: "Marcellus, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: ".14em"
  body:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lede:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 600
    lineHeight: 1.4
  button:
    fontFamily: "Figtree, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1
rounded:
  card: "16px"
  ring-outer: "10px"
  ring-inner: "7px"
  field: "10px"
  pill: "999px"
spacing:
  gutter: "1.25rem"
  container: "1240px"
  section: "clamp(4.5rem, 9vw, 8rem)"
  section-close: "clamp(5rem, 11vw, 9rem)"
  panel-pad: "clamp(2rem, 5vw, 4rem)"
  ring-inset: "10px"
  ring-inset-inner: "14px"
  touch: "48px"
components:
  button-solid:
    backgroundColor: "{colors.silver}"
    textColor: "{colors.felt}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: ".8rem 1.45rem"
    height: "48px"
  button-solid-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.felt}"
  button-ghost:
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: ".8rem 1.45rem"
    height: "48px"
  card-face:
    backgroundColor: "{colors.face}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "5.5rem 2.25rem 2rem"
    width: "360px"
    height: "440px"
  card-back:
    backgroundColor: "{colors.navy}"
    rounded: "{rounded.card}"
    padding: "2rem"
  service-panel:
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "{spacing.panel-pad}"
  side-card-solid:
    backgroundColor: "{colors.navy}"
    rounded: "{rounded.card}"
    padding: "2rem"
  fact-chip:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: ".4rem .85rem"
  input:
    backgroundColor: "{colors.felt}"
    textColor: "{colors.white}"
    rounded: "{rounded.field}"
    padding: ".75rem .95rem"
    height: "48px"
  nav-link:
    textColor: "{colors.silver}"
  nav-link-active:
    textColor: "{colors.white}"
---

# Design System: Spades Solutions

## Overview

**Creative North Star: "The Card Face"**

The logo is a spade, so the site is a card table. Each of the two services is dealt as its own playing card: a navy face with a corner index (rank plus the logo's spade pip, mirrored at the opposite corner), a short list of what it covers, and its own quote button printed on the card. The page is the felt: a deep navy-black table lit by a soft overhead glow. Everything sits in one hue family (blue at about 258°), and silver is the only ink that is not navy or white.

The mood is dark, premium and quiet. Density is low: generous section bands, hairline rules between rows, centred hero, left-aligned everything else. Ornament comes from the brand itself rather than from decoration: the badge logo's double ring becomes a two-hairline inner frame on every card and panel, the spade silhouette becomes the card bullet and pip, and the Roman-capital wordmark sets the heading face. The one moment of motion is the deal: on load the two face cards slide out from behind the card back into a fanned hand.

The world refuses the category default of a dark concert photo hero over a row of icon cards. There is no photography, no icon grid and no third accent hue.

**Key Characteristics:**
- One hue family: navy-black felt, navy faces, silver ink, near-white headings.
- The badge's double ring as a two-hairline inner frame on every framed surface.
- Card grammar: rank letters (A for Apparel, K for Event Logistics) with the spade pip, mirrored corner indices.
- Marcellus Roman capitals for headings, ranks and the wordmark; Figtree for everything you read.
- Pill-shaped controls; 16px card corners; hairline rows instead of boxes.
- Depth only where a card is physically dealt; everything else lies flat on the table.

## Colors

A single cool navy hue stepped from table to card to logo, with silver as the one ink and a soft rose reserved for form errors.

### Primary
- **Card Silver** (`silver`): The only accent. Solid quote buttons, focus rings, corner indices, rank numerals, step numerals, list-heading underlines, contact icons, the select chevron. It is ink on the table, never a surface larger than a button.

### Neutral
- **Felt** (`felt`): The table. Page background, input fields, the open mobile menu, text on silver buttons.
- **Felt Glow** (`felt-glow`): The overhead light. Top of the page-wide radial gradient (120% by 70% at top centre, fading into Felt by 60%).
- **Deep Table** (`deep`): Footer ground, the darkest step.
- **Closing Band** (`band`): Background of the full-width closing call-to-action band, one step above Felt.
- **Card Face** (`face`): Face cards in the hand and the quote form card.
- **Logo Navy** (`navy`): The card back, the solid WhatsApp side card, and (at 45% to 20% alpha, as a vertical gradient) the service panels. Also the scrollbar thumb.
- **Heading White** (`white`): Headings, list items on cards, definition terms, labels, active nav, ghost-button text, input text, the solid-button hover fill.
- **Body Slate** (`text`): All running copy and ledes. Also small pips in card lists.
- **Hairline** (`rule`): Row dividers, section-band top borders, the inner ring of the double frame.
- **Strong Hairline** (`rule-strong`): The outer ring of the double frame, input borders, ghost-button and chip borders, the top rule of the steps row.

### State (functional only)
- **Error Rose** (`danger`): Field error text, invalid field borders, and the form's error status line. Nowhere else.

### Named Rules
**The Two-Inks Rule.** On the felt there are only two inks: Card Silver for accents and Heading White for headings. Body copy is Body Slate. There is no third hue; Error Rose exists only to mark a broken field.

**The Silver-Is-Ink Rule.** Silver is never a panel or band fill. Its largest area is a pill button.

## Typography

**Display Font:** Marcellus (with Georgia, serif), self-hosted, weight 400 only
**Body Font:** Figtree (with system-ui, -apple-system, Segoe UI, sans-serif), self-hosted variable 400 to 700

**Character:** Marcellus is a flared Roman-capital face that echoes the SPADES SOLUTIONS wordmark; it reads as engraved, like a card court or a printed invitation. Figtree is a clean, friendly geometric sans that keeps the body copy plain and legible on dark ground.

### Hierarchy
- **Display** (Marcellus 400, `display`, line-height 1.05, -.01em): Sub-page H1 (Services, Request a Quote). Larger than the home hero because nothing competes with it.
- **Display Hero** (Marcellus 400, `display-hero`): The home H1, kept smaller so the dealt hand fits in the first viewport.
- **Closing Headline** (Marcellus 400, clamp(2.4rem, 5.5vw, 4.5rem)): The closing band question or invitation.
- **Headline** (Marcellus 400, `headline`): Section H2s in the content bands. Service panels use a smaller step (clamp(2rem, 3.4vw, 2.9rem)).
- **Title** (Marcellus 400, `title`): Card face titles. Side-card titles step down to 1.75rem; step titles and the "who books" list items to 1.5rem.
- **Rank** (Marcellus 400, `rank`, line-height .82, Card Silver): The big service rank on panels, with a spade pip below. Smaller rank roles: card corner index 2.1rem, step numerals 3.5rem, next-step numerals 1.35rem.
- **Body** (Figtree 400, `body`): All running copy. Card and panel copy steps to 1rem; footer to .9375rem.
- **Lede** (Figtree 400, `body-lede`, max 46ch): Section and page ledes. The home hero lede is 1.1875rem at max 64ch; the closing band paragraph caps at 44ch.
- **Label** (Figtree 600, `label`): Form labels, footer column headings, and the column headings above the "who books" lists (with a silver underline).
- **Button** (Figtree 600, `button`): Every button and the "see details" text links.
- **Wordmark** (Marcellus 400, `wordmark`, uppercase): The brand name in the header and footer. On the card back it tracks to .32em at .9375rem.

### Named Rules
**The Engraved-Capitals Rule.** Marcellus carries every heading, rank and numeral at weight 400. Hierarchy comes from size, never from bolding the serif.

**The Wordmark-Only Tracking Rule.** Tracked uppercase belongs to the wordmark alone. No other text is set in spaced capitals; headings and button labels are Title Case.

**The Rank-Count Rule.** Ordered sequences count like a deck: A, 2, 3, 4. Step and next-step numerals are Marcellus in Card Silver, and the first is always the Ace.

## Layout

A single centred container (`container` wide, `gutter` on each side). The header is sticky at 80px high, transparent at rest and turning to 94% Felt with a 10px backdrop blur and a hairline once the page scrolls.

Pages are a stack of full-width bands separated by a hairline top border, each with `section` vertical padding; the closing band is taller (`section-close`) and filled with Closing Band. The home hero is centred; all other content is left-aligned. Content bands use a two-column split (1fr / 1.25fr, gaps 3rem by 5rem) or a two-up pair of panels (1.5rem gap). The booking steps run as a four-column row under a strong hairline, with hairline column dividers. The contact page is form plus aside (1.5fr / 1fr).

Inside cards and panels, lists are rows divided by hairlines (about 1.05rem vertical padding), not boxes or tiles.

Responsive: at 1080px the hand re-deals as a small 132px card back (5:7, tilted -4°) centred above two face cards side by side. At 960px every split, pair, panel and contact grid collapses to one column and the steps go two-up. At 760px the nav becomes a full-width drop-down under the header behind a 48px round menu button, the hand and the form fields go single-column. At 480px the steps stack and the panel rank sits above its heading. At 360px the header wordmark text hides, leaving the spade.

Every interactive target is at least 48px tall (`touch`).

## Elevation & Depth

Mostly flat. Depth is tonal (Felt to Card Face to Logo Navy, each a lighter step of the same hue) and framed by hairlines. Real shadow exists only on the dealt playing cards in the hero hand, because they are the only objects that physically sit on the table.

### Shadow Vocabulary
- **Dealt card** (`box-shadow: 0 2px 4px rgba(0, 0, 0, .3), 0 40px 80px -30px rgba(0, 0, 0, .8)`): The three cards in the hero hand only. A tight contact shadow plus a long soft drop.
- **Field focus glow** (`box-shadow: 0 0 0 3px rgba(205, 213, 224, .25)`): Inputs on keyboard focus, with the border shifting to Card Silver.

### Named Rules
**The Only-Dealt-Cards-Lift Rule.** A surface casts a shadow only if it is a playing card in the hand. Panels, the form card and side cards lie flat and rely on tone and the double ring.

**The Deal Rule.** Motion belongs to the hand. On load the face cards deal out from behind the card back (1.1s on the ease-out curve, 0.15s delay; 0.9s with staggered 0.1s and 0.22s delays below 1080px). Hover or focus lifts one card at a time (it straightens toward 3° and rises 14px, 0.55s). Reduced motion shows the hand static and cuts all transitions.

## Shapes

Softly rounded rectangles framed by a double hairline, and pills for anything you press.

- **Corners:** cards, panels and side cards use `card` (16px). Inputs use `field` (10px). Buttons, chips and the menu button are full pills (`pill`). Focus outlines round at 6px.
- **The double ring:** taken from the circular badge logo. Two concentric hairlines frame each framed surface: an outer Strong Hairline and an inner Hairline. On filled surfaces (face cards, the form card, the card back) the rings sit inset at 10px and 14px with 10px and 7px radii. On unfilled surfaces (service panels, outline side cards) the outer ring is the edge itself (inset 0, 16px radius) and the inner ring sits at 6px with an 11px radius. The solid side card uses 8px and 12px.
- **The spade pip:** the logo's spade silhouette, applied as a mask and coloured by the current text colour. It is the corner pip, the list bullet on cards, and the mark under every panel rank.
- **Rotation:** only in the hero hand (face cards at ±7° on desktop, ±1.5° below 1080px; the small card back at -4°). Corner indices at the bottom-right are rotated 180°, like a real card.

### Named Rules
**The Double Ring Rule.** Every framed surface carries two hairlines, outer strong and inner soft. A single border or a heavy frame is not part of this world.

## Components

### Buttons
Smooth silver pills; confident but small.
- **Shape:** full pill (999px), 48px minimum height, padding .8rem by 1.45rem, 1px border. Optional 18px line icon leads the label (WhatsApp).
- **Solid:** Card Silver fill and border, Felt text. The primary action everywhere: Get a Quote in the header, the quote button on each card and panel, Request a Quote, Send Request, Open WhatsApp.
- **Ghost:** transparent, Strong Hairline border, Heading White text. The secondary action (Chat on WhatsApp beside Request a Quote).
- **Hover / Focus / Active:** solid fills to Heading White; ghost border goes Card Silver with an 8% silver wash. Press scales to .97. Focus is the global 2px silver outline at 3px offset. Disabled drops to 60% opacity with a progress cursor while sending.

### Chips
- **Style:** fact chips on service panels ("From 1 piece", "Free quote"): Heading White text at .9375rem, Strong Hairline border, pill, no fill. Informational only, never interactive.

### Cards / Containers
- **Face card (signature):** Card Face fill, 16px corners, double ring at 10px and 14px, dealt-card shadow, 440px minimum height, top padding 5.5rem to clear the corner index. Contents: title, one-line description, four hairline-divided inclusions with small spade pips, and a solid quote button pinned to the bottom.
- **Card back:** Logo Navy fill, centred white spade at 58% width and the tracked wordmark below. Decorative, sits raised 18px between the two faces.
- **Service panel:** navy vertical gradient (Logo Navy at 45% to 20% alpha), double ring with the outer ring on the edge, `panel-pad` padding. A giant silver rank (A or K) with a spade below sits to the left of the heading, lede, "good for" line, fact chips and action. On the Services page the right column is a hairline definition list of what is covered.
- **Form card:** Card Face fill with the inset double ring, padding clamp(1.75rem, 4vw, 3rem).
- **Side cards:** outline variant (rings only) or solid Logo Navy variant. 2rem padding; buttons inside go full width.

### Inputs / Fields
- **Style:** Felt fill, Strong Hairline border, 10px radius, 48px minimum height (textarea 150px, vertically resizable), Heading White text. Labels above in Label style; "(optional)" in Body Slate at weight 400. Selects use a custom silver chevron.
- **Focus:** border to Card Silver plus the 3px silver focus glow. Hover moves the border to Card Silver.
- **Error:** border and message in Error Rose; messages appear under the field on blur or submit, and a status line under the form summarises.

### Navigation
- **Style:** spade mark (34px) plus the Marcellus wordmark on the left; Figtree 500 links in Card Silver on the right, then the solid Get a Quote pill. Hover and current page turn Heading White and underline (1px for current).
- **Mobile:** below 760px a 48px round outline menu button toggles a full-width Felt drop-down; links become 1.125rem rows divided by hairlines with the quote pill below. Escape closes it.

### Corner Index (signature)
A card's rank (Marcellus 2.1rem, Card Silver) stacked over a spade pip, top-left, mirrored and rotated 180° bottom-right. Apparel is always A; Event Logistics is always K.

### Booking Steps (signature)
Four columns under a strong hairline. Each step: a 3.5rem silver Marcellus numeral counting A, 2, 3, 4, a 1.5rem title and a short line of copy. Hairline dividers between columns.

## Do's and Don'ts

### Do:
- **Do** deal each service as its own card or panel with its own quote button; the two services never share a surface.
- **Do** keep Apparel as A and Event Logistics as K wherever a rank appears.
- **Do** frame every card and panel with the double ring: outer Strong Hairline, inner Hairline.
- **Do** use the spade pip (the logo silhouette, coloured by currentColor) as the only card-list bullet and the only ornament; line icons appear only beside contact details and on WhatsApp buttons.
- **Do** count ordered sequences as A, 2, 3, 4 in silver Marcellus.
- **Do** set headings, ranks and numerals in Marcellus 400 in Heading White or Card Silver, and running copy in Figtree on Body Slate.
- **Do** use the solid silver pill for the primary quote action and the ghost pill for the secondary WhatsApp action.
- **Do** keep every control at least 48px tall and give keyboard focus the 2px silver outline.
- **Do** honour reduced motion: the hand shows static, transitions cut.

### Don't:
- **Don't** open a page with a dark event photo hero over a row of icon cards.
- **Don't** introduce a third hue; Error Rose is for broken form fields only.
- **Don't** fill a panel or band with silver.
- **Don't** put shadows on panels, form cards or side cards; only dealt cards lift.
- **Don't** set tracked uppercase text anywhere except the wordmark.
- **Don't** bold Marcellus or swap it for another display face.
- **Don't** rotate or fan cards outside the hero hand.
- **Don't** replace hairline rows with boxed tiles.
