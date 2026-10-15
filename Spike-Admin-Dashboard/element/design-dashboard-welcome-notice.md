# Component: DashboardWelcomeNotice (`element/design-dashboard-welcome-notice.md`)

## 1. Description & Use Case
Low-priority onboarding or welcome announcement.

## 2. Anatomy & Structure
Heading Welcome to Spike Admin; customization supporting copy; optional dismiss button.

## 3. Visual Specifications
Banner/card with 16–20px padding; low visual emphasis; 12px radius; avoid competing with core KPIs.

## 4. States & Variants
Dismissible only if functional; keyboard-accessible close button; replace template promotion copy in product-specific apps.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<aside class="flex items-start justify-between gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4"><div><h3 class="font-semibold text-slate-800">Welcome to Spike Admin</h3><p class="mt-1 text-sm text-slate-600">Customize this dashboard for your workflow.</p></div><button type="button" aria-label="Dismiss notice" class="rounded-md p-2 hover:bg-blue-100">×</button></aside>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
