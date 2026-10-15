# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this repo is

A personal library of UI design patterns collected from websites found on the
internet. Each design is stored as reference material: a written description of
the design, its reusable elements, and screenshots. It is not an application —
there is no build, no package manager, and no tests.

## Directory layout

One folder per design at the root. Everything about that design lives inside it.

```
Design-Pattern/
├── CLAUDE.md
├── README.md                  # index of all designs
└── <Design-Name>/
    ├── README.md              # required: preview picture + short description
    ├── design.md              # design details: colors, typography, spacing, layout
    ├── element/               # one spec per component: design-<component>.md
    ├── example.html           # the whole design as one working HTML page
    └── assets/                # screenshots and images used by the docs
```

`README.md` is the only required file in a design folder. `design.md`,
`element/`, `example.html` and `assets/` are the usual contents; add other files when a design
needs them.

## Conventions

- **Folder names** — `Kebab-Case` with a capital per word, e.g.
  `Dark-Glass-Dashboard`. No spaces.
- **Design README.md** — starts with the design name as `#` heading, then a
  preview image, then a short description (2–4 sentences), then the source URL.
  Template:

  ```markdown
  # <Design Name>

  ![preview](assets/preview.png)

  <Short description: what the design is, what makes it distinctive.>

  **Source:** <url of the website it came from>
  ```

- **Element files** — one file per component, named `design-<component>.md`,
  with the sections: Description & Use Case, Anatomy & Structure, Visual
  Specifications, States & Variants, HTML/Tailwind Blueprint, Implementation
  Notes. `design.md` lists every element file in its Component Index.
- **example.html** — a reference page for people and AI to read and copy from.
  Rules (see `Spike-Admin-Dashboard/example.html`):
  - One self-contained file: Tailwind via the Play CDN with a pinned version
    (`https://cdn.tailwindcss.com/3.4.16`), everything else inline. No build.
  - Register the colors, radius and shadow from `design.md` in
    `tailwind.config` and use those names (`bg-primary`, `text-muted`,
    `rounded-card`) — not stock Tailwind colors.
  - Use every component from `element/`. Wrap each one in
    `<!-- Component: <Name> · element/<file>.md -->` and add
    `data-component="<Name>"`.
  - Dashboard/page layout first, then a "Component gallery" section showing
    primitives and their states (variants, disabled, loading, empty, error).
  - Sample data from the reference site; no external images — use initials
    and inline SVG. Charts as inline SVG, data kept in one `data` object in
    the script.
  - Controls that look interactive must work (select changes data, search
    filters, dismiss dismisses).
- **Images** — keep them inside the design's own `assets/` folder and link them
  with relative paths, so each design folder stays self-contained.
- **Source** — always record where the design came from.

## When adding a new design

1. Create `<Design-Name>/` with at least `README.md`. When importing an
   extracted package, keep its `design.md` and `element/` as-is and rewrite its
   `README.md` to the template above (with a component table grouped by role —
   see `Spike-Admin-Dashboard/README.md`).
2. Build `example.html` from `design.md` and `element/` following the rules
   above, and check it renders in a browser.
3. Add a row for it in the table in the root `README.md`, linking to the folder.

Keep the root `README.md` index in sync whenever a design folder is added,
renamed, or removed.
