# Component: SearchField (`element/design-search-field.md`)

## 1. Description & Use Case
Searches the reviews or other list shown on the page.

## 2. Anatomy & Structure
Search icon; input; optional clear button.

## 3. Visual Specifications
36–42px high; 8px radius; neutral border; 12px horizontal padding.

## 4. States & Variants
Idle, focused, filled, disabled; search action should filter real data; provide accessible label.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<label class="relative block"><span class="sr-only">Search reviews</span><input type="search" placeholder="Search reviews…" class="w-full rounded-lg border border-slate-200 py-2 pl-3 pr-10 text-sm focus:ring-2 focus:ring-blue-500" /></label>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
