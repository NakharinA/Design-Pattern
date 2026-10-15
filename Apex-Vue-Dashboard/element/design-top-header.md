# Top header

## Description & use case
Global navigation area for page context, search, notifications, profile, and quick actions.

## Anatomy & structure
- Brand or menu toggle
- Search or command field
- Utility action icons
- Notification indicator
- User avatar/menu

## Visual specifications
- **Surface:** Use the global surface/canvas/border tokens in `../design.md`; confirm the final values against the reference.
- **Spacing:** Use the shared spacing scale; keep padding and gaps consistent with sibling components.
- **Typography:** Apply the global type scale. Primary information should dominate supporting metadata.
- **Shape and depth:** Use the global radius and shadow tokens; avoid introducing a one-off style without visual evidence.
- **Behavioral layout:** Keep the header compact with a white surface and subtle bottom border/shadow. Align controls vertically and give icon actions at least a 36–40 px hit area.

## States & variants
- **Default:** Default
- **Scrolled/elevated:** Scrolled/elevated
- **Mobile compact:** Mobile compact
- **Menu open:** Menu open

## HTML / Tailwind blueprint

```html
<!-- Structural blueprint only; not copied source markup. -->
<section class="rounded-md border border-slate-200 bg-white shadow-sm">
  <header class="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
    <h2 class="text-sm font-semibold text-slate-800">Top header</h2>
    <!-- optional controls -->
  </header>
  <div class="p-4">
    <!-- component content -->
  </div>
</section>
```

## Implementation notes
- Keep data, interaction logic, and presentation separate.
- Include keyboard interaction and visible `focus-visible` styles for interactive elements.
- Provide loading, empty, and error states where the component depends on asynchronous data.
- Treat dimensions and token values as estimates until checked against a live screenshot.
