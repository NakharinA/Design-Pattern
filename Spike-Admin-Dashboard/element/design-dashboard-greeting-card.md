# Component: DashboardGreetingCard (`element/design-dashboard-greeting-card.md`)

## 1. Description & Use Case
Friendly achievement/greeting panel at the top of the dashboard.

## 2. Anatomy & Structure
Greeting heading; supporting sentence; optional percentage highlight; optional illustration.

## 3. Visual Specifications
White or softly tinted surface; proposed 20–24px padding; 12px radius; subtle border/shadow. Heading 22–26px semibold; body 13–14px muted.

## 4. States & Variants
Default; compact/mobile; illustration-hidden; loading. Avoid decorative illustration pushing text off-screen.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<section class="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div><h2 class="text-xl font-semibold text-slate-800">Congratulations, Jonathan</h2><p class="mt-2 text-sm text-slate-500">You have done 38% more sales.</p></div><img class="hidden h-24 w-auto object-contain sm:block" src="/assets/welcome-illustration.svg" alt="" /></section>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
