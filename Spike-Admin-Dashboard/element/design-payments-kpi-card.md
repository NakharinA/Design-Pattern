# Component: PaymentsKpiCard (`element/design-payments-kpi-card.md`)

## 1. Description & Use Case
Summarizes payments and payment-method mix.

## 2. Anatomy & Structure
Title Payments; period Last 7 days; value 12,389; change -3.8%; PayPal 52%; Credit Card 48%.

## 3. Visual Specifications
Card padding 20px; value 30–34px bold; metadata 12–13px; optional segmented bar and legend.

## 4. States & Variants
Negative trend includes minus sign and text; hover/focus if clickable; skeleton state. Percentages should total 100% for complete distributions.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<article class="rounded-xl border border-slate-200 bg-white p-5"><p class="text-sm text-slate-500">Payments · Last 7 days</p><div class="mt-3 flex items-baseline gap-2"><strong class="text-3xl">12,389</strong><span class="text-sm text-rose-600">−3.8%</span></div><div class="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"><div class="h-full bg-blue-500" style="width:52%"></div></div><div class="mt-3 flex justify-between text-xs text-slate-500"><span>PayPal 52%</span><span>Credit Card 48%</span></div></article>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
