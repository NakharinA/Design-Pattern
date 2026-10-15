# Component: LatestReviewsSection (`element/design-latest-reviews-section.md`)

## 1. Description & Use Case
Searchable table of recent product reviews.

## 2. Anatomy & Structure
Title Latest Reviews; supporting copy; search; columns Products, Customer, Reviews, Status, Time; product/customer identity; stars; review text.

## 3. Visual Specifications
Table within card; search aligned in section header; avatars/thumbnails; stars; muted date; restrained status badge.

## 4. States & Variants
Search filters rows; ratings read-only unless editing is required; review text clamp with detail access; mobile scroll/card layout; loading/empty/error.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<section class="rounded-xl border border-slate-200 bg-white p-5"><header class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-lg font-semibold">Latest Reviews</h2><p class="text-sm text-slate-500">Reviews received across all channels</p></div><input type="search" aria-label="Search reviews" placeholder="Search reviews…" class="rounded-lg border border-slate-200 px-3 py-2 text-sm" /></header><div class="mt-4 overflow-x-auto"><table class="min-w-full text-left text-sm"><thead><tr><th class="px-3 py-3">Products</th><th class="px-3 py-3">Customer</th><th class="px-3 py-3">Reviews</th><th class="px-3 py-3">Status</th><th class="px-3 py-3">Time</th></tr></thead><tbody><!-- review rows --></tbody></table></div></section>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
