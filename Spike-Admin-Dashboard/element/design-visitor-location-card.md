# Component: VisitorLocationCard (`element/design-visitor-location-card.md`)

## 1. Description & Use Case
Summarizes visitor distribution by region/state for USA.

## 2. Anatomy & Structure
Title Visit From USA; LA 28%; NY 21%; KA 18%; AZ 12%; optional progress bars.

## 3. Visual Specifications
Compact list rows; labels left, percentages right; optional bar scaled to percentage; 12–14px typography.

## 4. States & Variants
Sort by percentage when meaningful; clarify denominator; verify abbreviations and their meaning before production use.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<section class="rounded-xl border border-slate-200 bg-white p-5"><h3 class="font-semibold">Visit From USA</h3><div class="mt-4 space-y-4">{items.map(x => <div key={x.label}><div class="mb-2 flex justify-between text-sm"><span>{x.label}</span><span class="text-slate-500">{x.percent}%</span></div><div class="h-2 rounded-full bg-slate-100"><div class="h-2 rounded-full bg-blue-500" style={{width:`${x.percent}%`}}></div></div></div>)}</div></section>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
