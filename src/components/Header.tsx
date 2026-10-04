"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig, whatsappUrl, WHATSAPP_DEFAULT_MSG } from "@/lib/siteConfig";
import CartButton from "@/components/CartButton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/cakes", label: "Cakes" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll shadow
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when nav open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#ebdccb]/60 transition-shadow duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 group"
          aria-label="Brown Town Cake & Cookies — Home"
        >
          <Image
            src={siteConfig.logoUrl}
            alt="Brown Town Cake & Cookies logo"
            width={48}
            height={48}
            className="rounded-full object-cover border border-[#c8822a]/40 shadow-sm group-hover:scale-105 transition-transform"
            priority
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#42210b] leading-tight">
              Brown Town
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#c8822a] font-semibold">
              Cake &amp; Cookies &bull; Najafgarh
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#513c32]"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors pb-0.5 ${
                isActive(link.href)
                  ? "text-[#42210b] font-bold border-b-2 border-[#c8822a]"
                  : "hover:text-[#c8822a]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={siteConfig.phone.primaryHref}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#f7f2ea] text-[#42210b] text-xs font-semibold hover:bg-[#ebdccb]/50 transition-colors"
            aria-label={`Call us at ${siteConfig.phone.primaryFormatted}`}
          >
            <span className="material-symbols-outlined text-[16px] text-[#c8822a]">
              call
            </span>
            <span>{siteConfig.phone.primary}</span>
          </a>

          <CartButton />

          <a
            href={whatsappUrl(WHATSAPP_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#c8822a] hover:bg-[#42210b] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">
              shopping_bag
            </span>
            <span>Order Now</span>
          </a>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <CartButton />
          <button
            type="button"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="p-2 rounded-lg text-[#42210b] hover:bg-[#f7f2ea] transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Drawer */}
          <nav
            id="mobile-nav"
            className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col pt-6 pb-8 px-6 lg:hidden overflow-y-auto"
            aria-label="Mobile navigation"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
                <Image
                  src={siteConfig.logoUrl}
                  alt="Brown Town"
                  width={36}
                  height={36}
                  className="rounded-full object-cover border border-[#c8822a]/40"
                />
                <span className="font-serif text-lg font-bold text-[#42210b]">
                  Brown Town
                </span>
              </Link>
              <button
                type="button"
                onClick={closeMenu}
                className="p-1.5 rounded-lg hover:bg-[#f7f2ea] transition-colors"
                aria-label="Close navigation menu"
              >
                <span className="material-symbols-outlined text-[24px] text-[#42210b]">
                  close
                </span>
              </button>
            </div>

            {/* Nav links */}
            <ul className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? "bg-[#f7f2ea] text-[#42210b] font-bold"
                        : "text-[#513c32] hover:bg-[#f7f2ea] hover:text-[#42210b]"
                    }`}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#c8822a]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTAs */}
            <div className="flex flex-col gap-3 pt-6 border-t border-[#ebdccb]">
              <a
                href={whatsappUrl(WHATSAPP_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#c8822a] text-white font-bold text-sm shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">
                  shopping_bag
                </span>
                Order on WhatsApp
              </a>
              <a
                href={siteConfig.phone.primaryHref}
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#f7f2ea] text-[#42210b] font-semibold text-sm border border-[#ebdccb]"
              >
                <span className="material-symbols-outlined text-[18px] text-[#c8822a]">
                  call
                </span>
                Call {siteConfig.phone.primary}
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
