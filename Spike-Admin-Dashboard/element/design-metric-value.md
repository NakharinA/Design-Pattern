# Component: MetricValue (`element/design-metric-value.md`)

## 1. Description & Use Case
Formats and presents count, currency, percentage, and compact-number values.

## 2. Anatomy & Structure
Value; optional unit/currency; optional label.

## 3. Visual Specifications
28–34px semibold/bold; tabular numerals; avoid mixing formats for equivalent metrics.

## 4. States & Variants
Compact/full; positive/negative formatting is handled by trend component rather than value color.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<strong class="text-3xl font-semibold tracking-tight tabular-nums text-slate-800">12,389</strong>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
