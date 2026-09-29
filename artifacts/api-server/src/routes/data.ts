export type Product = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  compareAtPrice: number | null;
  rating: number;
  reviewCount: number;
  store: string;
  image: string;
  badge: string | null;
  colors: string[];
};
export type Category = {
  id: string;
  name: string;
  itemCount: number;
  accent: string;
  icon: string;
};
export type Store = {
  id: string;
  name: string;
  handle: string;
  rating: number;
  productCount: number;
  image: string;
  verified: boolean;
};
export type OrderItem = {
  id: string;
  name: string;
  qty: number;
  price: number;
  image: string;
};
export type TrackingEvent = {
  label: string;
  timestamp: string;
  completed: boolean;
  active: boolean;
};
export type Order = {
  id: string;
  invoiceNo: string;
  store: string;
  total: number;
  status: string;
  statusLabel: string;
  statusTone: string;
  createdAt: string;
  eta: string;
  trackingNo: string | null;
  items: OrderItem[];
  tracking: TrackingEvent[];
};
export type Notification = {
  id: string;
  title: string;
  message: string;
  type: string;
  createdAt: string;
  isRead: boolean;
};

export const products: Product[] = [
  {
    id: "p-001",
    slug: "linen-overshirt-sand",
    name: "Linen Overshirt",
    description: "Kemeja linen ringan dengan potongan santai untuk hari yang hangat.",
    category: "Fashion",
    price: 349000,
    compareAtPrice: 425000,
    rating: 4.9,
    reviewCount: 128,
    store: "Nara Studio",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
    badge: "Best seller",
    colors: ["#d7c8b0", "#1c1c1b", "#c9a961"],
  },
  {
    id: "p-002",
    slug: "ceramic-mug-atelier",
    name: "Atelier Ceramic Mug",
    description: "Cangkir keramik buatan tangan dengan glasir matte yang hangat.",
    category: "Home",
    price: 189000,
    compareAtPrice: null,
    rating: 4.8,
    reviewCount: 74,
    store: "Studio Kecil",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85",
    badge: "Handmade",
    colors: ["#d7c8b0", "#e8e0d2"],
  },
  {
    id: "p-003",
    slug: "daily-canvas-tote",
    name: "Daily Canvas Tote",
    description: "Tote bag kanvas tebal untuk rutinitas harian yang lebih ringan.",
    category: "Fashion",
    price: 229000,
    compareAtPrice: 279000,
    rating: 4.7,
    reviewCount: 92,
    store: "Lume Goods",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    badge: "New",
    colors: ["#f3eee5", "#b88a63", "#1c1c1b"],
  },
  {
    id: "p-004",
    slug: "botanical-face-serum",
    name: "Botanical Face Serum",
    description: "Serum wajah dengan botanical oils untuk kulit yang terasa tenang.",
    category: "Beauty",
    price: 279000,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 211,
    store: "Aster Lab",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
    badge: "Top rated",
    colors: ["#d8c5ab", "#efe9dc"],
  },
  {
    id: "p-005",
    slug: "minimal-leather-wallet",
    name: "Minimal Leather Wallet",
    description: "Dompet kulit dengan ruang yang cukup tanpa bentuk yang berlebihan.",
    category: "Accessories",
    price: 319000,
    compareAtPrice: 375000,
    rating: 4.8,
    reviewCount: 61,
    store: "Nara Studio",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
    badge: null,
    colors: ["#7a5035", "#1c1c1b"],
  },
  {
    id: "p-006",
    slug: "midnight-cold-brew",
    name: "Midnight Cold Brew",
    description: "Kopi cold brew dengan rasa cokelat gelap dan akhir yang bersih.",
    category: "Food",
    price: 89000,
    compareAtPrice: null,
    rating: 4.9,
    reviewCount: 156,
    store: "Kopi Tepi",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
    badge: "Popular",
    colors: ["#42352f", "#b9936c"],
  },
  {
    id: "p-007",
    slug: "wireless-headphones-sound",
    name: "Sound Wireless Headphones",
    description: "Suara jernih, bantalan lembut, dan desain yang tidak mengganggu.",
    category: "Electronics",
    price: 749000,
    compareAtPrice: 899000,
    rating: 4.6,
    reviewCount: 83,
    store: "Object Room",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    badge: "Deal",
    colors: ["#1c1c1b", "#e8e0d2"],
  },
  {
    id: "p-008",
    slug: "everyday-tee-oat",
    name: "Everyday Tee",
    description: "T-shirt katun combed dengan jahitan rapi dan rasa yang lembut.",
    category: "Fashion",
    price: 159000,
    compareAtPrice: null,
    rating: 4.8,
    reviewCount: 137,
    store: "Nara Studio",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    badge: null,
    colors: ["#e6dfd5", "#1c1c1b", "#d4b47c"],
  },
];

export const categories: Category[] = [
  { id: "fashion", name: "Fashion", itemCount: 240, accent: "#dbc7aa", icon: "shirt" },
  { id: "home", name: "Home & Living", itemCount: 128, accent: "#c8d1c4", icon: "home" },
  { id: "beauty", name: "Beauty", itemCount: 96, accent: "#dfc3bd", icon: "sparkles" },
  { id: "food", name: "Food & Drink", itemCount: 84, accent: "#d9c6a3", icon: "coffee" },
  { id: "electronics", name: "Electronics", itemCount: 61, accent: "#c7cfd3", icon: "headphones" },
];

