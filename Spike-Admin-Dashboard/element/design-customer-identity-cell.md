# Component: CustomerIdentityCell (`element/design-customer-identity-cell.md`)

## 1. Description & Use Case
Shows customer avatar, name, and optional email.

## 2. Anatomy & Structure
Avatar; full name; optional email.

## 3. Visual Specifications
32–40px avatar; 8–12px gap; name medium; email 12px muted and allowed to wrap/clamp.

## 4. States & Variants
Avatar fallback; email may be omitted on small screens if redundant; never expose real customer data in sample fixtures.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="flex items-center gap-3"><img class="h-9 w-9 rounded-full object-cover" src="/avatars/customer.jpg" alt=""/><div class="min-w-0"><p class="truncate font-medium">Jordan Lee</p><p class="truncate text-xs text-slate-500">jordan@example.test</p></div></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
