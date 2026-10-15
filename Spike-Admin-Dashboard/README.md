# Spike Admin Dashboard

![preview](assets/preview.png)

A light, clean eCommerce admin dashboard in the style of the Spike Nuxt Pro
template. Soft blue primary (`#5D87FF`) on a pale `#F6F8FC` canvas, white
12 px-radius cards with subtle borders, and a dense grid of KPI cards, charts,
tables and review widgets beside a collapsible sidebar.

**Source:** https://spike-nuxtjs-pro-main.netlify.app/dashboards/dashboard1

> Token values in `design.md` are proposed from the rendered page text, not
> measured CSS — check them against a screenshot before relying on exact pixels.

## Contents

- [`design.md`](design.md) — color, typography, spacing, radius and layout
  tokens, plus shared implementation rules.
- [`element/`](element/) — one spec per component, each with anatomy, visual
  specs, states and an HTML/Tailwind blueprint.
- [`example.html`](example.html) — the whole dashboard built from those specs
  in one plain HTML file (Tailwind via CDN), plus a gallery of primitives and
  states. Open it in a browser. Each component is marked with
  `data-component="<Name>"` and a comment naming its spec file.

### Components

| Group | Components |
|---|---|
| Page | [DashboardPage](element/design-dashboard-page.md) |
| Layout | [AppSidebar](element/design-sidebar.md), [AppTopbar](element/design-topbar.md) |
| Dashboard widgets | [DashboardGreetingCard](element/design-dashboard-greeting-card.md), [DashboardWelcomeNotice](element/design-dashboard-welcome-notice.md), [OrderStatusSummary](element/design-order-status-summary.md), [WeeklyOrderUpdatesCard](element/design-weekly-order-updates-card.md), [PaymentsKpiCard](element/design-payments-kpi-card.md), [ProductsKpiCard](element/design-products-kpi-card.md), [CustomersKpiCard](element/design-customers-kpi-card.md), [ProfitInsightCard](element/design-profit-insight-card.md), [LatestDealCard](element/design-latest-deal-card.md), [RecentPurchasersAvatars](element/design-recent-purchasers-avatars.md), [CustomerTrendChart](element/design-customer-trend-chart.md), [RecentProductsTable](element/design-recent-products-table.md), [VisitorLocationCard](element/design-visitor-location-card.md), [LatestReviewsSection](element/design-latest-reviews-section.md) |
| Building blocks | [DashboardCard](element/design-dashboard-card.md), [ChartCard](element/design-chart-card.md), [MetricValue](element/design-metric-value.md), [TrendIndicator](element/design-trend-indicator.md), [StatusBadge](element/design-status-badge.md), [PeriodSelect](element/design-period-select.md), [AvatarGroup](element/design-avatar-group.md), [ProductIdentityCell](element/design-product-identity-cell.md), [CustomerIdentityCell](element/design-customer-identity-cell.md), [RatingDisplay](element/design-rating-display.md), [SearchField](element/design-search-field.md) |
| States | [EmptyState](element/design-empty-state.md), [LoadingSkeleton](element/design-loading-skeleton.md), [ErrorState](element/design-error-state.md) |
| Primitives | [Button](element/design-button.md), [IconButton](element/design-icon-button.md), [DataTable](element/design-table.md), [TextInput](element/design-input.md), [Select](element/design-select.md) |
