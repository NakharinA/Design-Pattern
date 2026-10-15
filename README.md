# Design Pattern Library

A personal collection of UI design patterns gathered from websites around the
internet, kept as reference for future projects.

## Structure

Each design has its own folder:

```
<Design-Name>/
├── README.md     # preview picture + short description
├── design.md     # design details: colors, typography, spacing, layout
├── element/      # one spec per component: design-<component>.md
├── example/      # working example pages — open index.html in a browser
│   ├── index.html    # main page (dashboard / overview)
│   ├── *.html        # optional extra pages (profile, shop, ...)
│   └── shared.js     # theme + setup shared by the pages
└── assets/       # screenshots and images
```

Open a design's `README.md` for a quick look, then `example/index.html` to see
it working, and `design.md` and `element/` for the details.

## Designs

| Design | Description | Source |
|---|---|---|
| [Spike Admin Dashboard](Spike-Admin-Dashboard/) | Light eCommerce admin dashboard — blue primary, KPI cards, charts, tables, sidebar layout | [spike-nuxtjs-pro](https://spike-nuxtjs-pro-main.netlify.app/dashboards/dashboard1) |
| [Apex Vue Dashboard](Apex-Vue-Dashboard/) | Classic Bootstrap-style Vue admin — royal-blue primary, grey canvas, KPI cards, line/bar/donut charts, filterable orders table | [apex-vue](https://demo.dashboardpack.com/apex-vue/) |
