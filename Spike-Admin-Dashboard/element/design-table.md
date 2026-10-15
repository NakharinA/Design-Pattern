# Component: DataTable (`element/design-table.md`)

## 1. Description & Use Case
Reusable table primitives for product and review lists.

## 2. Anatomy & Structure
Header row; body rows; optional image/text cells; status badges; optional pagination.

## 3. Visual Specifications
Header background #F8FAFC; cell padding 12–16px; 1px dividers; 13–14px text.

## 4. States & Variants
Row hover/focus; sorting only when implemented; empty/loading/error; mobile overflow or card transform.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="overflow-x-auto"><table class="min-w-full text-left text-sm"><thead class="bg-slate-50 text-xs uppercase text-slate-500"><tr><th class="px-4 py-3">Name</th><th class="px-4 py-3">Status</th></tr></thead><tbody><tr class="border-t border-slate-100 hover:bg-slate-50"><td class="px-4 py-3">Example</td><td class="px-4 py-3">Confirmed</td></tr></tbody></table></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
