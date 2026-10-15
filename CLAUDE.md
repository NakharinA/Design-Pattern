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
    ├── elements/              # reusable pieces (buttons, cards, nav, ...)
    └── assets/                # screenshots and images used by the docs
```

`README.md` is the only required file in a design folder. `design.md`,
`elements/` and `assets/` are the usual contents; add other files when a design
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

- **Images** — keep them inside the design's own `assets/` folder and link them
  with relative paths, so each design folder stays self-contained.
- **Source** — always record where the design came from.

## When adding a new design

1. Create `<Design-Name>/` with at least `README.md`.
2. Add a row for it in the table in the root `README.md`, linking to the folder.

Keep the root `README.md` index in sync whenever a design folder is added,
renamed, or removed.
