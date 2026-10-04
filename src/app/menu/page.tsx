import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Full Menu",
  description:
    "Browse our complete menu of 100% pure vegetarian cakes, cookies, pastries, and custom celebration cakes. Freshly baked daily in Najafgarh, New Delhi.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-[#fdf9f2] border-b border-[#ebdccb]/60 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#c8822a]">
            Our Bakery
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#42210b] mt-2">
            Our Full Menu
          </h1>
          <p className="text-stone-600 mt-3 max-w-xl">
            Every item is baked fresh daily with premium ingredients. Use the
            search or category filters to find exactly what you&apos;re craving.
          </p>
        </div>
      </div>

      {/* Search + Filter + Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 flex flex-col gap-8">
        <MenuClient />
      </div>
    </div>
  );
}
