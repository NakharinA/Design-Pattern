/*
  Apex Vue Dashboard — shared page setup for every example page.

  Load it in <head> right after the Tailwind Play CDN:
    <script src="https://cdn.tailwindcss.com/3.4.16"></script>
    <script src="shared.js"></script>

  It does four things:
  1. Theme tokens — every color from design.md is a CSS variable (RGB triplet so
     Tailwind opacity modifiers like `bg-primary/10` work). Light values come
     from design.md (themselves estimates — see its evidence note); the
     `*-light` / `*-dark` tints, `overlay`, and the whole dark palette are
     PROPOSED, not extracted from the source site.
  2. tailwind.config — maps the tokens to class names (bg-canvas, bg-surface,
     text-ink, text-strong, text-muted, border-line, bg-primary, ...) plus the
     radius and shadow tokens. Use these names, never stock Tailwind colors, so
     pages follow the theme automatically.
  3. Light/dark theme — `dark` class on <html>; starts from the saved choice,
     else the OS preference; any [data-theme-toggle] button flips it.
  4. Shell behaviour shared by every page (sidebar + top bar markup is copied
     into each page; the behaviour lives here):
     - mobile drawer ([data-drawer-toggle]), desktop collapse (#sidebar-collapse),
       expandable nav group (#nav-elements), header shadow on scroll;
     - popovers / DropdownMenu: any button with aria-haspopup + aria-controls
       toggles that panel (Escape, outside click, arrow keys in menus);
     - NotificationList in the top bar (sample notifications below);
     - ToastAlert: `apex.toast(message, type)`, plus [data-toast="…"] buttons
       and [data-dismiss] close buttons;
     - signed-in profile: saved by profile-edit.html in localStorage and shown
       wherever [data-profile-name] / [data-profile-role] / [data-profile-initials] sit;
     - "/" focuses #global-search.
     Pages read `window.apex` for toast(), esc() and profile().
*/

