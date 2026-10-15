# Component: Select (`element/design-select.md`)

## 1. Description & Use Case
Generic select control for reporting periods and filters.

## 2. Anatomy & Structure
Label; selected value; options; chevron.

## 3. Visual Specifications
Match input height and border/radius; compact padding; native select preferred for accessibility.

## 4. States & Variants
Default, focus, disabled, invalid; options must correspond to real behaviors/data.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<label class="block text-sm font-medium text-slate-700">Period<select class="mt-1 block w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"><option>This Week</option><option>Last 7 days</option></select></label>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
