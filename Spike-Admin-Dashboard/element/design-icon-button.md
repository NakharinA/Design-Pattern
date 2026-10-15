# Component: IconButton (`element/design-icon-button.md`)

## 1. Description & Use Case
Compact icon-only actions such as close, menu, notifications.

## 2. Anatomy & Structure
Icon; accessible name; optional notification dot.

## 3. Visual Specifications
36–40px square; 8px radius; icon 18–20px.

## 4. States & Variants
Default, hover, active, focus, disabled; tooltip optional but aria-label required.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<button type="button" aria-label="Open notifications" class="relative grid h-10 w-10 place-items-center rounded-lg text-slate-600 hover:bg-slate-100 focus:ring-2 focus:ring-blue-500"><svg aria-hidden="true" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/></svg></button>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
