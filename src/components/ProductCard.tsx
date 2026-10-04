"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { whatsappUrl } from "@/lib/siteConfig";
import { useCartStore } from "@/lib/cartStore";

interface ProductCardProps {
  product: Product;
}

const badgeClasses: Record<string, string> = {
  caramel: "bg-[#c8822a] text-white",
  brown: "bg-[#42210b] text-white",
  warm: "bg-[#f7f2ea] text-[#42210b] border border-[#ebdccb]",
  amber: "bg-amber-100 text-amber-900",
};

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const firstSize = product.sizes[0];

  const handleAddToCart = () => {
    addItem(product, firstSize.label, firstSize.price);
  };

  const ctaLabel =
    product.customizationAvailable ? "Customize" : product.category === "cookies" ? "Add to Box" : "Order";

  return (
    <article className="rounded-2xl bg-[#fdf9f2] border border-[#ebdccb]/70 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </Link>

        {/* VEG Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded bg-white/90 backdrop-blur-sm text-[10px] font-bold text-emerald-800 shadow-xs z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          100% VEG
        </div>

        {/* Product Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[11px] font-bold shadow-xs z-10 ${
              badgeClasses[product.badgeVariant ?? "caramel"]
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-serif text-lg font-bold text-[#42210b] group-hover:text-[#c8822a] transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t border-[#ebdccb]/60 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase text-stone-600 font-semibold block">
              {product.priceLabel}
            </span>
            <span className="font-serif text-lg font-bold text-[#42210b]">
              ₹{product.basePrice.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="p-2 rounded-lg bg-[#f7f2ea] hover:bg-[#ebdccb] text-[#42210b] transition-colors"
              aria-label={`Add ${product.name} to cart`}
              title="Add to cart"
            >
              <span className="material-symbols-outlined text-[18px]">
                add_shopping_cart
              </span>
            </button>

            {/* WhatsApp order */}
            <a
              href={whatsappUrl(product.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#c8822a] hover:bg-[#42210b] text-white text-xs font-bold transition-colors"
              aria-label={`Order ${product.name} on WhatsApp`}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