export const stores: Store[] = [
  {
    id: "s-001",
    name: "Nara Studio",
    handle: "nara-studio",
    rating: 4.9,
    productCount: 42,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    verified: true,
  },
  {
    id: "s-002",
    name: "Studio Kecil",
    handle: "studio-kecil",
    rating: 4.8,
    productCount: 28,
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85",
    verified: true,
  },
  {
    id: "s-003",
    name: "Aster Lab",
    handle: "aster-lab",
    rating: 4.9,
    productCount: 19,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    verified: true,
  },
];

const statusDetails: Record<string, { label: string; tone: string }> = {
  menunggu_bayar: { label: "Menunggu pembayaran", tone: "red" },
  diproses: { label: "Diproses", tone: "yellow" },
  packing: { label: "Sedang dikemas", tone: "orange" },
  dikirim: { label: "Dalam pengiriman", tone: "blue" },
  diterima: { label: "Diterima", tone: "green" },
  selesai: { label: "Selesai", tone: "green-dark" },
  dibatalkan: { label: "Dibatalkan", tone: "gray" },
};

export const orderStatusDetails = statusDetails;

export const orders: Order[] = [
  {
    id: "order-001",
    invoiceNo: "INV-20260928-0081",
    store: "Nara Studio",
    total: 349000,
    status: "packing",
    statusLabel: statusDetails.packing.label,
    statusTone: statusDetails.packing.tone,
    createdAt: "28 Sep 2026, 14:32",
    eta: "30 Sep - 1 Okt 2026",
    trackingNo: null,
    items: [{ id: "p-001", name: "Linen Overshirt", qty: 1, price: 349000, image: products[0].image }],
    tracking: [
      { label: "Pesanan dibuat", timestamp: "28 Sep, 14:32", completed: true, active: false },
      { label: "Pembayaran dikonfirmasi", timestamp: "28 Sep, 14:35", completed: true, active: false },
      { label: "Sedang dikemas", timestamp: "28 Sep, 16:10", completed: false, active: true },
      { label: "Dalam pengiriman", timestamp: "Menunggu", completed: false, active: false },
      { label: "Diterima", timestamp: "Estimasi 30 Sep - 1 Okt", completed: false, active: false },
    ],
  },
  {
    id: "order-002",
    invoiceNo: "INV-20260926-0074",
    store: "Studio Kecil",
    total: 378000,
    status: "dikirim",
    statusLabel: statusDetails.dikirim.label,
    statusTone: statusDetails.dikirim.tone,
    createdAt: "26 Sep 2026, 09:18",
    eta: "29 Sep 2026",
    trackingNo: "JNE-260926-4819",
    items: [{ id: "p-002", name: "Atelier Ceramic Mug", qty: 2, price: 189000, image: products[1].image }],
    tracking: [
      { label: "Pesanan dibuat", timestamp: "26 Sep, 09:18", completed: true, active: false },
      { label: "Pembayaran dikonfirmasi", timestamp: "26 Sep, 09:21", completed: true, active: false },
      { label: "Sedang dikemas", timestamp: "26 Sep, 12:04", completed: true, active: false },
      { label: "Dalam pengiriman", timestamp: "27 Sep, 08:42", completed: false, active: true },
      { label: "Diterima", timestamp: "Estimasi hari ini", completed: false, active: false },
    ],
  },
  {
    id: "order-003",
    invoiceNo: "INV-20260921-0043",
    store: "Aster Lab",
    total: 279000,
    status: "diterima",
    statusLabel: statusDetails.diterima.label,
    statusTone: statusDetails.diterima.tone,
    createdAt: "21 Sep 2026, 18:06",
    eta: "24 Sep 2026",
    trackingNo: "SICEPAT-210926-1066",
    items: [{ id: "p-004", name: "Botanical Face Serum", qty: 1, price: 279000, image: products[3].image }],
    tracking: [
      { label: "Pesanan dibuat", timestamp: "21 Sep, 18:06", completed: true, active: false },
      { label: "Pembayaran dikonfirmasi", timestamp: "21 Sep, 18:10", completed: true, active: false },
      { label: "Sedang dikemas", timestamp: "22 Sep, 09:18", completed: true, active: false },
      { label: "Dalam pengiriman", timestamp: "22 Sep, 15:02", completed: true, active: false },
      { label: "Diterima", timestamp: "24 Sep, 11:37", completed: false, active: true },
    ],
  },
];

export const notifications: Notification[] = [
  {
    id: "notif-001",
    title: "Pesanan sedang dikemas",
    message: "Pesanan #0081 dari Nara Studio sedang disiapkan untuk dikirim.",
    type: "order",
    createdAt: "12 menit lalu",
    isRead: false,
  },
  {
    id: "notif-002",
    title: "Koleksi pilihan untukmu",
    message: "Temukan pilihan baru dari seller lokal yang sedang banyak dicari.",
    type: "promo",
    createdAt: "2 jam lalu",
    isRead: false,
  },
  {
    id: "notif-003",
    title: "Paket sudah sampai",
    message: "Pesananmu dari Aster Lab telah diterima. Bagikan pengalamanmu.",
    type: "success",
    createdAt: "5 hari lalu",
    isRead: true,
  },
];

export function makeTracking(status: string, trackingNo: string | null) {
  const steps = ["Pesanan dibuat", "Pembayaran dikonfirmasi", "Sedang dikemas", "Dalam pengiriman", "Diterima"];
  const activeIndex = status === "menunggu_bayar" ? 0 : status === "diproses" ? 1 : status === "packing" ? 2 : status === "dikirim" ? 3 : 4;
  return steps.map((label, index) => ({
    label,
    timestamp: index < activeIndex ? "Baru saja" : index === activeIndex ? (trackingNo ? `Resi ${trackingNo}` : "Sedang diproses") : "Menunggu",
    completed: index < activeIndex,
    active: index === activeIndex,
  }));
}