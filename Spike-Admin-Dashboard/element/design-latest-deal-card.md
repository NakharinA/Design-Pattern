# Component: LatestDealCard (`element/design-latest-deal-card.md`)

## 1. Description & Use Case
Displays progress for the latest deal or target.

## 2. Anatomy & Structure
Title Latest Deal; period Last 7 days; progress 86.5%; amounts $98,500 and $122,900.

## 3. Visual Specifications
Standard card; progress visual and values grouped; label both amounts clearly as achieved/target after verifying the original.

## 4. States & Variants
Progress 0–100%; loading state; responsive ring/bar. Meaning of the two amounts must be verified against the live page.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<article class="rounded-xl border border-slate-200 bg-white p-5"><div class="flex justify-between"><div><h3 class="font-semibold">Latest Deal</h3><p class="text-xs text-slate-500">Last 7 days</p></div><strong>86.5%</strong></div><div class="mt-4 h-2 rounded-full bg-slate-100"><div class="h-2 rounded-full bg-blue-500" style="width:86.5%"></div></div><div class="mt-3 flex justify-between text-sm"><span>Achieved <b>$98,500</b></span><span>Target <b>$122,900</b></span></div></article>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
