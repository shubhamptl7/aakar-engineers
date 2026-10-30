# Aakar Engineers: Industry Design Research (v2)

Research date: 30 Oct 2026. Method: each site was rendered in headless Chrome at 1440px (desktop) and 390px (mobile). Saved for each: a first-screen screenshot, a full-page overview at 25% scale, and computed styles (fonts, sizes, colours, button radius). Screenshots are in `docs/research/screenshots/`.

## Sites studied (15 homepages + 5 inner pages)
| Group | Sites |
|---|---|
| Indian cooling-tower leaders and direct competitors | Paharpur (India's No. 1), Towertech (Ahmedabad), Delta Cooling Towers |
| Global cooling-tower leaders | SPX/Marley, BAC, EVAPCO, Advance Cooling Towers |
| Indian water/wastewater leaders | Thermax, Ion Exchange, VA Tech WABAG, Triveni, Netsol Water |
| Chemicals | Chembond, Kranti |
| Global water | Veolia Water Technologies |
| Inner pages | Towertech round-bottle product page, Delta bottle-tower product page, Paharpur industry page and case-study page, Netsol ETP page |

## Patterns found (what buyers in this industry are used to seeing)
| # | Pattern | Seen on | Why it builds trust |
|---|---|---|---|
| 1 | **Full-bleed photo of a real installation as the hero**: towers, plants, pipework. No illustrations. | Paharpur, Thermax, SPX, BAC, EVAPCO, Towertech, Advance, Delta | Seeing the hardware is the first proof. Buyers judge "is this a real manufacturer?" in seconds |
| 2 | **Hard-number proof strip**: years, installations, capacity | Paharpur "82,000+", Thermax "30,000 installations", Ion Exchange "100,000+", Delta "20,000 installations", Advance "38 yrs / 250 projects", Netsol | Scale and longevity = low risk |
| 3 | **Phone, email and WhatsApp in a top utility bar**, plus a red/orange quote CTA in the header | All Indian sites; Delta shows toll-free and WhatsApp | Indian B2B buyers call first |
| 4 | **Persistent enquiry affordance**: side "Request a quote" tab, "Quick links / Find a spare part / Enquiry" rail, WhatsApp float | Delta, Paharpur, EVAPCO, Towertech, Netsol | An enquiry is always one tap away |
| 5 | **Enquiry form inside the hero or as a page sidebar** | Towertech (hero form + product-page sidebar form), Delta | Captures a lead without leaving the page |
| 6 | **Product photo grid with a "Get a quote" button on every product** | Towertech, Netsol, Delta | Direct path from product to RFQ |
| 7 | **Client logo wall** | Towertech, Netsol (in hero), Delta (Clients in nav) | Borrowed trust from known names |
| 8 | **Certification badges** (ISO, CTI, CE, D&B) | Towertech, Paharpur ("CTI-certified"), SPX | Third-party validation. *Aakar: none known; ask* |
| 9 | **Industries served** with photo tiles | Paharpur (11 industry pages), Towertech, Thermax, BAC, Kranti | "They know my kind of plant" |
| 10 | **Problem → solution / offerings tabs** | Thermax ("How Thermax solves industry challenges" + offerings tab list with photo), Ion Exchange (clickable plant illustration) | Lets a buyer start from the problem |
| 11 | **Services: maintenance, upgrades, spares** | Towertech, Advance, Paharpur ("Find a spare part") | After-sales support is a buying criterion |
| 12 | **Product page = photo banner + breadcrumb, description, "Functions & components", gallery, sidebar enquiry form** | Towertech, Delta | Buyers expect this layout |
| 13 | **Brochure download band** | Towertech, Paharpur ("Downloads") | Purchase teams circulate PDFs internally |
| 14 | **Dark navy footer** with full sitemap, addresses and phones | All | Legitimacy, findability |

## Visual language (measured)
- **Colour:** Indian cooling-tower brands use **red** (Towertech #ED3237, Delta #FF0F32) or **orange** (Paharpur #E67000) as the action colour. Navy (#030D28, #0E2238 family) is used for dark bands and footers; white and light grey for content. Water companies use blue (#009ADC, #075599, #1F3D7C) with red or green accents (Thermax red, Ion Exchange green).
  - **Aakar's logo is red (#C8343C) + charcoal**, which fits the cooling-tower convention exactly.
- **Type:** geometric or industrial sans, bold, often UPPERCASE for section titles with the first word in the accent colour ("**OUR** SERVICES", "ROUND/BOTTLE **COOLING TOWER**"). Exo (Paharpur), Barlow (Towertech), Rubik (Advance), Poppins (Thermax), Lato (SPX), Roboto Slab (BAC).
- **Shapes:** small radius (0–6px), photo cards with captions, full-width photo bands, sharp red buttons.

## Where competitors are weak (Aakar's opportunity)
- Shallow product pages: Delta's bottle-tower page is two paragraphs; few capacity ranges; no explanatory diagrams.
- Cluttered and dated execution: sliders, 13–14px grey body text, cookie walls, repeated H1s (Towertech has 6 H1s), 200+ images on one page.
- No path for a buyer who only knows "something is wrong".
- No sense of one partner across equipment + chemicals + service. Aakar actually has this.

## Design decision for v2
**Follow the industry's conventions (they are what makes a buyer trust a manufacturer) and execute them better: cleaner, faster, more readable.**

Kept from the conventions: photo hero, number strip, utility bar, red quote CTA, hero quick-callback form, product photo grid with quote buttons, client logo wall, industries, offerings tabs (Thermax pattern), why-choose-us, process steps, CTA band, sidebar enquiry on product pages, WhatsApp float, navy footer.

Modernised: one consistent photo grade; a white proof card overlapping the hero; generous but not empty spacing; 17px body; Barlow / Barlow Condensed; real specs in tables; the engineering section drawing kept only where the convention already exists (product page "Functions & components").

Removed from v1 (they read as generic / AI-made, not industrial): grid-paper backgrounds, mono "01 / LABEL" section kickers, a diagram instead of a photo as the hero, dark "app-like" interactive band, hairline-box everything.

## Palette v2
| Role | Hex | Note |
|---|---|---|
| Brand / CTA red | #C8343C (hover #A92A31) | from Aakar logo; white text 5.2:1 |
| Navy (dark bands, footer, headings on light) | #0F2236 | industry-standard dark |
| Ink (body headings) | #121A24 | |
| Body text | #3E4955 | 9.3:1 on white |
| Light section bg | #F2F4F6 | |
| Border | #DCE1E6 | |
| Link / water accent | #1D5F8A | 6.6:1 on white |

## Photography (licensed, credited on /credits)
Wikimedia Commons, CC BY-SA / CC BY. Bottle-type FRP towers (hero), Indian rooftop induced-draft towers, field-erected tower, RO plant, Bengaluru STP aeration tank and aerial view, clarifier, Meerut textile mill. **All are illustrative stock. Replace with Aakar's own installation photos before launch.**
