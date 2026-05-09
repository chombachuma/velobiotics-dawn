# BRAND_VOICE.md — Velobiotics copy, tone, and content rules

> **Read before writing any customer-facing string.** This is how Velobiotics sounds — clinical-confident, warm, never bro-science. The rules here protect both the brand and the company legally.

## Brand essence

Velobiotics is **probiotics that actually reach the gut**. The competitive insight: most probiotic capsules dissolve in stomach acid before live cultures arrive where they're needed. Our patented delivery survives stomach acid, releases in the small intestine. That single technical truth anchors the whole brand: efficacy, evidence, results.

We are NOT:
- A wellness lifestyle brand selling vibes (Goop-adjacent)
- A bro-science supplement bunker (Athletic Greens-aggressive)
- A clinical pharmacy brand (cold, medicalised)

We ARE:
- **Clinical-confident**: we cite, we measure, we show.
- **Warm-direct**: human language, no jargon walls. Explain the science, then trust the customer.
- **Quietly premium**: the typography, spacing, and photography do the luxury lifting; the words stay grounded.

## Tone targets

- Sentences are **short to medium**. Aim for an average ~14 words. No comma-splice paragraphs.
- **Active voice** unless explaining a process where passive reads more naturally.
- **Specific numbers > vague intensifiers**. "300,000 happy customers" beats "many happy customers". "30 billion CFU" beats "powerful potency".
- **Second person ("you", "your")** for benefit copy. **First-person plural ("we", "our")** for company POV.
- **No exclamation marks** in benefit copy. One per page max, in a CTA, only when warranted.
- **No corporate-speak**: "synergistic", "leverage", "best-in-class", "robust", "ecosystem", "journey" (when meaning a customer's life).

## Voice examples

| Off-brand | On-brand |
|---|---|
| "Unlock your gut's full potential!" | "Probiotics that survive stomach acid." |
| "Our amazing journey to wellness." | "We tested 14 strains. These four made it through." |
| "Boost your immune system today!" | "12 of 14 published trials show measurable immune response within 21 days." |
| "Like, the cleanest probiotic ever." | "No fillers. No sugar. No marketing fluff." |
| "Get the body you deserve!" | "Daily probiotics, taken consistently for 8 weeks, build the foundation." |

## Health-claim guardrails

Velobiotics sells in South Africa (SAHPRA / Foodstuffs Cosmetics & Disinfectants Act 1972) and the United States (FDA — supplements fall under DSHEA, structure/function claims permitted, disease claims forbidden). **The wrong word can trigger an FDA warning letter or SAHPRA enforcement.**

### Forbidden in product copy (absolute, no exceptions)

Words and phrases that imply **diagnosis, cure, treatment, prevention, or mitigation** of a specific disease:
- "Cures", "treats", "prevents", "heals", "remedies"
- "Diagnoses", "manages [disease]"
- Specific disease names: cancer, diabetes, IBD, IBS, Crohn's, colitis, depression, anxiety, autism, COVID, infection, candidiasis (in disease context — fine in mechanism context for educated audiences)
- "FDA-approved" (supplements are NOT FDA-approved; only drugs are)
- "Clinically proven to [eliminate/reverse/eradicate]"

### Permitted (structure/function claims) with the right framing

You CAN describe how the product affects normal structure or function of the body, e.g.:
- "Supports digestive balance"
- "Promotes a healthy gut microbiome"
- "Helps maintain regular bowel function"
- "Supports immune function"
- "Contributes to vaginal pH balance" (for Femina line)

### The mandatory disclaimer

Any page making structure/function claims must show the FDA disclaimer near (not buried in) the claim:

> *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.*

In Liquid, render this through a snippet `snippets/vb-fda-disclaimer.liquid` so it can't be accidentally omitted. For SA-only audiences via `Translate & Adapt`, swap to a SAHPRA-appropriate notice.

### When in doubt — ask

If the user asks Claude to write copy that includes a specific medical condition, Claude must:
1. Refuse the explicit medical claim.
2. Offer a structure/function alternative.
3. Note that final regulatory review must be done by a human (the user's regulatory consultant, not Claude).

## Hero's Journey storytelling for landing pages

Every Velobiotics landing page (PDP especially) should map loosely to the Hero's Journey to drive emotional resonance + conversion. The customer is the hero, not the brand. Use this 6-beat structure (compressed from Campbell's 12-stage model):

1. **Ordinary world** — Recognise the customer's current state honestly.
   *"You're doing the work — clean diet, exercise, supplements. But the gut symptoms keep coming back."*

2. **Call to adventure** — Name the underlying problem they may not have framed.
   *"Most probiotics don't survive your stomach acid. The CFU on the label means nothing if the cultures are dead before they arrive."*

3. **Mentor + magical aid** — Introduce the science, the technology, the differentiator.
   *"Velobiotics uses a patented acid-resistant capsule. We've tested 14 strains. Four made it through stomach acid in clinical conditions, and they're what we ship."*

4. **The threshold** — The decision moment. Show the product, the dose, the simplicity.
   *"One capsule, every morning, on an empty stomach. That's the whole protocol."*

5. **Tests, allies, social proof** — Reviews, before/after testimonials, lab results, press mentions.
   *"Over 3,500 reviews. 4.8 average. 87% of customers report measurable change within 28 days."*

6. **Return with the elixir** — The transformed self. Quiet, confident, specific.
   *"Most customers re-order on day 25. The ones who don't usually email us first — and we'd rather hear from them than not."*

PDPs should hit beats 2–6. Homepage should hit 1–3 in the hero, then preview 4–6 below.

## Reference brands (study, don't copy)

These brands do something exceptionally well. Read their PDPs and homepages before writing copy.

| Brand | What they do well | What to learn |
|---|---|---|
| **Ritual** (ritual.com) | Transparent ingredients page, clinical study cited inline | Show the "why" of every ingredient. Trust through specificity. |
| **Athletic Greens / AG1** (drinkag1.com) | Subscription-first PDP with extreme social proof density | The number layout (servings, customers, years) hits before benefits. |
| **Seed** (seed.com) | Rigorous science-forward narrative, founder credibility, restraint | Long PDPs done well. Each scroll-block earns the next. |
| **Olipop** (drinkolipop.com) | Premium typography + product photography, simple flavor cards | Visual hierarchy on the PDP grid. |
| **OneSkin** (oneskin.co) | Mechanism-of-action explainer with animated diagrams | Technical concept made digestible without dumbing down. |
| **Hims/Hers** (forhims.com) | Symptom-first journey with quiz-driven personalization | Quiz-as-PDP-router pattern; we may build something similar. |

## Visual direction

- **Photography**: clean, naturally lit, ingredient-forward. No stock medical imagery. No clip-art microbes. Shoot capsules on linen, ingredients in clear glass, hands holding bottles in real kitchens.
- **Color**: green-600 (`--vb-brand`) is for CTAs and accents only. Body backgrounds are white or `--vb-green-50` (very faint tint). Don't drown the page in green.
- **Type**: Poppins. Headlines tight (`--vb-lh-tight`), body relaxed (`--vb-lh-normal`). Don't use more than 3 type sizes per section.
- **Spacing**: generous. Default `--vb-space-12` between major sections, `--vb-space-8` within. Whitespace is the brand.
- **Motion**: subtle. Fade-in on scroll for hero elements only. No parallax, no auto-playing video sound, no sticky overlays that obscure content.

## Mandatory copy elements per page type

### Homepage
- Hero with one-line promise + sub + single primary CTA + secondary trust line
- "How it works" 3-beat (acid-resistant → released in small intestine → daily protocol)
- Social proof block (rating + review count + 1-2 named reviews)
- Product grid (3–4 hero SKUs)
- Founder/science note (humanise the brand)
- FDA disclaimer in footer

### PDP (Product Detail Page)
- Hero: product image + name + clinical-positioning sub + price + Add to cart + dose info
- Quick benefits (3–4 bullets, structure/function language)
- Ingredients deep-dive (every strain named, CFU listed, mechanism explained)
- "How to take it" protocol (one capsule, when, with what)
- Reviews block (Vitals or Loox embed)
- FAQ (5–7 questions, schema-marked-up for SEO)
- Subscribe vs one-time pricing (PayWhirl integration)
- FDA disclaimer adjacent to any claim
- Cross-sell row ("Often bought with")

### Collection page
- Hero with category positioning
- Filterable grid (price, concern, rating)
- Comparison table for the category
- Educational content block
- FDA disclaimer in footer

### Landing page (campaign)
- Single-purpose: one product, one offer, one CTA
- 6-beat Hero's Journey structure as described above
- No site nav (or minimal)
- Stripped footer
- FDA disclaimer adjacent to claims

## When asked to "write the copy"

Always produce:
1. **Three options** for headlines (different angles: scientific, emotional, transactional)
2. **One sub** under the chosen headline
3. **One body paragraph** ≤ 50 words
4. **One CTA** in 2–4 words

Then ask which headline angle the user prefers before continuing. Don't write entire pages in one shot — review and iterate per beat.

## Locale variations

- **South Africa**: spelling per UK English (colour, organise, optimise). Currency ZAR. Local sourcing/lab callouts where applicable.
- **United States**: spelling per US English (color, organize, optimize). Currency USD. FDA disclaimer prominent.
- **Translate & Adapt** handles the runtime swap. Author both variants.