# Component: DashboardCard (`element/design-dashboard-card.md`)

## 1. Description & Use Case
Shared surface wrapper for dashboard widgets.

## 2. Anatomy & Structure
Optional header/title/subtitle/action; content slot; optional footer.

## 3. Visual Specifications
White surface, 1px neutral border, 12px radius, 20–24px padding, subtle shadow; avoid nested card overuse.

## 4. States & Variants
Default; no-padding chart variant; interactive hover variant only for clickable cards.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<section class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><header class="mb-4 flex items-center justify-between"><h3 class="font-semibold">Card title</h3><div><!-- optional actions --></div></header><div><!-- content slot --></div></section>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
