# Component: PeriodSelect (`element/design-period-select.md`)

## 1. Description & Use Case
Chooses a reporting period for chart/KPI data.

## 2. Anatomy & Structure
Accessible label; selected option; chevron.

## 3. Visual Specifications
Compact 36–40px high; 8px radius; 1px border; 8–12px horizontal padding.

## 4. States & Variants
Default, focus, disabled; selection must actually update data.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<label class="sr-only" for="period">Reporting period</label><select id="period" class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"><option>This Week</option><option>Last 7 days</option></select>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
