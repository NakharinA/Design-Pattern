# Component: CustomersKpiCard (`element/design-customers-kpi-card.md`)

## 1. Description & Use Case
Shows customer count and recent change.

## 2. Anatomy & Structure
Label Customers; Last 7 days; value 6,380; change +26.5%.

## 3. Visual Specifications
Reuse the KPI card style and spacing; use same type scale and trend placement as other KPIs.

## 4. States & Variants
Positive/negative/neutral change; responsive width; loading state.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<article class="rounded-xl border border-slate-200 bg-white p-5"><p class="text-sm text-slate-500">Customers · Last 7 days</p><div class="mt-3 flex items-baseline gap-2"><strong class="text-3xl">6,380</strong><span class="text-sm text-emerald-600">+26.5%</span></div></article>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
