import type { Metadata } from "next";
import Image from "next/image";
import { whatsappUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of artisanal cakes, cookies, and pastries from Brown Town Bakery in Najafgarh, New Delhi.",
  alternates: { canonical: "/gallery" },
};

const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTL1kMxIT8sAZfYpuaxjNCyoAyfyV8EkKV8uctjtEm7kWCB9LqotgikHRaZhspU2aQHafWq9yqlR99mJIECx_OZVSpfPoiwgJePPmpCJIBwSlqmTIEx5takZGVEvv5zwYWGU_YraQRUUcycE_FQepsECg98LMh_khMwwXt0cJ-3wkpp95WQYf2YoM3ob3gLUte8o5YYq4gXN5-oBFGXk4n8u7Bo9kVWJxPxMGO1Jx7-MC-kAe4kDQHqw",
    alt: "Morning artisan bakery showcase table at Brown Town",
    label: "Morning Display",
    caption: "Artisanal Bakery Showcase Table",
    colSpan: "lg:col-span-8",
    aspect: "aspect-[16/9]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyWJpPcyAWPlDjgnKTmL7Rhk23YvJMDjnqbIkNDrZvhTaoUTpjiPkj81gUawdoTllgPeAG86Z0CjL8IYGw91esY6bmMWo8vzVw8rTxQm4Tgy2JuyIhePRj3mi90XuFOfbOAEv1LgB5pBh7dh_SdcvfzgOuUghNt-2VqtJSrqIMzt3hS-9RVyFriHhVYS06V-NxjfN_G0280PSGh4BJ23P1m23LZsX_7vSySgBc9sX9b_vpy__wF21i6g",
    alt: "Multi-tier grand floral celebration cake",
    label: "Bespoke Orders",
    caption: "Luxury Wedding & Anniversary Tiers",
    colSpan: "lg:col-span-4",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-sEIs1GRUf1AnTb3i4dqA9cFn9XBFYxKWk7LZwGkx8NArVHKRtfm_tzEmvnD8ZL5C3ql7M3hfAhhcr-nRQXK05piFoN1HwrL7hxI_dqvayjdse0Z6w0TeSQnlxYxPDsRd_huKoUH5iZnjZR_WxaNZPaC9xS_s7-4Fbckoe9ZjaDjJkO5W02gwWxhexE_-uXGiSU4G3yYt4Xi5iXTiHqdarDN-SDpkDeNDM88SB-FUX21AYeH76azKqw",
    alt: "Belgian dark chocolate truffle cake slice",
    label: "Chocolate Range",
    caption: "Belgian Dark Truffle Slice",
    colSpan: "lg:col-span-4",
    aspect: "aspect-square",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWt1MJznHd05szT94mXIJz-RASm-AJdFA62shRK_KDEUu-BRgw-WdcbEkDdgAguC6a9-fevooewEdQEVEOD0lp2OY0gNi5uvJsZoLVF0v5wEFEHaXBROJbi0E9pAlElGir-wyNxsljpg_MT7rNgTyvXTC7sXxuFQ7RTTduVJLH_LAAo7BuB0uSW3P5z52jY6c13DJv2LEIUnJBZGG0VYZiRRZ_CFO-Eek0m9rywH69sqdQ5_ngNhRuA",
    alt: "Fresh walnut chocolate chunk cookies",
    label: "Cookie Batch",
    caption: "Warm Walnut Cookie Stack",
    colSpan: "lg:col-span-4",
    aspect: "aspect-square",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqstRahTmn_SgWBS_Dszn1LosjOz57QxddF3xhtvBsVML_z_oJHydVhZSH5EVd5qZcTZYubutqrYIhztLCLIigvApOSl51N7BlWYcOlfnWFRuYlXOXqK3YLym4bhNz4PVU1MMPzLwcVyUzDuQoLZnM2HIh5IruSkrfSwtk-xuHBvcL9rqSdPADhB0_k4GZOxYylfvMftF2uSI5NnQ5tRaFtTlWJgMi77stNdV8Qx10TFk4nNmv3sNHRQ",
    alt: "Glazed summer berry custard tartlet from Brown Town",
    label: "Patisserie",
    caption: "Madagascar Berry Custard Tart",
    colSpan: "lg:col-span-4",
    aspect: "aspect-square",
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#fdf9f2]">
      {/* Header */}
      <div className="bg-white border-b border-[#ebdccb]/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
              Visual Feasts
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#42210b] mt-2">
              Gallery
            </h1>
            <p className="text-stone-600 mt-3 max-w-xl">
              A visual showcase of our daily creations — from morning cookie
              batches to grand celebration centrepieces.
            </p>
          </div>
          <a
            href={whatsappUrl("Hi Brown Town! I would like to see more cake designs.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#c8822a] hover:text-[#42210b] font-semibold text-sm transition-colors shrink-0"
          >
            Connect for Daily Designs
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      {/* Mosaic Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.caption}
              className={`${item.colSpan} rounded-2xl overflow-hidden shadow-md ${item.aspect} relative group bg-stone-100`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  {item.label}
                </span>
                <p className="font-serif text-base sm:text-lg font-bold">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 text-sm mb-4">
            Want to see more designs or share a reference for your custom cake?
          </p>
          <a
            href={whatsappUrl("Hi Brown Town! I would like to see more cake designs and discuss a custom order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c8822a] hover:bg-[#42210b] text-white font-bold text-sm transition-colors shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
