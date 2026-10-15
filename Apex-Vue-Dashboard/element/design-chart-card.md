# Chart card container

## Description & use case
Reusable surface that frames a chart with title, controls, legend, and optional summary.

## Anatomy & structure
- Header title/subtitle
- Date/filter controls
- Chart body
- Legend/summary

## Visual specifications
- **Surface:** Use the global surface/canvas/border tokens in `../design.md`; confirm the final values against the reference.
- **Spacing:** Use the shared spacing scale; keep padding and gaps consistent with sibling components.
- **Typography:** Apply the global type scale. Primary information should dominate supporting metadata.
- **Shape and depth:** Use the global radius and shadow tokens; avoid introducing a one-off style without visual evidence.
- **Behavioral layout:** Card header should remain visually distinct from plot area. Charts need responsive sizing and sufficient internal padding for axes and labels.

## States & variants
- **Default:** Default
- **Filtered:** Filtered
- **Loading:** Loading
- **Empty:** Empty
- **Error:** Error

## HTML / Tailwind blueprint

```html
<!-- Structural blueprint only; not copied source markup. -->
<section class="rounded-md border border-slate-200 bg-white shadow-sm">
  <header class="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
    <h2 class="text-sm font-semibold text-slate-800">Chart card container</h2>
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
