# Component: RecentPurchasersAvatars (`element/design-recent-purchasers-avatars.md`)

## 1. Description & Use Case
Shows a compact group of recent purchaser avatars and an overflow count.

## 2. Anatomy & Structure
Section label; avatar images; +8 overflow bubble.

## 3. Visual Specifications
Circular avatars 32–40px; optional 2–4px overlap; border ring matching card surface; overflow bubble neutral background.

## 4. States & Variants
Fallback initials; loading; mobile wrap/scroll; accessible names or decorative alt text as appropriate.

## 5. HTML/Tailwind Blueprint
The snippet is a starting point; wire data, routing, state, and chart behavior in the application rather than leaving demo interactions inert.

```html
<div><p class="mb-3 text-sm font-medium">Recent Purchasers</p><div class="flex items-center -space-x-2">{users.slice(0,4).map(u => <img key={u.id} class="h-9 w-9 rounded-full border-2 border-white object-cover" src={u.avatar} alt={u.name} />)}<span class="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-slate-100 text-xs font-semibold">+8</span></div></div>
```

## Implementation Notes
- Use semantic HTML and accessible names.
- Keep component data separate from markup.
- Treat displayed reference values as sample/demo data.
- The reference page's exact computed CSS is not available from the text extraction; values above are proposed tokens and should be tuned against screenshots.
