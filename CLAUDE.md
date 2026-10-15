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
    ├── example/               # working example pages
    │   ├── index.html         # main page: the whole design in one working page
    │   ├── customers.html     # default page: table-based list
    │   ├── profile-edit.html  # default page: edit-profile form
    │   ├── catalog.html       # default page: product catalog grid
    │   ├── <page>.html        # optional extra pages, same shell
    │   └── shared.js          # theme tokens + shell behaviour for the pages
    └── assets/                # screenshots and images used by the docs
```

`README.md` is the only required file in a design folder. `design.md`,
`element/`, `example/` and `assets/` are the usual contents; add other files when a design
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
- **Example pages** — reference pages for people and AI to read and copy
  from. All of them live in `<Design-Name>/example/`. `index.html` is the main
  page (dashboard/overview); extra pages (profile, contacts, shop, ...) and
  the shared `.js` files sit next to it. Rules (see
  `Spike-Admin-Dashboard/example/`):
  - **Default pages** — every design ships these four, so designs can be
    compared page for page (see `Apex-Vue-Dashboard/example/`):
    - `index.html` — dashboard overview + component gallery (rules below).
    - `customers.html` — table-based page: status tabs with counts, search,
      filter select, sortable columns, row selection with bulk actions,
      pagination, add/edit dialog with validation, delete confirm, loading
      and empty states.
    - `profile-edit.html` — edit-profile form: live preview card, tabs
      (personal info / password & security / notifications), validation,
      unsaved-changes bar with save/discard. Saving updates the signed-in
      name in the top bar of every page.
    - `catalog.html` — product catalog: filter panel (category, price,
      rating, in stock), search, sort, grid/list toggle, removable filter
      chips, pagination, add to cart, empty state.
    Use the design's own components and tokens; content and layout can
    follow the reference site where it has an equivalent page. Older designs
    with a matching page under another name (Spike's `ecommerce-shop.html`
    is its catalog) can keep it until they are next updated.
  - Plain HTML, no build. Each page loads, in `<head>`:
    `https://cdn.tailwindcss.com/3.4.16` (pinned) then `shared.js`. Page-specific
    markup and script stay inline in the page; shared sample data that several
    pages need goes in its own `.js` file (e.g. `ecommerce.js`).
  - `shared.js` owns the theme: every color from `design.md` is a CSS variable
    (`--c-primary`, as an RGB triplet), redefined under `:root.dark`, and mapped
    in `tailwind.config`. Pages use only token classes (`bg-surface`,
    `text-muted`, `border-line`, `bg-primary`, `rounded-card`) — never stock
    Tailwind colors or hex — so light/dark works with no `dark:` classes.
    Values not in `design.md` (tints, the dark palette) are marked PROPOSED.
  - Theme toggle: any `[data-theme-toggle]` button. Default follows the OS;
    only an explicit click is saved.
  - Every page shares the same sidebar + top bar; the sidebar links all pages
    and marks the current one with `aria-current="page"`. When adding a page,
    add its link to the sidebar of every page.
  - Mark components: `<!-- Component: <Name> · element/<file>.md -->` plus
    `data-component="<Name>"`. A piece with no spec file is marked
    `<!-- Component: <Name> (no spec) -->`.
  - `index.html` uses every component from `element/` and ends with a
    "Component gallery" of primitives and states (variants, disabled, loading,
    empty, error).
  - Sample data from the reference site; no external images — use initials and
    inline SVG. Charts as inline SVG with token classes (`stroke-primary`,
    `fill-muted`) and an `sr-only` text summary.
  - Controls that look interactive must work (select changes data, search
    filters, tabs switch, forms submit). Put `relative` on `overflow-x-auto`
    table wrappers so `sr-only` text can't widen the page.
  - Check every page in a browser in light and dark, desktop and narrow width.
- **Images** — keep them inside the design's own `assets/` folder and link them
  with relative paths, so each design folder stays self-contained.
- **Source** — always record where the design came from.

## When adding a new design

1. Create `<Design-Name>/` with at least `README.md`. When importing an
   extracted package, keep its `design.md` and `element/` as-is and rewrite its
   `README.md` to the template above (with a component table grouped by role —
   see `Spike-Admin-Dashboard/README.md`).
2. Build `example/shared.js` and the default pages (`index.html`,
   `customers.html`, `profile-edit.html`, `catalog.html`) from `design.md` and
   `element/` following the rules above, and check them in a browser.
3. Add a row for it in the table in the root `README.md`, linking to the folder.

Keep the root `README.md` index in sync whenever a design folder is added,
renamed, or removed.
