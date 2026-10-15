# Component: EmptyState (`element/design-empty-state.md`)

## 1. Description & Use Case
Explains why a widget or list currently has no data.

## 2. Anatomy & Structure
Optional icon; short heading; explanatory text; optional action.

## 3. Visual Specifications
Centered layout; 24–32px padding; muted icon; heading 15–16px; body 13–14px.

## 4. States & Variants
With/without action; never show an action if no valid next step exists.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="grid min-h-40 place-items-center p-6 text-center"><div><p class="font-medium text-slate-700">No data yet</p><p class="mt-1 text-sm text-slate-500">Try another period or check back later.</p></div></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
