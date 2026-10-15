# Component: TextInput (`element/design-input.md`)

## 1. Description & Use Case
Generic text input for search or filters.

## 2. Anatomy & Structure
Label; input; optional helper/error message; optional leading/trailing icon.

## 3. Visual Specifications
36–42px high; 8px radius; 1px border; 12px horizontal padding.

## 4. States & Variants
Default, hover, focus, filled, disabled, invalid; visible label or accessible name; error text associated programmatically.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<label class="block text-sm font-medium text-slate-700">Search<input class="mt-1 block w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" /></label>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
