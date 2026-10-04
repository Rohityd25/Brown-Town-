import type { Metadata } from "next";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Brown Town Cake & Cookies — Najafgarh's favourite 100% pure vegetarian artisanal bakery, founded by Yogesh near Bitu Dhaba Chowk.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#fdf9f2] border-b border-[#ebdccb]/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
            Our Story
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#42210b] mt-2">
            About Brown Town
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 flex flex-col gap-16">
        {/* Story */}
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#42210b]">
            A Little Something Delicious, Every Single Day
          </h2>
          <p className="text-stone-700 leading-relaxed">
            Founded by <strong>Yogesh</strong> in the heart of Najafgarh, Brown
            Town Cake &amp; Cookies began with a simple devotion: bringing
            world-class European pastry craftsmanship and authentic Indian warmth
            together under one roof.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Every recipe is formulated in small batches with zero egg derivatives,
            pure dairy cream, and honest cocoa sourced from trusted Belgian
            suppliers. We believe that great baking starts before sunrise — our
            kitchen fires up early every morning so you always receive warm, fresh,
            and fragrant creations.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Today, Brown Town is Najafgarh&apos;s go-to destination for everything
            from a simple weekday treat to a showstopping wedding tier cake.
            Located near Bitu Dhaba Chowk on Goyla Road, we are proud to be a
            true neighborhood bakery.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "eco",
              iconBg: "bg-emerald-100 text-emerald-800",
              title: "100% Vegetarian",
              desc: "Every single product we make is strictly eggless and free from gelatin or any animal derivatives. Our kitchen has always been — and will always be — completely pure vegetarian.",
            },
            {
              icon: "local_florist",
              iconBg: "bg-amber-100 text-[#c8822a]",
              title: "Craft & Artistry",
              desc: "We take immense pride in the hand-crafted quality of our work. From sugar roses to mirror-gloss ganache, every detail is applied by hand with care and passion.",
            },
            {
              icon: "home_pin",
              iconBg: "bg-stone-200 text-[#42210b]",
              title: "Community First",
              desc: "We are Najafgarh. We serve the families, celebrations, and milestones of our local community. Every cake we send out carries a piece of our heart.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="p-7 rounded-2xl bg-[#fdf9f2] border border-[#ebdccb]/70 flex flex-col gap-3"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${v.iconBg}`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {v.icon}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#42210b]">
                {v.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="bg-[#42210b] rounded-3xl p-8 sm:p-12 text-white text-center flex flex-col items-center gap-5">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Come Visit Us
          </h2>
          <p className="text-amber-100/80 max-w-lg text-sm leading-relaxed">
            {siteConfig.address.full}
          </p>
          <p className="text-amber-200 text-sm font-semibold">
            {siteConfig.hours.weekdays} &bull; {siteConfig.hours.time}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#c8822a] hover:bg-white hover:text-[#42210b] text-white font-semibold text-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                directions
              </span>
              Get Directions
            </a>
            <a
              href={whatsappUrl("Hi Brown Town! I would like to know more.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
