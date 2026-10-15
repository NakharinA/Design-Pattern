# Component: StatusBadge (`element/design-status-badge.md`)

## 1. Description & Use Case
Compact label for order/payment/review state.

## 2. Anatomy & Structure
Status text; optional icon.

## 3. Visual Specifications
Pill or softly rounded rectangle; 4–6px vertical and 8px horizontal padding; 12px text.

## 4. States & Variants
Success, warning, danger, info, neutral; status text always present.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<span class="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">Confirmed</span>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
