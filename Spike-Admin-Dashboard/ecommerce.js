/*
  Sample product catalog shared by ecommerce-shop.html, ecommerce-detail.html
  and ecommerce-checkout.html. Kept apart from the markup so pages only render it.

  There are no product photos: `productImage()` draws a tinted tile with an
  inline-SVG shape instead. Replace it with real, licensed images in an app.
*/

const products = [
  { id: 1, name: 'iPhone 13 Pro Max', category: 'Phones', price: 499, oldPrice: 599, rating: 4, reviews: 128, tone: 'primary', shape: 'phone', colors: ['Pacific Blue', 'Graphite', 'Silver'], stock: 12,
    description: 'A 6.7-inch display with ProMotion, a pro camera system and all-day battery life.' },
  { id: 2, name: 'Apple Watch Series 7', category: 'Wearables', price: 399, oldPrice: null, rating: 5, reviews: 86, tone: 'info', shape: 'watch', colors: ['Midnight', 'Starlight'], stock: 7,
    description: 'Larger always-on display, faster charging and the most durable watch case yet.' },
  { id: 3, name: 'MacBook Air M2', category: 'Laptops', price: 1199, oldPrice: 1299, rating: 5, reviews: 214, tone: 'success', shape: 'laptop', colors: ['Starlight', 'Space Gray'], stock: 4,
    description: 'Strikingly thin design, M2 chip, 18-hour battery and a 13.6-inch Liquid Retina display.' },
  { id: 4, name: 'Headphones Pro', category: 'Audio', price: 249, oldPrice: 299, rating: 3, reviews: 52, tone: 'warning', shape: 'headphones', colors: ['Sand', 'Black'], stock: 25,
    description: 'Active noise cancellation, 30-hour battery and a soft memory-foam headband.' },
  { id: 5, name: 'Smart Speaker Mini', category: 'Audio', price: 99, oldPrice: null, rating: 4, reviews: 340, tone: 'danger', shape: 'speaker', colors: ['Coral', 'White'], stock: 0,
    description: 'Room-filling sound in a compact speaker with a built-in voice assistant.' },
  { id: 6, name: 'iPad Air', category: 'Tablets', price: 599, oldPrice: 649, rating: 4, reviews: 97, tone: 'primary', shape: 'tablet', colors: ['Blue', 'Purple', 'Space Gray'], stock: 9,
    description: '10.9-inch display, M1 chip and support for the second-generation pencil.' },
  { id: 7, name: 'Fitness Band 2', category: 'Wearables', price: 79, oldPrice: 99, rating: 3, reviews: 61, tone: 'success', shape: 'watch', colors: ['Mint', 'Black'], stock: 30,
    description: 'Heart-rate, sleep and step tracking with a 14-day battery.' },
  { id: 8, name: 'Galaxy S22', category: 'Phones', price: 699, oldPrice: null, rating: 4, reviews: 143, tone: 'info', shape: 'phone', colors: ['Phantom Black', 'Green'], stock: 15,
    description: 'Bright 6.1-inch display, triple camera and fast wireless charging.' },
];

const findProduct = (id) => products.find((p) => p.id === Number(id));
const money = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 0 });

// Simple line-art shapes, drawn with currentColor so the tile tone sets the color.
const shapes = {
  phone: '<rect x="34" y="14" width="32" height="72" rx="7"/><path d="M45 20h10"/>',
  watch: '<rect x="32" y="30" width="36" height="40" rx="9"/><path d="M40 30l3-16h14l3 16M40 70l3 16h14l3-16"/>',
  laptop: '<rect x="22" y="24" width="56" height="38" rx="4"/><path d="M14 72h72l-4 6H18z"/>',
  headphones: '<path d="M24 64V50a26 26 0 0152 0v14"/><rect x="18" y="56" width="14" height="24" rx="5"/><rect x="68" y="56" width="14" height="24" rx="5"/>',
  speaker: '<rect x="30" y="16" width="40" height="68" rx="10"/><circle cx="50" cy="60" r="12"/><circle cx="50" cy="32" r="5"/>',
  tablet: '<rect x="24" y="16" width="52" height="68" rx="7"/><circle cx="50" cy="76" r="2"/>',
};

// Tile tone classes are written out in full so the Tailwind CDN can see them.
const tones = {
  primary: 'bg-primary-light text-primary',
  info: 'bg-info-light text-info-dark',
  success: 'bg-success-light text-success-dark',
  warning: 'bg-warning-light text-warning-dark',
  danger: 'bg-danger-light text-danger-dark',
};

function productImage(p, extra = '') {
  return `<div class="grid place-items-center ${tones[p.tone]} ${extra}" aria-hidden="true">
    <svg class="h-3/5 w-3/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round">${shapes[p.shape]}</svg>
  </div>`;
}

function stars(rating) {
  return `<span class="inline-flex text-warning" role="img" aria-label="${rating} out of 5 stars"><span aria-hidden="true">${'★'.repeat(rating)}</span><span aria-hidden="true" class="text-line">${'★'.repeat(5 - rating)}</span></span>`;
}