(function () {
  const tokens = {
    light: {
      canvas: '241 244 246',        // #F1F4F6  --color-canvas
      surface: '255 255 255',       // #FFFFFF  --color-surface
      sidebar: '255 255 255',       // #FFFFFF  --color-sidebar
      line: '233 236 239',          // #E9ECEF  --color-border
      ink: '73 80 87',              // #495057  --color-text
      strong: '52 58 64',           // #343A40  --color-text-strong
      muted: '108 117 125',         // #6C757D  --color-muted
      overlay: '52 58 64',          // PROPOSED backdrop behind drawers and dialogs
      primary: '63 106 216',        // #3F6AD8  --color-primary
      'primary-hover': '51 91 196', // #335BC4  --color-primary-hover
      'primary-light': '232 238 251',
      success: '58 196 125',        // #3AC47D
      'success-light': '227 246 236',
      'success-dark': '29 122 74',
      info: '22 170 255',           // #16AAFF
      'info-light': '224 243 255',
      'info-dark': '10 106 166',
      warning: '247 185 36',        // #F7B924
      'warning-light': '254 245 221',
      'warning-dark': '138 97 0',
      danger: '217 37 80',          // #D92550
      'danger-light': '251 228 234',
      'danger-dark': '176 28 64',
    },
    // Proposed dark palette: slate surfaces, brand blue lifted for contrast.
    dark: {
      canvas: '20 24 33',           // #141821
      surface: '29 34 46',          // #1D222E
      sidebar: '29 34 46',
      line: '48 55 71',             // #303747
      ink: '214 219 228',           // #D6DBE4
      strong: '241 243 246',        // #F1F3F6
      muted: '154 163 178',         // #9AA3B2
      overlay: '0 0 0',
      primary: '92 128 230',        // #5C80E6
      'primary-hover': '120 150 236',
      'primary-light': '38 51 88',
      success: '58 196 125',
      'success-light': '22 58 44',
      'success-dark': '110 220 160',
      info: '22 170 255',
      'info-light': '18 50 74',
      'info-dark': '110 200 255',
      warning: '247 185 36',
      'warning-light': '66 52 20',
      'warning-dark': '250 205 100',
      danger: '235 80 115',
      'danger-light': '70 28 40',
      'danger-dark': '255 140 165',
    },
  };

  const css = (vars) => Object.entries(vars).map(([k, v]) => `--c-${k}: ${v};`).join(' ');
  const style = document.createElement('style');
  style.textContent =
    `:root { ${css(tokens.light)} color-scheme: light; }\n` +
    `:root.dark { ${css(tokens.dark)} color-scheme: dark; }\n` +
    `.tabular { font-variant-numeric: tabular-nums; }\n` +
    `dialog::backdrop { background: rgb(var(--c-overlay) / .5); }\n` +
    // SidebarNavigation collapsed (desktop): icon-only rail
    `#sidebar.is-collapsed { width: 76px; }\n` +
    `#sidebar.is-collapsed :is(.nav-label, .nav-section, .nav-badge, .nav-children) { display: none; }\n` +
    `#sidebar.is-collapsed .nav-item { justify-content: center; padding-left: 0; padding-right: 0; }\n` +
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
        fontFamily: {
          sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        },
        colors: {
          canvas: color('canvas'),
          surface: color('surface'),
          sidebar: color('sidebar'),
          line: color('line'),
          ink: color('ink'),
          strong: color('strong'),
          muted: color('muted'),
          overlay: color('overlay'),
          primary: { DEFAULT: color('primary'), hover: color('primary-hover'), light: color('primary-light') },
          success: scale('success'),
          info: scale('info'),
          warning: scale('warning'),
          danger: scale('danger'),
        },
        // design.md: --radius-sm 4px, --radius-md 6px, --radius-lg 8px
        borderRadius: { tag: '4px', control: '6px', card: '8px' },
        boxShadow: {
          card: '0 0.46875rem 2.1875rem rgb(4 9 20 / .03), 0 0.9375rem 1.40625rem rgb(4 9 20 / .03), 0 0.25rem 0.53125rem rgb(4 9 20 / .05)',
        },
      },
    },
  };

  // --- Theme -----------------------------------------------------------------
  const KEY = 'apex-theme';
  const read = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
  const write = (k, v) => { try { localStorage.setItem(k, v); } catch { /* storage blocked */ } };

  const saved = read(KEY);
  const prefersDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', saved ? saved === 'dark' : prefersDark);

  const isDark = () => document.documentElement.classList.contains('dark');
  function labelToggles() {
    document.querySelectorAll('[data-theme-toggle]').forEach((b) => {
      const label = isDark() ? 'Switch to light theme' : 'Switch to dark theme';
      b.setAttribute('aria-label', label);
      b.title = label;
    });
  }
  // Only an explicit click is saved, so a visitor who never clicks keeps following the OS.
  function setTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    write(KEY, dark ? 'dark' : 'light');
    labelToggles();
  }

  // --- Shared helpers (window.apex) ------------------------------------------
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // ToastAlert — bottom-right stack. Errors stay until dismissed; others fade after 5 s.
  const TOAST_STYLE = {
    success: ['border-success', 'text-success-dark', '✓'],
    error:   ['border-danger', 'text-danger-dark', '!'],
    warning: ['border-warning', 'text-warning-dark', '▲'],
    info:    ['border-info', 'text-info-dark', 'i'],
  };
  function toast(message, type = 'success') {
    let stack = document.getElementById('toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.id = 'toast-stack';
      stack.dataset.component = 'ToastAlert';
      stack.setAttribute('aria-live', 'polite');
      stack.className = 'pointer-events-none fixed bottom-4 right-4 z-50 flex w-[min(22rem,calc(100vw-2rem))] flex-col gap-2';
      document.body.append(stack);
    }
    const [border, text, icon] = TOAST_STYLE[type] || TOAST_STYLE.info;
    const node = document.createElement('div');
    node.setAttribute('role', type === 'error' ? 'alert' : 'status');
    node.className = `pointer-events-auto flex items-start gap-3 rounded-control border-l-4 ${border} bg-surface p-3 text-sm text-ink shadow-card`;
    node.innerHTML = `<span class="font-bold ${text}" aria-hidden="true">${icon}</span><p class="flex-1">${esc(message)}</p>
      <button type="button" aria-label="Dismiss" class="grid h-6 w-6 place-items-center rounded-tag text-muted hover:bg-canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">✕</button>`;
    node.querySelector('button').addEventListener('click', () => node.remove());
    stack.append(node);
    if (type !== 'error') setTimeout(() => node.remove(), 5000);
  }

  // Signed-in profile. profile-edit.html saves it; every page's top bar shows it.
  const PROFILE = 'apex-profile';
  const DEFAULT_PROFILE = {
    firstName: 'Alina', lastName: 'Reyes', email: 'alina.reyes@example.test', phone: '+1 415 555 0142',
    role: 'Administrator', country: 'United States', timezone: 'America/Los_Angeles',
    bio: 'Runs operations for the Apex demo store. Likes clean dashboards and fast checkouts.',
    tone: 'primary',
    notify: { weekly: true, orders: true, stock: false, mentions: true },
  };
  function profile() {
    try { return { ...DEFAULT_PROFILE, ...JSON.parse(read(PROFILE) || '{}') }; } catch { return { ...DEFAULT_PROFILE }; }
  }
  const AVATAR_TONE = {
    primary: 'bg-primary text-white', success: 'bg-success text-white', info: 'bg-info text-white',
    warning: 'bg-warning text-strong', danger: 'bg-danger text-white',
  };
  function renderProfile() {
    const p = profile();
    const initials = `${p.firstName[0] || ''}${p.lastName[0] || ''}`.toUpperCase();
    document.querySelectorAll('[data-profile-name]').forEach((el) => (el.textContent = `${p.firstName} ${p.lastName}`.trim()));
    document.querySelectorAll('[data-profile-role]').forEach((el) => (el.textContent = p.role));
    document.querySelectorAll('[data-profile-initials]').forEach((el) => {
      el.firstChild.nodeValue = initials;
      Object.values(AVATAR_TONE).join(' ').split(' ').forEach((c) => el.classList.remove(c));
      el.classList.add(...(AVATAR_TONE[p.tone] || AVATAR_TONE.primary).split(' '));
    });
  }
  function saveProfile(next) {
    write(PROFILE, JSON.stringify({ ...profile(), ...next }));
    renderProfile();
  }

  // NotificationList sample data (top bar on every page).
  const notifications = [
    { id: 1, title: 'New order #1085', body: 'Ella Lucas placed an order for $1,240.50.', when: '2 min ago', unread: true },
    { id: 2, title: 'Low stock', body: '3 products have fewer than 10 units left.', when: '1 h ago', unread: true },
    { id: 3, title: 'Payment failed', body: 'Order #1079 — card declined. The customer was emailed.', when: '1 h ago', unread: true },
    { id: 4, title: 'Weekly report ready', body: 'Your analytics summary for Oct 5 – Oct 11 is available.', when: 'Yesterday', unread: false },
  ];
  function renderNotifications() {
    const list = document.getElementById('notif-list');
    if (!list) return;
    const unread = notifications.filter((n) => n.unread).length;
    const dot = document.getElementById('notif-dot');
    dot.textContent = unread;
    dot.hidden = unread === 0;
    document.getElementById('notif-label').textContent = unread ? `Notifications, ${unread} unread` : 'Notifications';
    document.getElementById('notif-read-all').disabled = unread === 0;
    list.innerHTML = notifications.length
      ? notifications.map((n) => `<li><button type="button" data-notif="${n.id}" class="flex w-full gap-3 px-4 py-3 text-left hover:bg-canvas focus:bg-canvas focus:outline-none ${n.unread ? 'bg-primary-light/50' : ''}">
          <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full ${n.unread ? 'bg-primary' : 'bg-transparent'}"></span>
          <span class="min-w-0"><span class="block ${n.unread ? 'font-semibold text-strong' : 'font-medium'}">${esc(n.title)}${n.unread ? '<span class="sr-only"> (unread)</span>' : ''}</span>
          <span class="block text-muted">${esc(n.body)}</span><span class="mt-0.5 block text-xs text-muted">${esc(n.when)}</span></span></button></li>`).join('')
      : '<li class="p-6 text-center text-muted">You’re all caught up.</li>';
  }

  // Popover / DropdownMenu: Escape, outside click, arrow keys between menu items.
  function popover(trigger, panel) {
    const isMenu = panel.getAttribute('role') === 'menu';
    const items = () => [...panel.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')];
    const set = (open) => {
      panel.hidden = !open;
      trigger.setAttribute('aria-expanded', String(open));
      if (open && isMenu) items()[0]?.focus();
    };
    trigger.addEventListener('click', (e) => { e.stopPropagation(); set(panel.hidden); });
    panel.addEventListener('click', (e) => { if (isMenu && e.target.closest('[role="menuitem"]:not([aria-disabled="true"])')) set(false); });
    panel.addEventListener('keydown', (e) => {
      if (!isMenu || !['ArrowDown', 'ArrowUp'].includes(e.key)) return;
      e.preventDefault();
      const list = items(), i = list.indexOf(document.activeElement);
      list[(i + (e.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length].focus();
    });
    document.addEventListener('click', (e) => { if (!panel.hidden && !panel.contains(e.target)) set(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { set(false); trigger.focus(); } });
  }

  window.apex = { toast, esc, profile, saveProfile, popover };

  // --- Wire up shell controls once the DOM exists -----------------------------
  document.addEventListener('DOMContentLoaded', () => {
    labelToggles();
    renderProfile();
    renderNotifications();
    document.querySelectorAll('[data-theme-toggle]').forEach((b) =>
      b.addEventListener('click', () => setTheme(!isDark())));

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

    // Desktop collapse: the collapse button hides with the labels, so the brand mark re-expands.
    const collapseBtn = document.getElementById('sidebar-collapse');
    const brand = document.getElementById('sidebar-brand');
    if (sidebar && collapseBtn && brand) {
      const setCollapsed = (c) => {
        sidebar.classList.toggle('is-collapsed', c);
        collapseBtn.setAttribute('aria-expanded', String(!c));
        brand.tabIndex = c ? 0 : -1;
        brand.setAttribute('aria-hidden', String(!c));
      };
      collapseBtn.addEventListener('click', () => setCollapsed(true));
      brand.addEventListener('click', () => sidebar.classList.contains('is-collapsed') && setCollapsed(false));
      brand.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); brand.click(); } });
    }

    const navGroup = document.getElementById('nav-elements');
    if (navGroup) {
      navGroup.addEventListener('click', () => {
        const open = navGroup.getAttribute('aria-expanded') !== 'true';
        navGroup.setAttribute('aria-expanded', String(open));
        document.getElementById('nav-elements-children').hidden = !open;
        navGroup.querySelector('svg:last-child').classList.toggle('rotate-90', open);
      });
    }

    const header = document.getElementById('top-header');
    if (header) addEventListener('scroll', () => header.classList.toggle('shadow-card', scrollY > 4), { passive: true });

    // Every popover trigger: aria-haspopup + aria-controls.
    document.querySelectorAll('[aria-haspopup][aria-controls]').forEach((t) => {
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) popover(t, panel);
    });

    // NotificationList: click marks one read; "Mark all as read".
    document.getElementById('notif-list')?.addEventListener('click', (e) => {
      const b = e.target.closest('[data-notif]');
      if (!b) return;
      notifications.find((n) => n.id === Number(b.dataset.notif)).unread = false;
      renderNotifications();
    });
    document.getElementById('notif-read-all')?.addEventListener('click', () => {
      notifications.forEach((n) => (n.unread = false));
      renderNotifications();
    });

    // [data-toast] buttons and [data-dismiss] close buttons, on any page.
    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-toast]');
      if (t && t.getAttribute('aria-disabled') !== 'true') toast(t.dataset.toast, t.dataset.toastType || 'info');
      const d = e.target.closest('[data-dismiss]');
      if (d) d.parentElement.remove();
    });

    // "/" jumps to the top-bar search.
    document.addEventListener('keydown', (e) => {
      const search = document.getElementById('global-search');
      if (e.key === '/' && search && !e.target.closest('input, textarea, select')) { e.preventDefault(); search.focus(); }
    });
  });
})();
