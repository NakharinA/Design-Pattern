# Component: AvatarGroup (`element/design-avatar-group.md`)

## 1. Description & Use Case
Reusable avatar row with overflow count and fallbacks.

## 2. Anatomy & Structure
Avatar images/initials; optional +N overflow marker.

## 3. Visual Specifications
32–40px circles; subtle white border; optional -space-x-2 overlap.

## 4. States & Variants
Image loaded/fallback initials; overflow hidden count; tooltips only if accessible.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="flex items-center -space-x-2"><span class="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-slate-200 text-xs">JD</span><span class="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-slate-100 text-xs">+8</span></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
