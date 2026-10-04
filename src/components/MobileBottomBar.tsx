"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, whatsappUrl, WHATSAPP_DEFAULT_MSG } from "@/lib/siteConfig";
import { useCartStore } from "@/lib/cartStore";

export default function MobileBottomBar() {
  const pathname = usePathname();
  const totalItems = useCartStore((s) => s.totalItems());

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: "home",
      active: pathname === "/",
    },
    {
      href: "/menu",
      label: "Menu",
      icon: "restaurant_menu",
      active: pathname.startsWith("/menu"),
    },
    {
      href: "/cart",
      label: "Cart",
      icon: "shopping_cart",
      active: pathname === "/cart",
      badge: totalItems > 0 ? totalItems : null,
    },
    {
      href: "/contact",
      label: "Visit Us",
      icon: "storefront",
      active: pathname === "/contact",
    },
  ];

  return (
    <aside
      aria-label="Mobile quick navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#ebdccb] lg:hidden shadow-[0_-4px_20px_rgba(40,13,0,0.08)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-5 items-center h-16 px-2 max-w-md mx-auto">
        {navItems.slice(0, 2).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
              item.active
                ? "text-[#c8822a] font-bold"
                : "text-[#513c32]/80 hover:text-[#42210b]"
            }`}
          >
            <span
              className={`material-symbols-outlined text-[22px] ${
                item.active ? "font-bold scale-110" : ""
              } transition-transform`}
            >
              {item.icon}
            </span>
            <span className="text-[10px] tracking-tight">{item.label}</span>
          </Link>
        ))}

        {/* Center Floating WhatsApp Order Button */}
        <div className="flex justify-center -mt-5">
          <a
            href={whatsappUrl(WHATSAPP_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all border-3 border-white"
          >
            <span className="material-symbols-outlined text-[26px]">chat</span>
          </a>
        </div>

        {navItems.slice(2, 4).map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative flex flex-col items-center justify-center gap-1 py-1 transition-colors ${
              item.active
                ? "text-[#c8822a] font-bold"
                : "text-[#513c32]/80 hover:text-[#42210b]"
            }`}
          >
            <div className="relative">
              <span
                className={`material-symbols-outlined text-[22px] ${
                  item.active ? "font-bold scale-110" : ""
                } transition-transform`}
              >
                {item.icon}
              </span>
              {item.badge !== null && item.badge !== undefined && (
                <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-[#c8822a] text-white text-[9px] font-bold flex items-center justify-center shadow-xs animate-scale-in">
                  {item.badge > 99 ? "99+" : item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] tracking-tight">{item.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
