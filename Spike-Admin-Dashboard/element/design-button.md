# Component: Button (`element/design-button.md`)

## 1. Description & Use Case
Primary and secondary actions in the dashboard.

## 2. Anatomy & Structure
Text; optional leading/trailing icon; optional loading indicator.

## 3. Visual Specifications
36–40px high; 8px radius; 12–16px horizontal padding; medium weight.

## 4. States & Variants
Primary, secondary, outline, ghost, danger; hover, active, focus, disabled, loading. Use semantic button type.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<button type="button" class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50">View all</button>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
