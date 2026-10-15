# Apex Vue Dashboard — Design Specification

**Reference:** https://demo.dashboardpack.com/apex-vue/  
**Purpose:** Reusable design and component blueprint for rebuilding the dashboard UI from scratch.

> **Evidence note:** The live demo is a JavaScript-rendered site and its full DOM/computed CSS could not be inspected in this extraction session. This package is a structured reconstruction guide based on the public demo identity and common Apex/ArchitectUI-style Vue admin-dashboard patterns, not a pixel-measured source-code export. Treat sizes, colors, and Tailwind classes as implementation estimates; verify them against browser screenshots before calling the result pixel-accurate.

## 1. Design direction

- **Product type:** Vue-based admin dashboard / internal business application.
- **Visual language:** Dense-but-readable admin UI, clear page hierarchy, light neutral canvas, white content surfaces, compact navigation, accent-color actions, chart/table-centric content.
- **Primary goal:** Help operators scan metrics, navigate modules, filter records, and act on business data.
- **Implementation approach:** Separate shell/layout, navigation, reusable surface components, data visualizations, tables, and form controls.
- **Recommended fidelity workflow:** First reproduce the shell and spacing; then cards and tables; finally charts, iconography, responsive behavior, and interaction states.

## 2. Global tokens (starting estimates — validate visually)

```css
:root {
  --color-primary: #3f6ad8;
  --color-primary-hover: #335bc4;
  --color-success: #3ac47d;
  --color-info: #16aaff;
  --color-warning: #f7b924;
  --color-danger: #d92550;
  --color-text: #495057;
  --color-text-strong: #343a40;
  --color-muted: #6c757d;
  --color-canvas: #f1f4f6;
  --color-surface: #ffffff;
  --color-border: #e9ecef;
  --color-sidebar: #ffffff;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --shadow-card: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03),
                 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03),
                 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05);
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
}
```

These values are a sensible initial palette for a classic Bootstrap-era admin dashboard and **are not confirmed extracted CSS values**.

## 3. Typography

- Use a clean UI sans-serif stack such as `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Page title: approximately 24–28 px, regular/medium weight.
- Section/card title: approximately 14–17 px, medium weight.
- Body and navigation: approximately 13–15 px.
- Supporting labels: approximately 11–13 px, muted color.
- Numeric KPI: approximately 26–34 px, medium weight.
- Prefer tabular numerals for currency, counts, percentages, and table metrics.

## 4. Layout and responsive behavior

- App shell consists of a top header, a vertical sidebar/navigation rail, and a scrollable main content area.
- Main content should use consistent horizontal gutters and a responsive grid.
- Dashboard cards align to a common grid and maintain consistent header/content padding.
- Desktop: persistent sidebar; multi-column KPI/chart grids.
- Tablet: reduced grid columns; sidebar may collapse or become toggleable.
- Mobile: sidebar becomes off-canvas; KPI cards stack; tables become horizontally scrollable or switch to condensed rows.
- Keep navigation and page content independently scrollable only if the target screenshot demonstrates it.

## 5. Component inventory

### Application shell
- `design-app-shell.md`
- `design-top-header.md`
- `design-sidebar-navigation.md`
- `design-sidebar-menu-item.md`
- `design-page-header.md`
- `design-breadcrumbs.md`

### Dashboard and data display
- `design-dashboard-overview.md`
- `design-stat-card.md`
- `design-progress-card.md`
- `design-chart-card.md`
- `design-line-chart.md`
- `design-bar-chart.md`
- `design-donut-chart.md`
- `design-activity-feed.md`
- `design-notification-list.md`
- `design-data-table.md`
- `design-table-toolbar.md`
- `design-pagination.md`
- `design-status-badge.md`
- `design-avatar.md`
- `design-avatar-group.md`

### Forms and actions
- `design-button.md`
- `design-icon-button.md`
- `design-search-input.md`
- `design-text-input.md`
- `design-select.md`
- `design-checkbox-switch.md`
- `design-dropdown-menu.md`
- `design-tabs.md`
- `design-modal-dialog.md`
- `design-toast-alert.md`

### Utility states
- `design-loading-state.md`
- `design-empty-state.md`
- `design-error-state.md`

## 6. Shared implementation rules

1. Build a small set of primitives first: `AppShell`, `Card`, `Button`, `Input`, `Badge`, `Avatar`, `Table`.
2. Keep status meaning consistent: success/positive, warning/attention, danger/destructive, info/neutral notice.
3. Every interactive control needs hover, focus-visible, active, disabled, and (where relevant) loading states.
4. Use semantic HTML and accessible labels. Icon-only controls require an accessible name and tooltip.
5. Use CSS variables for theme tokens so the palette can be tuned globally after screenshot comparison.
6. Charts must have a responsive container, legend/tooltip behavior, readable axes, and empty/loading/error fallbacks.
7. Table columns should have explicit alignment: text left, numeric values right, row actions right.
8. Do not assume exact source framework versions, icon set, chart library, or DOM structure from this spec alone.
9. Tailwind blueprints are illustrative structural mappings; they are not copied source classes.
