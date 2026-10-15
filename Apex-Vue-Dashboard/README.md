# Apex Vue Dashboard

![preview](assets/preview.png)

A classic Bootstrap-era Vue admin dashboard in the Apex / ArchitectUI style.
Royal-blue primary (`#3F6AD8`) on a cool grey `#F1F4F6` canvas, white
8 px-radius cards lifted by a soft layered shadow, and a dense but readable
layout of KPI cards, line/bar/donut charts, an activity feed and a filterable
data table beside a white, collapsible sidebar.

**Source:** https://demo.dashboardpack.com/apex-vue/

> The live demo is JavaScript-rendered and its DOM/computed CSS were not
> inspected. Token values in `design.md` are estimates for a Bootstrap-style
> admin theme, not measured CSS — check them against a screenshot before
> relying on exact pixels.

## Contents

- [`design.md`](design.md) — color, radius, shadow, spacing and type tokens,
  layout and responsive rules, and shared implementation rules.
- [`element/`](element/) — one spec per component, each with anatomy, visual
  specs, states and an HTML/Tailwind blueprint.
- [`example/index.html`](example/index.html) — the whole dashboard built from those specs
  in one plain HTML page (Tailwind via CDN), plus a gallery of primitives and
  states. Open it in a browser. Each component is marked with
  `data-component="<Name>"` and a comment naming its spec file.
- [`example/customers.html`](example/customers.html) — table page: status
  tabs, search, country filter, sorting, bulk actions, add/edit dialog.
- [`example/profile-edit.html`](example/profile-edit.html) — edit-profile form
  with tabs, validation and save/discard; the saved name shows in every
  page's top bar.
- [`example/catalog.html`](example/catalog.html) — product catalog with
  filters, sort, grid/list view, wishlist and cart.
- [`example/shared.js`](example/shared.js) — theme tokens as CSS variables,
  `tailwind.config`, light/dark toggle (dark palette is proposed) and the
  shell behaviour every page shares (sidebar, popovers, notifications,
  toasts, saved profile).

### Components

| Group | Components |
|---|---|
| Page | [DashboardOverview](element/design-dashboard-overview.md) |
| Application shell | [AppShell](element/design-app-shell.md), [TopHeader](element/design-top-header.md), [SidebarNavigation](element/design-sidebar-navigation.md), [SidebarMenuItem](element/design-sidebar-menu-item.md), [PageHeader](element/design-page-header.md), [Breadcrumbs](element/design-breadcrumbs.md) |
| Metrics & charts | [StatCard](element/design-stat-card.md), [ProgressCard](element/design-progress-card.md), [ChartCard](element/design-chart-card.md), [LineChart](element/design-line-chart.md), [BarChart](element/design-bar-chart.md), [DonutChart](element/design-donut-chart.md) |
| Lists & tables | [ActivityFeed](element/design-activity-feed.md), [NotificationList](element/design-notification-list.md), [DataTable](element/design-data-table.md), [TableToolbar](element/design-table-toolbar.md), [Pagination](element/design-pagination.md), [StatusBadge](element/design-status-badge.md), [Avatar](element/design-avatar.md), [AvatarGroup](element/design-avatar-group.md) |
| Forms & actions | [Button](element/design-button.md), [IconButton](element/design-icon-button.md), [SearchInput](element/design-search-input.md), [TextInput](element/design-text-input.md), [Select](element/design-select.md), [CheckboxSwitch](element/design-checkbox-switch.md), [DropdownMenu](element/design-dropdown-menu.md), [Tabs](element/design-tabs.md), [ModalDialog](element/design-modal-dialog.md), [ToastAlert](element/design-toast-alert.md) |
| States | [LoadingState](element/design-loading-state.md), [EmptyState](element/design-empty-state.md), [ErrorState](element/design-error-state.md) |
