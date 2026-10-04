// Product data — single source of truth for all menu items.
// Images use external URLs from the Stitch design; replace with local /public/images/ paths
// once the business owner supplies actual product photographs.

export type ProductCategory =
  | "all"
  | "cakes"
  | "cookies"
  | "pastries"
  | "custom";

export interface ProductSize {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  image: string;
  imageAlt: string;
  sizes: ProductSize[];
  basePrice: number;
  priceLabel: string; // e.g. "/ 0.5kg" or "Box of 6"
  available: boolean;
  featured: boolean;
  bestseller: boolean;
  vegetarian: true; // All products are 100% veg — hardcoded
  tags: string[];
  badge?: string;
  badgeVariant?: "caramel" | "brown" | "warm" | "amber";
  customizationAvailable: boolean;
  whatsappMessage: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "belgian-chocolate-truffle-cake",
    name: "Belgian Chocolate Truffle Cake",
    shortDescription:
      "Rich dark chocolate sponge layered with velvety Belgian ganache, mirror glaze & gold flakes.",
    description:
      "Our signature Belgian Chocolate Truffle Cake is crafted from the finest dark Belgian couverture chocolate. The airy chocolate sponge is soaked with a cocoa syrup, then layered generously with smooth truffle ganache made from 70% cacao couverture. Finished with a mirror-gloss chocolate glaze and delicate edible gold flakes, this cake is a celebration of chocolate in its purest form. 100% eggless.",
    category: "cakes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-sEIs1GRUf1AnTb3i4dqA9cFn9XBFYxKWk7LZwGkx8NArVHKRtfm_tzEmvnD8ZL5C3ql7M3hfAhhcr-nRQXK05piFoN1HwrL7hxI_dqvayjdse0Z6w0TeSQnlxYxPDsRd_huKoUH5iZnjZR_WxaNZPaC9xS_s7-4Fbckoe9ZjaDjJkO5W02gwWxhexE_-uXGiSU4G3yYt4Xi5iXTiHqdarDN-SDpkDeNDM88SB-FUX21AYeH76azKqw",
    imageAlt: "Belgian Chocolate Truffle Cake slice with ganache glaze",
    sizes: [
      { label: "0.5 kg", price: 699 },
      { label: "1 kg", price: 1299 },
      { label: "1.5 kg", price: 1899 },
      { label: "2 kg", price: 2499 },
    ],
    basePrice: 699,
    priceLabel: "/ 0.5kg",
    available: true,
    featured: true,
    bestseller: true,
    vegetarian: true,
    tags: ["chocolate", "truffle", "ganache", "belgian", "signature"],
    badge: "Bestseller",
    badgeVariant: "caramel",
    customizationAvailable: true,
    whatsappMessage:
      "Hi Brown Town! I want to order the Belgian Chocolate Truffle Cake. Please share size and availability.",
  },
  {
    id: "2",
    slug: "grand-floral-celebration-cake",
    name: "Grand Floral Celebration Cake",
    shortDescription:
      "Bespoke multi-tier masterpiece with handcrafted sugar roses, gold foil accents, and delicate frosting.",
    description:
      "Make any milestone unforgettable with our Grand Floral Celebration Cake. Each cake is hand-sculpted to your specifications by our decorating artists. Choose from vanilla bean, chocolate, or strawberry sponge, then let us create hand-modelled sugar roses, gold foil accents, and luxurious textured frosting that will be the centerpiece of your event. Perfect for weddings, anniversaries, engagements, and grand birthdays.",
    category: "custom",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyWJpPcyAWPlDjgnKTmL7Rhk23YvJMDjnqbIkNDrZvhTaoUTpjiPkj81gUawdoTllgPeAG86Z0CjL8IYGw91esY6bmMWo8vzVw8rTxQm4Tgy2JuyIhePRj3mi90XuFOfbOAEv1LgB5pBh7dh_SdcvfzgOuUghNt-2VqtJSrqIMzt3hS-9RVyFriHhVYS06V-NxjfN_G0280PSGh4BJ23P1m23LZsX_7vSySgBc9sX9b_vpy__wF21i6g",
    imageAlt: "Grand multi-tier floral celebration cake with sugar roses",
    sizes: [
      { label: "1 kg (1-tier)", price: 1499 },
      { label: "2 kg (2-tier)", price: 2799 },
      { label: "3 kg (3-tier)", price: 4499 },
    ],
    basePrice: 1499,
    priceLabel: "onwards",
    available: true,
    featured: true,
    bestseller: false,
    vegetarian: true,
    tags: [
      "celebration",
      "custom",
      "floral",
      "wedding",
      "anniversary",
      "multi-tier",
    ],
    badge: "Custom Tier",
    badgeVariant: "brown",
    customizationAvailable: true,
    whatsappMessage:
      "Hi Yogesh! I would like to enquire about a Grand Floral Celebration Cake. I have a reference photo to share.",
  },
  {
    id: "3",
    slug: "walnut-chocolate-chunk-cookies",
    name: "Walnut Chocolate Chunk Cookies",
    shortDescription:
      "Thick golden-baked cookies loaded with toasted walnuts and melting dark chocolate chunks.",
    description:
      "Our Walnut Chocolate Chunk Cookies are baked fresh every morning in small batches. Each cookie is generous in size, with a golden-crisp edge and a soft, chewy centre. We fold in toasted walnut halves and dark Belgian chocolate chunks for a deeply satisfying bite. Made with pure dairy butter and no artificial essences, these are the real deal.",
    category: "cookies",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWt1MJznHd05szT94mXIJz-RASm-AJdFA62shRK_KDEUu-BRgw-WdcbEkDdgAguC6a9-fevooewEdQEVEOD0lp2OY0gNi5uvJsZoLVF0v5wEFEHaXBROJbi0E9pAlElGir-wyNxsljpg_MT7rNgTyvXTC7sXxuFQ7RTTduVJLH_LAAo7BuB0uSW3P5z52jY6c13DJv2LEIUnJBZGG0VYZiRRZ_CFO-Eek0m9rywH69sqdQ5_ngNhRuA",
    imageAlt: "Fresh oven-baked walnut chocolate chunk cookies on parchment",
    sizes: [
      { label: "Box of 6", price: 249 },
      { label: "Box of 12", price: 469 },
      { label: "Box of 24", price: 899 },
    ],
    basePrice: 249,
    priceLabel: "Box of 6",
    available: true,
    featured: true,
    bestseller: false,
    vegetarian: true,
    tags: ["cookies", "walnut", "chocolate", "daily batch", "butter"],
    badge: "Daily Batch",
    badgeVariant: "warm",
    customizationAvailable: false,
    whatsappMessage:
      "Hi Brown Town! I would like a box of Walnut Chocolate Chunk Cookies. Please share today's availability.",
  },
  {
    id: "4",
    slug: "glazed-summer-berry-tartlet",
    name: "Glazed Summer Berry Tartlet",
    shortDescription:
      "Flaky butter sablé crust with real vanilla pastry custard and glazed raspberries & blueberries.",
    description:
      "A true French patisserie classic, our Glazed Summer Berry Tartlet features a buttery, melt-in-the-mouth sablé crust filled with luscious vanilla bean pastry cream. Topped with a seasonal medley of glazed raspberries, blueberries, and strawberry slices, then finished with a light apricot glaze for a beautiful shine. Each tart is assembled fresh daily.",
    category: "pastries",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqstRahTmn_SgWBS_Dszn1LosjOz57QxddF3xhtvBsVML_z_oJHydVhZSH5EVd5qZcTZYubutqrYIhztLCLIigvApOSl51N7BlWYcOlfnWFRuYlXOXqK3YLym4bhNz4PVU1MMPzLwcVyUzDuQoLZnM2HIh5IruSkrfSwtk-xuHBvcL9rqSdPADhB0_k4GZOxYylfvMftF2uSI5NnQ5tRaFtTlWJgMi77stNdV8Qx10TFk4nNmv3sNHRQ",
    imageAlt: "Glazed summer berry tartlet with custard cream and fresh berries",
    sizes: [{ label: "Single Tart", price: 180 }],
    basePrice: 180,
    priceLabel: "Single Tart",
    available: true,
    featured: true,
    bestseller: false,
    vegetarian: true,
    tags: ["pastry", "tart", "berry", "french", "custard", "seasonal"],
    badge: "Patisserie",
    badgeVariant: "amber",
    customizationAvailable: false,
    whatsappMessage:
      "Hi Brown Town! I want to order the Glazed Summer Berry Tartlets. How many are available today?",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export const categoryLabels: Record<ProductCategory, string> = {
  all: "All Favourites",
  cakes: "Celebration Cakes",
  cookies: "Cookies & Bakes",
  pastries: "French Pastries",
  custom: "Custom Cakes",
};
