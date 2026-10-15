# Component: CustomerTrendChart (`element/design-customer-trend-chart.md`)

## 1. Description & Use Case
Visualizes customer trend for the current period against last week.

## 2. Anatomy & Structure
Current metric 6,380; date range April 07–April 14; last-week value 4,298; chart; legend and tooltip.

## 3. Visual Specifications
Chart card with heading/metric above plot; flexible height around 240–320px desktop; labels 11–12px; subtle gridlines. Verify exact chart type visually.

## 4. States & Variants
Tooltip; current/previous period series; responsive axis ticks; empty/missing data state; accessible data summary.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<section class="rounded-xl border border-slate-200 bg-white p-5"><div class="flex flex-wrap justify-between gap-3"><div><h3 class="font-semibold">Customers</h3><p class="text-sm text-slate-500">April 07 – April 14</p></div><div><strong class="text-2xl">6,380</strong><p class="text-xs text-slate-500">Last Week: 4,298</p></div></div><div class="mt-5 min-h-60" role="img" aria-label="Customer trend chart with current and previous period"><!-- chart library canvas --></div></section>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
