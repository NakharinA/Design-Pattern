# Component: ChartCard (`element/design-chart-card.md`)

## 1. Description & Use Case
Reusable chart wrapper with title, legend, plot, and states.

## 2. Anatomy & Structure
Header; optional summary; legend; chart container; tooltip provided by chart library; empty/error state.

## 3. Visual Specifications
Card padding 20–24px; plot height 240–320px desktop; labels 11–12px; gridlines low contrast.

## 4. States & Variants
Responsive resize; keyboard/accessibility summary; tooltip; no-data and loading states.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<section class="rounded-xl border border-slate-200 bg-white p-5"><div class="flex items-center justify-between"><h3 class="font-semibold">Customer trend</h3><div class="text-xs text-slate-500">This week</div></div><div class="mt-4 h-64" aria-label="Chart plot"><canvas aria-label="Customer trend chart"></canvas></div><p class="sr-only">Accessible chart data summary goes here.</p></section>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
