import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, getProductsByCategory } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { whatsappUrl } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Celebration Cakes",
  description:
    "100% pure vegetarian celebration cakes in Najafgarh — Belgian truffle, custom multi-tier, floral wedding cakes and more. Freshly baked by Brown Town.",
  alternates: { canonical: "/cakes" },
};

export default function CakesPage() {
  const cakes = [...getProductsByCategory("cakes"), ...getProductsByCategory("custom")];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#fdf9f2] border-b border-[#ebdccb]/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
            Celebration Cakes
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#42210b] mt-2">
            Our Cakes
          </h1>
          <p className="text-stone-600 mt-3 max-w-xl">
            From daily-fresh Belgian truffle to bespoke multi-tier wedding
            masterpieces — every cake is 100% eggless and made with pure
            vegetarian ingredients.
          </p>
        </div>
      </div>

      {/* Cakes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cakes.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Custom Cakes CTA */}
        <div className="rounded-3xl bg-[#42210b] text-white p-8 sm:p-12 flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8822a]/30 border border-[#c8822a]/40 text-amber-200 text-xs font-bold uppercase tracking-wider">
            Made For Your Special Moments
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white max-w-2xl">
            Want a Completely Custom Cake?
          </h2>
          <p className="text-amber-100/80 max-w-xl text-sm leading-relaxed">
            Send us your reference image, sketch, or idea on WhatsApp and owner
            Yogesh will create your dream cake for any occasion — birthdays,
            weddings, anniversaries, baby showers, and more.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappUrl("Hi Yogesh! I have a reference photo for a custom cake.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c8822a] hover:bg-white hover:text-[#42210b] text-white font-bold text-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                add_photo_alternate
              </span>
              Send Reference on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
