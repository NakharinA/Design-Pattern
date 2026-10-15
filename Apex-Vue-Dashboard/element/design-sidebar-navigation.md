# Sidebar navigation

## Description & use case
Primary route navigation grouping dashboard and application modules.

## Anatomy & structure
- Brand area
- Grouped section labels
- Navigation links with icons
- Active route indicator
- Collapse/expand control

## Visual specifications
- **Surface:** Use the global surface/canvas/border tokens in `../design.md`; confirm the final values against the reference.
- **Spacing:** Use the shared spacing scale; keep padding and gaps consistent with sibling components.
- **Typography:** Apply the global type scale. Primary information should dominate supporting metadata.
- **Shape and depth:** Use the global radius and shadow tokens; avoid introducing a one-off style without visual evidence.
- **Behavioral layout:** Use a white or near-white panel against the light canvas. Active route should be unmistakable via accent text/background or a left accent marker. Labels should remain readable at compact widths.

## States & variants
- **Expanded:** Expanded
- **Collapsed:** Collapsed
- **Mobile drawer:** Mobile drawer
- **Active route:** Active route
- **Hover:** Hover

## HTML / Tailwind blueprint

```html
<!-- Structural blueprint only; not copied source markup. -->
<section class="rounded-md border border-slate-200 bg-white shadow-sm">
  <header class="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
    <h2 class="text-sm font-semibold text-slate-800">Sidebar navigation</h2>
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
