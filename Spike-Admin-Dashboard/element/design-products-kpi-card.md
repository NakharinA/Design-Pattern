# Component: ProductsKpiCard (`element/design-products-kpi-card.md`)

## 1. Description & Use Case
Shows product count and period-over-period change.

## 2. Anatomy & Structure
Label Products; Last 7 days; value 432; change +26.5%; optional icon/sparkline.

## 3. Visual Specifications
Same base KPI geometry as adjacent metric cards; large number; compact period label.

## 4. States & Variants
Positive, negative, neutral variants; loading skeleton; ensure values use consistent number formatting.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<article class="rounded-xl border border-slate-200 bg-white p-5"><p class="text-sm text-slate-500">Products · Last 7 days</p><div class="mt-3 flex items-baseline gap-2"><strong class="text-3xl">432</strong><span class="text-sm text-emerald-600">+26.5%</span></div></article>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
