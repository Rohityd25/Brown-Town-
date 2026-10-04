import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
};

const testimonials = [
  {
    initials: "PS",
    name: "Priya Sharma",
    location: "Shyam Vihar, Najafgarh",
    color: "bg-[#c8822a]",
    quote:
      "The Belgian Truffle Cake we ordered for my sister's birthday was pure perfection! Rich, velvety, and 100% eggless without feeling heavy. Yogesh Ji ensured it was delivered on time.",
  },
  {
    initials: "RV",
    name: "Rohit Verma",
    location: "Goyla Road, Najafgarh",
    color: "bg-[#42210b]",
    quote:
      "Best bakery in Najafgarh hands down. The chocolate walnut cookies are addicting, and their custom anniversary cake stunned all our guests. Very honest and polite staff.",
  },
  {
    initials: "AG",
    name: "Ananya Gupta",
    location: "Dwarka Sector 14 / Najafgarh",
    color: "bg-amber-700",
    quote:
      "Ordered a 2-tier floral engagement cake. The finishing, gold leaf detailing, and fresh vanilla sponge were beyond our expectations. Thank you Brown Town!",
  },
];

const pillars = [
  {
    icon: "eco",
    iconBg: "bg-emerald-100 text-emerald-800",
    title: "100% Pure Vegetarian",
    desc: "Every creation is strictly eggless and gelatin-free, prepared in a dedicated vegetarian kitchen.",
  },
  {
    icon: "alarm_on",
    iconBg: "bg-amber-100 text-[#c8822a]",
    title: "Fresh Morning Bakes",
    desc: "Zero day-old batches. Our bakers start early so you always receive warm, soft, fragrant treats.",
  },
  {
    icon: "cookie",
    iconBg: "bg-orange-100 text-[#42210b]",
    title: "Belgian Cocoa & Butter",
    desc: "Rich couverture chocolate, country dairy butter, and authentic vanilla beans — no artificial essences.",
  },
  {
    icon: "home_pin",
    iconBg: "bg-stone-200 text-[#42210b]",
    title: "Najafgarh Neighborhood Pride",
    desc: "Locally owned and operated by Yogesh near Bitu Dhaba Chowk, cherished by thousands of local families.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative overflow-hidden py-12 lg:py-20 bg-[#fdf9f2] border-b border-[#ebdccb]/40"
        aria-label="Hero"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] rounded-full bg-[#ebdccb]/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-xs border border-[#ebdccb]/80">
                <span className="w-3.5 h-3.5 flex items-center justify-center p-0.5 rounded-sm bg-white border border-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
                  100% Pure Veg &bull; Freshly Baked Daily
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#42210b] tracking-tight leading-[1.12]">
                Baked Fresh. <br className="hidden sm:inline" />
                Made With Love &amp; Pure Passion.
              </h1>

              <p className="text-base sm:text-lg text-[#5a4338] leading-relaxed max-w-xl">
                From bespoke multi-tier celebration cakes to warm batch-baked
                cookies and silky Belgian chocolate pastries, Brown Town crafts
                everyday indulgences with pure butter, rich cocoa, and zero egg
                compromises.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1 w-full sm:w-auto">
                <a
                  href={whatsappUrl(
                    "Hi Brown Town! I would like to place an order."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#c8822a] hover:bg-[#42210b] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  Order on WhatsApp
                </a>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#f7f2ea] text-[#42210b] border border-[#ebdccb] font-semibold text-sm shadow-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#c8822a]">
                    restaurant_menu
                  </span>
                  Explore Our Menu
                </Link>
              </div>

              {/* Trust markers */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#ebdccb]/60 w-full max-w-lg">
                <div className="flex flex-col">
                  <span className="font-bold text-[#42210b] text-base">
                    Daily Fresh
                  </span>
                  <span className="text-xs text-stone-600 mt-0.5">
                    Morning Batches
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#42210b] text-base">
                    Near Bitu Dhaba
                  </span>
                  <span className="text-xs text-stone-600 mt-0.5">
                    Najafgarh Landmark
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-emerald-700 text-base">
                    100% Eggless
                  </span>
                  <span className="text-xs text-stone-600 mt-0.5">
                    Pure Veg Kitchen
                  </span>
                </div>
              </div>
            </div>

            {/* Right column — hero image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/11] bg-stone-100 group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTL1kMxIT8sAZfYpuaxjNCyoAyfyV8EkKV8uctjtEm7kWCB9LqotgikHRaZhspU2aQHafWq9yqlR99mJIECx_OZVSpfPoiwgJePPmpCJIBwSlqmTIEx5takZGVEvv5zwYWGU_YraQRUUcycE_FQepsECg98LMh_khMwwXt0cJ-3wkpp95WQYf2YoM3ob3gLUte8o5YYq4gXN5-oBFGXk4n8u7Bo9kVWJxPxMGO1Jx7-MC-kAe4kDQHqw"
                  alt="Brown Town artisanal morning bakery showcase"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-amber-100 text-[#c8822a] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">
                        local_fire_department
                      </span>
                    </span>
                    <div>
                      <p className="font-serif text-sm font-bold text-[#42210b]">
                        Signature Belgian Truffle Ganache
                      </p>
                      <p className="text-xs text-stone-600">
                        Fresh morning batch ready daily
                      </p>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl(
                      "Hi, is the Belgian Truffle Cake available now?"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-[#42210b] hover:bg-[#c8822a] text-white text-xs font-semibold transition-colors"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / HERITAGE ─────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-16 lg:py-20 bg-[#f7f2ea] border-b border-[#ebdccb]/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-3 mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
              Our Artisanal Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b]">
              A Little Something Delicious, Every Single Day
            </h2>
            <p className="text-base text-stone-700 leading-relaxed mt-1">
              Founded by Yogesh in the heart of Najafgarh, Brown Town Cake &amp;
              Cookies began with a simple devotion: bringing world-class
              European pastry craftsmanship and authentic Indian warmth
              together. Every recipe is formulated in small batches with zero
              egg derivatives, pure dairy cream, and honest cocoa.
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              {
                icon: "cookie",
                iconColor: "text-[#c8822a]",
                value: "50+",
                valueColor: "text-[#42210b]",
                label: "Artisanal Recipes",
                sub: "Cakes, cookies & pastries",
              },
              {
                icon: "celebration",
                iconColor: "text-[#c8822a]",
                value: "Years",
                valueColor: "text-[#42210b]",
                label: "of Passionate Baking",
                sub: "Serving Najafgarh families",
              },
              {
                icon: "eco",
                iconColor: "text-emerald-600",
                value: "100%",
                valueColor: "text-emerald-700",
                label: "Pure Vegetarian",
                sub: "Zero gelatin or egg derivatives",
              },
              {
                icon: "storefront",
                iconColor: "text-[#c8822a]",
                value: "Est.",
                valueColor: "text-[#42210b]",
                label: "Najafgarh Local",
                sub: "Near Bitu Dhaba Chowk",
              },
            ].map((m) => (
              <div
                key={m.label}
                className="p-6 rounded-2xl bg-white shadow-xs border border-[#ebdccb]/60 flex flex-col items-center text-center gap-1.5 hover:shadow-md transition-shadow"
              >
                <span
                  className={`material-symbols-outlined text-3xl ${m.iconColor}`}
                >
                  {m.icon}
                </span>
                <span
                  className={`font-serif text-3xl font-bold ${m.valueColor}`}
                >
                  {m.value}
                </span>
                <span className="font-semibold text-sm text-[#2b1b14]">
                  {m.label}
                </span>
                <span className="text-xs text-stone-500">{m.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU / FEATURED PRODUCTS ─────────────────────────────────────── */}
      <section
        id="menu"
        className="py-16 lg:py-24 bg-white border-b border-[#ebdccb]/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
                Chef&apos;s Daily Showcase
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b]">
                Our Signature Favourites
              </h2>
              <p className="text-sm sm:text-base text-stone-600">
                Handcrafted fresh daily with premium cocoa, real dairy butter,
                and seasonal fruits.
              </p>
            </div>

            {/* Link to full menu */}
            <Link
              href="/menu"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#42210b] text-white text-xs font-semibold hover:bg-[#c8822a] transition-colors"
            >
              View Full Menu
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM CAKES ─────────────────────────────────────────────────── */}
      <section
        id="custom-cakes"
        className="py-16 lg:py-20 bg-[#f7f2ea] border-b border-[#ebdccb]/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="rounded-3xl bg-[#42210b] text-white p-8 sm:p-12 lg:p-16 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#c8822a]/20 blur-3xl pointer-events-none" />

            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/5] bg-[#280d00]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyWJpPcyAWPlDjgnKTmL7Rhk23YvJMDjnqbIkNDrZvhTaoUTpjiPkj81gUawdoTllgPeAG86Z0CjL8IYGw91esY6bmMWo8vzVw8rTxQm4Tgy2JuyIhePRj3mi90XuFOfbOAEv1LgB5pBh7dh_SdcvfzgOuUghNt-2VqtJSrqIMzt3hS-9RVyFriHhVYS06V-NxjfN_G0280PSGh4BJ23P1m23LZsX_7vSySgBc9sX9b_vpy__wF21i6g"
                  alt="Custom multi-tier wedding and anniversary cake"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8822a]/30 border border-[#c8822a]/40 text-amber-200 text-xs font-bold uppercase tracking-wider">
                Made For Your Special Moments
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Your Celebration Deserves a Showstopping Cake
              </h2>

              <p className="text-base text-amber-100/90 leading-relaxed">
                Whether it&apos;s a milestone anniversary, a grand wedding in
                Dwarka, a themed 1st birthday, or a corporate gala, owner
                Yogesh and our decorating artists hand-sculpt your dream
                centerpiece. Send us your reference image or sketch on
                WhatsApp to begin.
              </p>

              {/* Occasion tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Birthdays",
                  "Anniversaries",
                  "Weddings",
                  "Baby Showers",
                  "Ring Ceremonies",
                  "Custom Tiers",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4 w-full">
                <a
                  href={whatsappUrl(
                    "Hi Yogesh! I have a reference photo for a custom cake."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c8822a] hover:bg-white hover:text-[#42210b] text-white font-bold text-sm shadow-md transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add_photo_alternate
                  </span>
                  Send Reference Photo (WhatsApp)
                </a>
                <a
                  href={siteConfig.phone.secondaryHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    call
                  </span>
                  Call Yogesh: {siteConfig.phone.secondary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#ebdccb]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-12">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
              Uncompromising Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b]">
              Why Najafgarh Loves Brown Town
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              We bake each cake with the exact care we would give to our own
              family dining table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-[#fdf9f2] border border-[#ebdccb]/70 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.iconBg}`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {p.icon}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#42210b]">
                  {p.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERY BANNER ──────────────────────────────────────────────── */}
      <section className="py-12 bg-[#280d00] text-white border-b border-[#42210b]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              Delivery &amp; Pickup Across Najafgarh &amp; West Delhi
            </div>
            <h2 className="font-serif text-3xl font-bold text-white">
              Craving Something Sweet Right Now?
            </h2>
            <p className="text-sm text-amber-100/80 leading-relaxed">
              Call our store directly for immediate counter pickup, or place
              your order on WhatsApp for local delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={siteConfig.phone.primaryHref}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c8822a] hover:bg-amber-600 text-white font-bold text-sm shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
              Call for Pickup: {siteConfig.phone.primary}
            </a>
            <a
              href={whatsappUrl("Hi Brown Town! I would like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Order
            </a>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ──────────────────────────────────────────────── */}
      <section
        id="gallery"
        className="py-16 lg:py-24 bg-[#fdf9f2] border-b border-[#ebdccb]/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
                Visual Feasts
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b]">
                From Our Ovens to Your Hearts
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-[#c8822a] hover:text-[#42210b] font-semibold text-sm transition-colors"
            >
              View Full Gallery
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Gallery mosaic */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
            {/* Large */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md aspect-[16/10] relative group bg-stone-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTL1kMxIT8sAZfYpuaxjNCyoAyfyV8EkKV8uctjtEm7kWCB9LqotgikHRaZhspU2aQHafWq9yqlR99mJIECx_OZVSpfPoiwgJePPmpCJIBwSlqmTIEx5takZGVEvv5zwYWGU_YraQRUUcycE_FQepsECg98LMh_khMwwXt0cJ-3wkpp95WQYf2YoM3ob3gLUte8o5YYq4gXN5-oBFGXk4n8u7Bo9kVWJxPxMGO1Jx7-MC-kAe4kDQHqw"
                alt="Morning artisan bakery table at Brown Town"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  Morning Display
                </span>
                <p className="font-serif text-lg font-bold">
                  Artisanal Bakery Showcase Table
                </p>
              </div>
            </div>

            {/* Tall */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md aspect-[4/3] lg:aspect-auto relative group bg-stone-100">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyWJpPcyAWPlDjgnKTmL7Rhk23YvJMDjnqbIkNDrZvhTaoUTpjiPkj81gUawdoTllgPeAG86Z0CjL8IYGw91esY6bmMWo8vzVw8rTxQm4Tgy2JuyIhePRj3mi90XuFOfbOAEv1LgB5pBh7dh_SdcvfzgOuUghNt-2VqtJSrqIMzt3hS-9RVyFriHhVYS06V-NxjfN_G0280PSGh4BJ23P1m23LZsX_7vSySgBc9sX9b_vpy__wF21i6g"
                alt="Multi-tier celebration cake at Brown Town"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  Bespoke Orders
                </span>
                <p className="font-serif text-lg font-bold">
                  Luxury Wedding &amp; Anniversary Tiers
                </p>
              </div>
            </div>

            {/* 3 bottom squares */}
            {[
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-sEIs1GRUf1AnTb3i4dqA9cFn9XBFYxKWk7LZwGkx8NArVHKRtfm_tzEmvnD8ZL5C3ql7M3hfAhhcr-nRQXK05piFoN1HwrL7hxI_dqvayjdse0Z6w0TeSQnlxYxPDsRd_huKoUH5iZnjZR_WxaNZPaC9xS_s7-4Fbckoe9ZjaDjJkO5W02gwWxhexE_-uXGiSU4G3yYt4Xi5iXTiHqdarDN-SDpkDeNDM88SB-FUX21AYeH76azKqw",
                alt: "Belgian dark chocolate truffle slice",
                caption: "Belgian Dark Truffle Slice",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkWt1MJznHd05szT94mXIJz-RASm-AJdFA62shRK_KDEUu-BRgw-WdcbEkDdgAguC6a9-fevooewEdQEVEOD0lp2OY0gNi5uvJsZoLVF0v5wEFEHaXBROJbi0E9pAlElGir-wyNxsljpg_MT7rNgTyvXTC7sXxuFQ7RTTduVJLH_LAAo7BuB0uSW3P5z52jY6c13DJv2LEIUnJBZGG0VYZiRRZ_CFO-Eek0m9rywH69sqdQ5_ngNhRuA",
                alt: "Fresh chocolate chunk walnut cookies",
                caption: "Warm Walnut Cookie Stack",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqstRahTmn_SgWBS_Dszn1LosjOz57QxddF3xhtvBsVML_z_oJHydVhZSH5EVd5qZcTZYubutqrYIhztLCLIigvApOSl51N7BlWYcOlfnWFRuYlXOXqK3YLym4bhNz4PVU1MMPzLwcVyUzDuQoLZnM2HIh5IruSkrfSwtk-xuHBvcL9rqSdPADhB0_k4GZOxYylfvMftF2uSI5NnQ5tRaFtTlWJgMi77stNdV8Qx10TFk4nNmv3sNHRQ",
                alt: "Glazed summer berry custard tartlet",
                caption: "Madagascar Berry Custard Tart",
              },
            ].map((item) => (
              <div
                key={item.caption}
                className="lg:col-span-4 rounded-2xl overflow-hidden shadow-md aspect-square relative group bg-stone-100"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-serif text-base font-bold">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#ebdccb]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-12">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
              Community Voices
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b]">
              Loved By Our Customers
            </h2>
            <p className="text-sm text-stone-600">
              Hear what families across Najafgarh and Southwest Delhi say about
              our bakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-7 rounded-2xl bg-[#fdf9f2] border border-[#ebdccb]/70 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px]"
                        style={{
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-stone-700 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-[#ebdccb]/60">
                  <div
                    className={`w-9 h-9 rounded-full ${t.color} text-white font-bold text-xs flex items-center justify-center shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#42210b]">{t.name}</p>
                    <p className="text-[11px] text-stone-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / LOCATION ───────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-16 lg:py-24 bg-[#f7f2ea] border-b border-[#ebdccb]/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
                  Physical Store &amp; Orders
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b]">
                  Visit Our Najafgarh Bakery
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Step in to smell freshly baked cookies, choose daily fresh
                  celebration cakes right from our display chillers, or plan
                  custom tiers with Yogesh.
                </p>
              </div>

              <div className="flex flex-col gap-3.5">
                {/* Address */}
                <div className="p-4 rounded-xl bg-white border border-[#ebdccb]/70 flex items-start gap-3.5 shadow-xs">
                  <span className="material-symbols-outlined text-[#c8822a] text-2xl mt-0.5">
                    location_on
                  </span>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#42210b]">
                      Bakery Address
                    </h3>
                    <p className="text-sm text-stone-800 font-medium leading-relaxed mt-0.5">
                      {siteConfig.address.plot}, {siteConfig.address.block},{" "}
                      {siteConfig.address.road}, {siteConfig.address.area},
                      <br />
                      <strong className="text-[#c8822a]">
                        {siteConfig.address.landmark}
                      </strong>
                      , {siteConfig.address.city}, {siteConfig.address.state} –{" "}
                      {siteConfig.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-white border border-[#ebdccb]/70 flex items-start gap-3.5 shadow-xs">
                  <span className="material-symbols-outlined text-[#c8822a] text-2xl mt-0.5">
                    phone_in_talk
                  </span>
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#42210b]">
                        Direct Contact
                      </h3>
                      <span className="text-xs font-bold text-[#42210b] bg-[#f7f2ea] px-2 py-0.5 rounded">
                        Owner: {siteConfig.owner}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-bold text-stone-800 mt-1">
                      <a
                        href={siteConfig.phone.primaryHref}
                        className="hover:text-[#c8822a] transition-colors"
                      >
                        {siteConfig.phone.primaryFormatted}
                      </a>
                      <a
                        href={siteConfig.phone.secondaryHref}
                        className="hover:text-[#c8822a] transition-colors"
                      >
                        {siteConfig.phone.secondaryFormatted}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-4 rounded-xl bg-white border border-[#ebdccb]/70 flex items-start gap-3.5 shadow-xs">
                  <span className="material-symbols-outlined text-[#c8822a] text-2xl mt-0.5">
                    schedule
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#42210b]">
                        Working Hours
                      </h3>
                      <p className="text-sm font-semibold text-stone-800 mt-0.5">
                        {siteConfig.hours.weekdays}: {siteConfig.hours.time}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      100% Pure Veg
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#42210b] hover:bg-[#c8822a] text-white font-semibold text-xs shadow-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    directions
                  </span>
                  Get Directions
                </a>
                <a
                  href={siteConfig.phone.primaryHref}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#f7f2ea] text-[#42210b] border border-[#ebdccb] font-semibold text-xs shadow-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#c8822a]">
                    call
                  </span>
                  Call Store
                </a>
                <a
                  href={whatsappUrl("Hi Brown Town! I have an enquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chat
                  </span>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right — Map card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl p-6 sm:p-8 bg-white border border-[#ebdccb]/80 shadow-lg flex flex-col gap-6 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#c8822a]"></span>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#42210b]">
                      Location Landmark Guide
                    </span>
                  </div>
                  <span className="text-xs text-stone-500">
                    Najafgarh, New Delhi
                  </span>
                </div>

                <div className="h-64 rounded-2xl bg-amber-50/70 border border-[#ebdccb] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#42210b_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Road */}
                  <div className="absolute top-1/2 left-0 right-0 h-4 bg-amber-200/50 -translate-y-1/2 border-y border-amber-300/40 flex items-center justify-center">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-amber-900/60">
                      Goyla Road &bull; Shyam Vihar
                    </span>
                  </div>

                  {/* Pin */}
                  <div className="relative z-10 flex flex-col items-center animate-bounce">
                    <div className="px-3 py-1.5 rounded-lg bg-[#42210b] text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-amber-400">
                        cake
                      </span>
                      Brown Town Bakery
                    </div>
                    <div className="w-3 h-3 bg-[#42210b] rotate-45 -mt-1.5 shadow-sm" />
                  </div>

                  {/* Landmark */}
                  <div className="absolute bottom-3 left-4 right-4 bg-white/90 backdrop-blur-sm py-2 px-3 rounded-lg border border-[#ebdccb] text-xs text-stone-700 shadow-xs flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[#c8822a] text-[16px]">
                      near_me
                    </span>
                    Landmark:{" "}
                    <strong>Near Bitu Dhaba Chowk</strong> (Goyla Road)
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c8822a] text-base">
                      local_shipping
                    </span>
                    Local delivery available
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c8822a] text-base">
                      store
                    </span>
                    Curbside pickup available
                  </div>
                </div>

                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#42210b] hover:bg-[#c8822a] text-white text-sm font-semibold transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    map
                  </span>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#42210b] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center gap-6">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
            Ready for Something Delicious?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Whether it&apos;s a simple tea-time treat or a showstopping
            celebration cake, we&apos;re ready to make it memorable.
          </h2>
          <p className="text-sm sm:text-base text-amber-100/80 max-w-2xl">
            Order for swift doorstep arrival or consult with Yogesh for custom
            celebration designs with bespoke flowers, tiers, and flavors.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={whatsappUrl("Hi Brown Town! I would like to place an order now.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#c8822a] hover:bg-white hover:text-[#42210b] text-white font-bold text-sm shadow-xl transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                shopping_bag
              </span>
              Order Online Now
            </a>
            <a
              href={siteConfig.phone.primaryHref}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                call
              </span>
              Call Store: {siteConfig.phone.primary}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
