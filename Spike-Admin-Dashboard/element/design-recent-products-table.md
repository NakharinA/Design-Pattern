# Component: RecentProductsTable (`element/design-recent-products-table.md`)

## 1. Description & Use Case
Lists recent product orders and separates payment state from order state.

## 2. Anatomy & Structure
Columns Products, Payment, Status; product image/name/variant; amount progress; payment status; order status.

## 3. Visual Specifications
Table card; compact row padding 12–16px; thumbnail 40–48px; 13–14px text; thin row dividers; status badges.

## 4. States & Variants
Row hover/focus; optional sorting/pagination only when implemented; mobile horizontal scroll or stacked rows; long product names remain accessible.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="overflow-x-auto rounded-xl border border-slate-200 bg-white"><table class="min-w-full text-left text-sm"><thead class="bg-slate-50 text-slate-500"><tr><th class="px-4 py-3">Products</th><th class="px-4 py-3">Payment</th><th class="px-4 py-3">Status</th></tr></thead><tbody><tr class="border-t border-slate-100"><td class="px-4 py-3"><div class="flex items-center gap-3"><img class="h-10 w-10 rounded-md object-cover" src="/products/item.jpg" alt=""/><div><p class="font-medium">iPhone 13 Pro Max</p><p class="text-xs text-slate-500">Pacific Blue, 128GB</p></div></div></td><td class="px-4 py-3">$180 / $499</td><td class="px-4 py-3"><span class="rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700">Confirmed</span></td></tr></tbody></table></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
