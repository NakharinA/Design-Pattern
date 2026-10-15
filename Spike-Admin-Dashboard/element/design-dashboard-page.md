# Component: DashboardPage (`element/design-dashboard-page.md`)

## 1. Description & Use Case
Root composition for the dashboard overview.

## 2. Anatomy & Structure
Greeting card; order summary; KPI grid; customer trend chart; product table; visitor location card; latest reviews; welcome notice.

## 3. Visual Specifications
No visual surface of its own beyond page canvas and grid. Use 12-column CSS grid on desktop, consistent 20–24px gaps, 24px page gutter. Background proposed #F6F8FC.

## 4. States & Variants
Desktop multi-column; tablet reduced columns; mobile stacked. Loading page can render widget-level skeletons; failed widgets should not block the whole page.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<main class="min-h-screen bg-slate-50 p-4 md:p-6"><div class="grid grid-cols-1 gap-5 xl:grid-cols-12"><section class="xl:col-span-12"><!-- greeting + order summary --></section><section class="xl:col-span-4"><!-- KPI card --></section><section class="xl:col-span-8"><!-- chart --></section></div></main>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
