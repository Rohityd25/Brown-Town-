"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cartStore";

export default function CartButton() {
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#f7f2ea] text-[#42210b] text-xs font-semibold hover:bg-[#ebdccb]/50 transition-colors"
      aria-label={`View cart${totalItems > 0 ? ` — ${totalItems} items` : ""}`}
    >
      <span className="material-symbols-outlined text-[20px] text-[#c8822a]">
        shopping_cart
      </span>
      {totalItems > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#c8822a] text-white text-[10px] font-bold flex items-center justify-center">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}
