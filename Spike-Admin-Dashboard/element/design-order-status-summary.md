# Component: OrderStatusSummary (`element/design-order-status-summary.md`)

## 1. Description & Use Case
Compact overview of orders grouped by processing status.

## 2. Anatomy & Structure
Status tiles for New, Processing, On hold, Delivered; each has label, count, optional icon/accent.

## 3. Visual Specifications
Group tiles evenly; 12–16px inner padding; subtle separators; label 12–13px muted, count 22–28px semibold.

## 4. States & Variants
Status tones neutral/info/warning/success; selected tile only if it navigates to a real filtered order list; responsive wrap.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="grid grid-cols-2 gap-3 lg:grid-cols-4">{items.map(item => <a key={item.label} href={item.href} class="rounded-xl border border-slate-200 bg-white p-4"><p class="text-sm text-slate-500">{item.label}</p><p class="mt-2 text-2xl font-semibold">{item.count}</p></a>)}</div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
