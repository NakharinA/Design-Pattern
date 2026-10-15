# Component: ErrorState (`element/design-error-state.md`)

## 1. Description & Use Case
Displays a failed data load with a retry option where possible.

## 2. Anatomy & Structure
Error icon; plain-language heading/body; retry button.

## 3. Visual Specifications
Neutral card with semantic error accent; 16–24px padding; do not rely on red alone.

## 4. States & Variants
Retrying/loading; no retry if operation cannot be retried; accessible live region where appropriate.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="rounded-xl border border-rose-200 bg-white p-5" role="alert"><h3 class="font-semibold text-slate-800">Couldn’t load this data</h3><p class="mt-1 text-sm text-slate-500">Please try again.</p><button class="mt-3 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">Retry</button></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
