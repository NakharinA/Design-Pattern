# Component: LoadingSkeleton (`element/design-loading-skeleton.md`)

## 1. Description & Use Case
Reserves widget geometry while data loads.

## 2. Anatomy & Structure
Title bar; metric blocks; chart/table row placeholders.

## 3. Visual Specifications
Muted neutral blocks; rounded 4–8px; preserve final component dimensions to reduce layout shift.

## 4. States & Variants
Animated shimmer optional; respect reduced-motion preference; skeleton should not be announced as real content.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="animate-pulse space-y-4 rounded-xl border border-slate-200 bg-white p-5 motion-reduce:animate-none"><div class="h-4 w-1/3 rounded bg-slate-200"></div><div class="h-8 w-1/2 rounded bg-slate-200"></div><div class="h-32 rounded bg-slate-100"></div></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
