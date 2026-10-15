# Component: AppSidebar (`element/design-sidebar.md`)

## 1. Description & Use Case
Primary app navigation shell; not necessarily fully exposed in the dashboard body but part of the template UI shell.

## 2. Anatomy & Structure
Brand/logo; navigation groups; icons/labels; active item; optional badges; collapse control; profile/footer links.

## 3. Visual Specifications
Proposed width 250–270px expanded, 72–80px collapsed; white surface; right border; item height 40–44px; 8–12px internal gutters.

## 4. States & Variants
Expanded/collapsed; active; hover/focus; mobile drawer; independent scroll; active route from router. Verify exact sidebar items against screenshot.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<aside class="hidden min-h-screen w-64 shrink-0 border-r border-slate-200 bg-white p-4 lg:block"><div class="mb-6 text-lg font-semibold">Admin</div><nav aria-label="Main navigation" class="space-y-1"><a class="block rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700" href="/dashboard">Dashboard</a><a class="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50" href="/reports">Reports</a></nav></aside>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
