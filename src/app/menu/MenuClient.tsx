"use client";

import { useState, useMemo } from "react";
import {
  products,
  ProductCategory,
  categoryLabels,
  getProductsByCategory,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const categories: ProductCategory[] = [
  "all",
  "cakes",
  "cookies",
  "pastries",
  "custom",
];

export default function MenuClient() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let base = getProductsByCategory(activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      base = base.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return base;
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Search */}
      <div className="relative max-w-md">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#c8822a] text-[20px]">
          search
        </span>
        <input
          type="search"
          placeholder="Search cakes, cookies, pastries…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#ebdccb] bg-white text-sm text-[#2b1b14] placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40 focus:border-[#c8822a]"
          aria-label="Search products"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            aria-label="Clear search"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        )}
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              activeCategory === cat
                ? "bg-[#42210b] text-white"
                : "bg-[#f7f2ea] hover:bg-[#ebdccb] text-stone-700"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Results count */}
      {(searchQuery || activeCategory !== "all") && (
        <p className="text-sm text-stone-500">
          {filtered.length === 0
            ? "No products found"
            : `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`}
          {searchQuery && (
            <span>
              {" "}
              for &ldquo;<span className="font-semibold text-[#42210b]">{searchQuery}</span>&rdquo;
            </span>
          )}
        </p>
      )}

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
          <span className="material-symbols-outlined text-[64px] text-stone-200">
            search_off
          </span>
          <h3 className="font-serif text-xl font-bold text-[#42210b]">
            No products found
          </h3>
          <p className="text-stone-500 text-sm max-w-sm">
            Try a different search term or category, or browse all our
            favourites.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            className="px-5 py-2.5 rounded-xl bg-[#c8822a] text-white font-semibold text-sm hover:bg-[#42210b] transition-colors"
          >
            View All Products
          </button>
        </div>
      )}
    </>
  );
}
