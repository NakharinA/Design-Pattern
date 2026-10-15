# Component: RatingDisplay (`element/design-rating-display.md`)

## 1. Description & Use Case
Displays a review rating from zero to five.

## 2. Anatomy & Structure
Five stars; numeric value optionally; accessible text.

## 3. Visual Specifications
Stars around 14–16px; filled and empty states clearly distinguished.

## 4. States & Variants
Read-only display by default; editable rating must use keyboard-operable radio inputs; accessible label “4 out of 5”.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div class="inline-flex items-center gap-1 text-amber-500" role="img" aria-label="4 out of 5 stars"><span>★★★★</span><span class="text-slate-300">★</span></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
