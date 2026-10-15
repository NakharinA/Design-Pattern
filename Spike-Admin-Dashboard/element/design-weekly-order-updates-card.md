# Component: WeeklyOrderUpdatesCard (`element/design-weekly-order-updates-card.md`)

## 1. Description & Use Case
Shows the total-order trend for a selected reporting period.

## 2. Anatomy & Structure
Title “Total Orders”; subtitle “Weekly order updates”; period selector; chart/summary.

## 3. Visual Specifications
Standard card; title 16–18px semibold; subtitle 12–13px muted; chart has flexible height and restrained gridlines.

## 4. States & Variants
Period selector updates data; loading/empty states; responsive chart labels. Chart type must be verified visually.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<section class="rounded-xl border border-slate-200 bg-white p-5"><header class="flex items-start justify-between gap-3"><div><h3 class="font-semibold">Total Orders</h3><p class="text-sm text-slate-500">Weekly order updates</p></div><select aria-label="Reporting period" class="rounded-lg border border-slate-200 px-3 py-2 text-sm"><option>This Week</option></select></header><div class="mt-5 min-h-48"><!-- chart component --></div></section>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
