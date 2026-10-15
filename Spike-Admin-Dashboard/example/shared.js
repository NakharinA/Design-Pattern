/*
  Spike Admin Dashboard — shared page setup for every example page.

  Load it in <head> right after the Tailwind Play CDN:
    <script src="https://cdn.tailwindcss.com/3.4.16"></script>
    <script src="shared.js"></script>

  It does four things:
  1. Theme tokens — every color from design.md is a CSS variable (RGB triplet so
     Tailwind opacity modifiers like `bg-primary/10` work). Light values come
     from design.md; `*-light` / `*-dark` tints and the whole dark palette are
     PROPOSED, not extracted from the source site.
  2. tailwind.config — maps the tokens to class names (bg-page, bg-surface,
     text-ink, text-muted, border-line, bg-primary, ...). Use these names, never
     stock Tailwind colors, so pages follow the theme automatically.
  3. Light/dark theme — adds `dark` class on <html>. Starts from the saved
     choice, else the OS preference. Any button with [data-theme-toggle] flips it.
  4. Shell behaviour — mobile sidebar drawer ([data-drawer-toggle]) and the cart
     count badge ([data-cart-count]). The cart lives in localStorage so shop,
     product detail and checkout share it.
*/

(function () {
  const tokens = {
    light: {
      page: '246 248 252',          // #F6F8FC
      surface: '255 255 255',       // #FFFFFF
      soft: '242 246 250',          // #F2F6FA
      thead: '248 250 252',         // #F8FAFC  table header
      line: '230 234 240',          // #E6EAF0
      ink: '32 41 56',              // #202938
      muted: '107 114 128',         // #6B7280
      primary: '93 135 255',        // #5D87FF
      'primary-light': '236 242 255',
      'primary-dark': '69 112 234',
      secondary: '73 190 255',      // #49BEFF
      'secondary-light': '232 247 255',
      success: '19 222 185',        // #13DEB9
      'success-light': '230 255 250',
      'success-dark': '10 143 120',
      warning: '255 174 31',        // #FFAE1F
      'warning-light': '254 245 229',
      'warning-dark': '184 117 0',
      danger: '250 137 107',        // #FA896B
      'danger-light': '253 237 232',
      'danger-dark': '201 87 58',
      info: '83 155 255',           // #539BFF
      'info-light': '235 243 254',
      'info-dark': '47 111 214',
    },
    // Proposed dark palette: navy surfaces, same brand blue.
    dark: {
      page: '17 24 39',             // #111827
      surface: '27 36 54',          // #1B2436
      soft: '36 47 69',             // #242F45
      thead: '32 42 62',            // #202A3E
      line: '46 58 82',             // #2E3A52
      ink: '230 234 240',           // #E6EAF0
      muted: '148 163 184',         // #94A3B8
      primary: '93 135 255',
      'primary-light': '37 54 98',  // #253662
      'primary-dark': '124 157 255',// hover goes lighter on dark
      secondary: '73 190 255',
      'secondary-light': '24 55 77',
      success: '19 222 185',
      'success-light': '18 61 58',
      'success-dark': '61 232 200',
      warning: '255 174 31',
      'warning-light': '64 50 22',
      'warning-dark': '255 196 92',
      danger: '250 137 107',
      'danger-light': '70 40 38',
      'danger-dark': '255 160 136',
      info: '83 155 255',
      'info-light': '29 46 77',
      'info-dark': '125 179 255',
    },
  };

  const css = (vars) => Object.entries(vars).map(([k, v]) => `--c-${k}: ${v};`).join(' ');
  const style = document.createElement('style');
  style.textContent =
    `:root { ${css(tokens.light)} color-scheme: light; }\n` +
    `:root.dark { ${css(tokens.dark)} color-scheme: dark; }\n` +
    `.tabular { font-variant-numeric: tabular-nums; }\n` +
    // `hidden` attribute must win over display utilities like `grid` / `flex`.
    `[hidden] { display: none !important; }`;
  document.head.appendChild(style);

  const color = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;
  const scale = (name) => ({ DEFAULT: color(name), light: color(`${name}-light`), dark: color(`${name}-dark`) });

  window.tailwind = window.tailwind || {};
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          page: color('page'),
          surface: color('surface'),
          soft: color('soft'),
          thead: color('thead'),
          line: color('line'),
          ink: color('ink'),
          muted: color('muted'),
          primary: scale('primary'),
          secondary: { DEFAULT: color('secondary'), light: color('secondary-light') },
          success: scale('success'),
          warning: scale('warning'),
          danger: scale('danger'),
          info: scale('info'),
        },
        borderRadius: { card: '12px', control: '8px' },
        boxShadow: { card: '0 2px 10px rgb(20 35 60 / 4%)' },
      },
    },
  };

  // --- Theme -----------------------------------------------------------------
  const KEY = 'spike-theme';
  const read = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const write = (k, v) => { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } };

  const saved = read(KEY);
  const prefersDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', saved ? saved === 'dark' : prefersDark);

  const isDark = () => document.documentElement.classList.contains('dark');
  function labelToggles() {
    document.querySelectorAll('[data-theme-toggle]').forEach((b) =>
      b.setAttribute('aria-label', isDark() ? 'Switch to light theme' : 'Switch to dark theme'));
  }
  // Only an explicit click is saved, so a visitor who never clicks keeps following the OS.
  function setTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    write(KEY, dark ? 'dark' : 'light');
    labelToggles();
  }

  // --- Cart (shared by shop, product detail, checkout) -----------------------
  const CART = 'spike-cart';
  const SAMPLE_CART = [{ id: 1, qty: 1, color: 'Pacific Blue' }, { id: 4, qty: 2, color: 'Sand' }];

  window.cart = {
    get() {
      const raw = read(CART);
      if (raw === null) return SAMPLE_CART.map((i) => ({ ...i }));
      try { return JSON.parse(raw); } catch { return []; }
    },
    set(items) {
      write(CART, JSON.stringify(items));
      window.cart.renderCount();
    },
    add(id, qty = 1, color) {
      const items = window.cart.get();
      const hit = items.find((i) => i.id === id && i.color === color);
      if (hit) hit.qty += qty; else items.push({ id, qty, color });
      window.cart.set(items);
    },
    count() { return window.cart.get().reduce((n, i) => n + i.qty, 0); },
    renderCount() {
      const n = window.cart.count();
      document.querySelectorAll('[data-cart-count]').forEach((el) => {
        el.textContent = n;
        el.classList.toggle('hidden', n === 0);
      });
      document.querySelectorAll('[data-cart-link]').forEach((el) =>
        el.setAttribute('aria-label', `Cart, ${n} item${n === 1 ? '' : 's'}`));
    },
  };

  // --- Wire up shell controls once the DOM exists -----------------------------
  document.addEventListener('DOMContentLoaded', () => {
    labelToggles();
    document.querySelectorAll('[data-theme-toggle]').forEach((b) =>
      b.addEventListener('click', () => setTheme(!isDark())));

    window.cart.renderCount();

    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    const toggle = document.querySelector('[data-drawer-toggle]');
    if (sidebar && backdrop && toggle) {
      const setDrawer = (open) => {
        sidebar.classList.toggle('-translate-x-full', !open);
        backdrop.classList.toggle('hidden', !open);
        toggle.setAttribute('aria-expanded', String(open));
      };
      toggle.addEventListener('click', () => setDrawer(sidebar.classList.contains('-translate-x-full')));
      backdrop.addEventListener('click', () => setDrawer(false));
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setDrawer(false); });
    }
  });
})();
