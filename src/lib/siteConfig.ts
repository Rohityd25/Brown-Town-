// Central site configuration for Brown Town Cake & Cookies
// All business information lives here — never scatter it across components.

export const siteConfig = {
  businessName: "Brown Town Cake & Cookies",
  shortName: "Brown Town",
  tagline: "Cake & Cookies • Najafgarh",
  description:
    "Handcrafting Delhi's most cherished celebration cakes, oven-fresh cookies, and artisanal pastries. Every bake is prepared with 100% vegetarian goodness and authentic European cocoa.",
  owner: "Yogesh",

  phone: {
    primary: "8383073727",
    primaryFormatted: "+91 83830 73727",
    primaryHref: "tel:+918383073727",
    secondary: "7982782439",
    secondaryFormatted: "+91 79827 82439",
    secondaryHref: "tel:+917982782439",
  },

  whatsapp: {
    number: "918383073727",
    baseUrl: "https://wa.me/918383073727",
  },

  address: {
    plot: "Plot No. 17-A/2/1",
    block: "A-Block",
    road: "Goyla Road",
    area: "Shyam Vihar, Phase-1",
    landmark: "Near Bitu Dhaba Chowk",
    city: "Najafgarh",
    state: "New Delhi",
    pincode: "110043",
    full: "Plot No. 17-A/2/1, A-Block, Goyla Road, Shyam Vihar, Phase-1, Near Bitu Dhaba Chowk, Najafgarh, New Delhi - 110043",
  },

  hours: {
    weekdays: "Monday – Sunday",
    time: "9:00 AM – 10:30 PM",
    display: "Open Daily: 9:00 AM – 10:30 PM",
  },

  // Set to real Zomato URL if/when business owner provides it
  zomatoUrl: null as string | null,

  // Set to real Instagram URL if/when business owner provides it
  instagramUrl: null as string | null,

  // Set to real Facebook URL if/when business owner provides it
  facebookUrl: null as string | null,

  // Set to real email if/when business owner provides it
  email: null as string | null,

  googleMapsUrl:
    "https://maps.google.com/?q=Plot+No.+17-A%2F2%2F1%2C+A-Block%2C+Goyla+Road%2C+Shyam+Vihar%2C+Phase-1%2C+Najafgarh%2C+New+Delhi+110043",

  // Logo — uses Google's CDN URL from the Stitch design
  logoUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD6yvKuXXPUvE9vx3P7yZmEu9Y5ZIiZDXwLvvhSzgiC1qWJC4bsWlHa99COTxhUwg4uOcTxUMfHcPXDBVCcxdpTR7wMDfswN4nYylwdW9IwWk_VUauz_JIUE1fBcMZPdNzQhZLSzH1ST5CH6nLtmzWpztFDai3agUMTWAqT-IYP8zfhxXta8Zwiz_UdVnm8wAb2eUdiy_pOQ9ZZQ3TluepqmeReW8iHCAffUjbaT_jMGUG2scpxjdTSI8lAHBl6a9eLa-8",

  seo: {
    title: "Brown Town Cake & Cookies | Artisanal Bakery Najafgarh",
    titleTemplate: "%s | Brown Town Cake & Cookies",
    description:
      "Brown Town Cake & Cookies — Najafgarh's premier 100% pure vegetarian artisanal bakery. Custom celebration cakes, Belgian truffle cakes, cookies & pastries. Order on WhatsApp.",
    keywords:
      "bakery najafgarh, cake shop najafgarh, custom cakes najafgarh, eggless cakes delhi, belgian truffle cake, cookies najafgarh, celebration cakes, brown town bakery",
    ogImage: "/og-image.jpg",
    siteUrl: "https://browntownbakery.in",
  },
} as const;

// Helper to generate WhatsApp URLs
export function whatsappUrl(message: string): string {
  return `${siteConfig.whatsapp.baseUrl}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MSG =
  "Hi Brown Town! I would like to place an order.";
