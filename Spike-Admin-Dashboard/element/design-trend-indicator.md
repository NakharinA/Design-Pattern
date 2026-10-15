# Component: TrendIndicator (`element/design-trend-indicator.md`)

## 1. Description & Use Case
Shows metric movement against a comparison period.

## 2. Anatomy & Structure
Arrow/icon; signed percentage; optional comparison label.

## 3. Visual Specifications
12–13px medium; small gap; semantic color with explicit sign and text.

## 4. States & Variants
Up/down/flat; accessible label such as “down 3.8 percent compared with previous period”.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<span class="inline-flex items-center gap-1 text-sm font-medium text-rose-600" aria-label="Down 3.8 percent">↓ <span>−3.8%</span></span>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
