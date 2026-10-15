# Component: ProfitInsightCard (`element/design-profit-insight-card.md`)

## 1. Description & Use Case
Highlights a profit comparison against the prior month.

## 2. Anatomy & Structure
Insight copy: “$18k Profit more than last month”; amount; comparison period; direction.

## 3. Visual Specifications
Use a compact insight panel with prominent amount, 16–18px heading, subdued context, and positive semantic accent only when data supports it.

## 4. States & Variants
Up/down/flat variants; never use color alone; include comparison period and currency.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<aside class="rounded-xl border border-emerald-100 bg-white p-5"><p class="text-sm text-slate-500">Profit insight</p><p class="mt-2 text-xl font-semibold text-slate-800">$18k more profit</p><p class="mt-1 text-sm text-slate-500">Compared with last month</p></aside>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
