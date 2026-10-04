"use client";

import { useState } from "react";
import { Product } from "@/lib/products";
import { useCartStore } from "@/lib/cartStore";

interface Props {
  product: Product;
}

export default function AddToCartSection({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize.label, selectedSize.price);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4 p-4 rounded-xl bg-white border border-[#ebdccb] shadow-xs">
      {/* Size selector */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-2">
          Select Size
        </label>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size.label}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                selectedSize.label === size.label
                  ? "bg-[#42210b] text-white border-[#42210b]"
                  : "bg-white text-stone-700 border-[#ebdccb] hover:border-[#c8822a]"
              }`}
            >
              {size.label} — ₹{size.price.toLocaleString("en-IN")}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-9 h-9 rounded-lg bg-[#f7f2ea] hover:bg-[#ebdccb] flex items-center justify-center text-[#42210b] font-bold transition-colors"
            aria-label="Decrease quantity"
          >
            <span className="material-symbols-outlined text-[18px]">remove</span>
          </button>
          <span className="w-8 text-center font-bold text-[#42210b]">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="w-9 h-9 rounded-lg bg-[#f7f2ea] hover:bg-[#ebdccb] flex items-center justify-center text-[#42210b] font-bold transition-colors"
            aria-label="Increase quantity"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
          <span className="text-sm font-semibold text-stone-600 ml-2">
            Total: ₹{(selectedSize.price * quantity).toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Add to cart */}
      <button
        type="button"
        onClick={handleAdd}
        disabled={!product.available}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm transition-all ${
          added
            ? "bg-emerald-600 text-white"
            : product.available
              ? "bg-[#c8822a] hover:bg-[#42210b] text-white shadow-md hover:shadow-lg"
              : "bg-stone-200 text-stone-400 cursor-not-allowed"
        }`}
      >
        <span className="material-symbols-outlined text-[18px]">
          {added ? "check_circle" : "add_shopping_cart"}
        </span>
        {added ? "Added to Cart!" : "Add to Cart"}
      </button>
    </div>
  );
}
