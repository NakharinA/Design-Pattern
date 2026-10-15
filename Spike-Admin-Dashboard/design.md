# Design System — Spike-Style Admin Dashboard

**Reference:** https://spike-nuxtjs-pro-main.netlify.app/dashboards/dashboard1  
**Purpose:** Independent implementation specification for a dashboard inspired by the reference page. Use original code and assets with appropriate licenses.

## Scope and confidence

The reference is JavaScript-rendered and its raw page content does not expose a complete DOM or computed CSS. The dashboard content below is based on the publicly accessible rendered-page text and prior component inventory. Values marked **proposed** are implementation starting points, not measured source CSS. Confirm exact geometry, chart type, colors, and widget ordering against a browser screenshot before claiming pixel accuracy.

## Global design tokens

### Colors

| Token | Proposed value | Usage |
|---|---|---|
| `--color-primary` | `#5D87FF` | Primary action, selected navigation, chart series |
| `--color-secondary` | `#49BEFF` | Secondary chart series and accents |
| `--color-page` | `#F6F8FC` | Application canvas |
| `--color-surface` | `#FFFFFF` | Cards, tables, menus |
| `--color-text` | `#202938` | Headings and primary text |
| `--color-text-muted` | `#6B7280` | Helper text, labels, secondary metadata |
| `--color-border` | `#E6EAF0` | Card borders, dividers, table rules |
| `--color-success` | `#13DEB9` | Positive trend / success state |
| `--color-warning` | `#FFAE1F` | Pending / warning state |
| `--color-danger` | `#FA896B` | Error / cancellation / negative trend |
| `--color-info` | `#539BFF` | Informational status |
| `--color-neutral-soft` | `#F2F6FA` | Muted backgrounds and hover surfaces |

Semantic colors must never be the only way to convey status; pair them with text, icons, or other cues.

### Typography

Use the reference's actual font only after browser inspection. Until verified, use a system UI sans-serif stack.

| Role | Proposed size | Weight | Line height |
|---|---:|---:|---:|
| H1 / page title | 26–30 px | 600–700 | 1.2 |
| H2 / major section title | 20–24 px | 600 | 1.3 |
| H3 / card title | 16–18 px | 600 | 1.35 |
| KPI value | 28–34 px | 600–700 | 1.1 |
| Body / table cell | 13–14 px | 400 | 1.5 |
| Secondary label | 12–13 px | 400–500 | 1.4 |
| Button / form label | 13–14 px | 500–600 | 1.2 |

### Spacing

Use a 4 px base scale.

| Token | Value |
|---|---:|
| `space-1` | 4 px |
| `space-2` | 8 px |
| `space-3` | 12 px |
| `space-4` | 16 px |
| `space-5` | 20 px |
| `space-6` | 24 px |
| `space-8` | 32 px |
| `space-10` | 40 px |
| `space-12` | 48 px |

Proposed layout defaults: desktop page gutter 24 px; mobile gutter 16 px; card padding 20–24 px desktop / 16 px mobile; grid gap 20–24 px desktop / 12–16 px mobile.

### Radius, border, elevation

- Card radius: 12 px.
- Input/button radius: 8 px.
- Avatar: 50% / circle.
- Default border: 1 px solid `var(--color-border)`.
- Proposed card shadow: `0 2px 10px rgb(20 35 60 / 4%)`.
- Prefer subtle borders and restrained shadows; avoid layering unnecessary cards inside cards.

### Layout and breakpoints

- Desktop ≥1200 px: sidebar and multi-column dashboard grid.
- Tablet 768–1199 px: reduced grid columns and/or collapsed sidebar.
- Mobile <768 px: navigation drawer, stacked cards, tables adapted to narrow screens.
- Proposed sidebar: 250–270 px expanded; 72–80 px collapsed.
- Proposed app bar: 64–72 px tall.
- Keep sidebar/content scrolling intentional and prevent horizontal body overflow.

## Component Index

Each path below is a separate component specification file.

- `element/design-dashboard-page.md`
- `element/design-dashboard-greeting-card.md`
- `element/design-order-status-summary.md`
- `element/design-weekly-order-updates-card.md`
- `element/design-payments-kpi-card.md`
- `element/design-products-kpi-card.md`
- `element/design-customers-kpi-card.md`
- `element/design-profit-insight-card.md`
- `element/design-latest-deal-card.md`
- `element/design-recent-purchasers-avatars.md`
- `element/design-customer-trend-chart.md`
- `element/design-recent-products-table.md`
- `element/design-visitor-location-card.md`
- `element/design-latest-reviews-section.md`
- `element/design-dashboard-welcome-notice.md`
- `element/design-dashboard-card.md`
- `element/design-metric-value.md`
- `element/design-trend-indicator.md`
- `element/design-status-badge.md`
- `element/design-period-select.md`
- `element/design-avatar-group.md`
- `element/design-product-identity-cell.md`
- `element/design-customer-identity-cell.md`
- `element/design-rating-display.md`
- `element/design-search-field.md`
- `element/design-chart-card.md`
- `element/design-empty-state.md`
- `element/design-loading-skeleton.md`
- `element/design-error-state.md`
- `element/design-button.md`
- `element/design-icon-button.md`
- `element/design-table.md`
- `element/design-input.md`
- `element/design-select.md`
- `element/design-sidebar.md`
- `element/design-topbar.md`

## Shared implementation rules

- Keep data separate from presentation.
- Use real behavior for all interactive controls; don't ship decorative controls that look functional.
- Implement loading, empty, error, hover, focus, and disabled states where applicable.
- All icon-only buttons need accessible names.
- Tables and charts need a mobile strategy.
- Charts should provide accessible summaries for key information.
- Use original or properly licensed images, icons, fonts, and logos.
- Do not copy proprietary source code or assume the Pro demo's assets are included in the free edition.
