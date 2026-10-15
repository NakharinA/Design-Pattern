# Component: ProductIdentityCell (`element/design-product-identity-cell.md`)

## 1. Description & Use Case
Shows product thumbnail, title, and optional variant in a table row.

## 2. Anatomy & Structure
Image; product name; optional SKU/variant/description.

## 3. Visual Specifications
40–48px square thumbnail; 8–12px gap; name 13–14px medium; secondary line 12px muted.

## 4. States & Variants
Missing image fallback; long text wraps/clamps; accessible image alt only if image conveys unique product info.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="flex min-w-48 items-center gap-3"><img class="h-10 w-10 rounded-md object-cover" src="/products/item.jpg" alt=""/><div><p class="font-medium text-slate-800">iPhone 13 Pro Max</p><p class="text-xs text-slate-500">Pacific Blue, 128GB</p></div></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
