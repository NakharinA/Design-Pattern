# Component: AppTopbar (`element/design-topbar.md`)

## 1. Description & Use Case
Top application bar for page context and global actions.

## 2. Anatomy & Structure
Menu/sidebar toggle; page title/breadcrumb; optional search; notifications; profile/avatar menu.

## 3. Visual Specifications
Proposed height 64–72px; white surface; bottom border; horizontal padding 16–24px.

## 4. States & Variants
Desktop/mobile; menu states; keyboard-accessible dropdowns; buttons need accessible labels; search must function if shown.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<header class="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6"><div class="flex items-center gap-3"><button class="rounded-lg p-2 hover:bg-slate-100" aria-label="Toggle navigation">☰</button><h1 class="text-lg font-semibold">Dashboard</h1></div><div class="flex items-center gap-2"><button aria-label="Notifications" class="rounded-lg p-2 hover:bg-slate-100">♧</button><button aria-label="Open profile menu" class="h-9 w-9 rounded-full bg-slate-200">JD</button></div></header>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
