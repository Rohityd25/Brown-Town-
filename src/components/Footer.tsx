import Link from "next/link";
import Image from "next/image";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Our Full Menu" },
  { href: "/cakes", label: "Celebration Cakes" },
  { href: "/about", label: "Our Story & Craft" },
  { href: "/gallery", label: "Bakery Gallery" },
  { href: "/contact", label: "Store Location" },
];

const productLinks = [
  { href: "/products/belgian-chocolate-truffle-cake", label: "Belgian Truffle Cakes" },
  { href: "/products/walnut-chocolate-chunk-cookies", label: "Walnut Cookies" },
  { href: "/products/glazed-summer-berry-tartlet", label: "French Berry Tarts" },
  { href: "/products/grand-floral-celebration-cake", label: "Wedding Tier Cakes" },
  { href: "/cakes", label: "Anniversary Specials" },
  { href: "/menu", label: "Daily Fresh Pastries" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#280d00] text-stone-300 border-t border-[#42210b]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={siteConfig.logoUrl}
                alt={siteConfig.businessName}
                width={40}
                height={40}
                className="rounded-full object-cover border border-[#c8822a]/50"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-white">
                  Brown Town
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#c8822a]">
                  Cake &amp; Cookies &bull; Najafgarh
                </span>
              </div>
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[11px] text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                100% PURE VEG
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-300">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-stone-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-300">
              Our Bakes
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-stone-400">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-amber-300">
              Bakery Store Details
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#c8822a] text-[16px] shrink-0 mt-0.5">
                  person
                </span>
                <p>
                  <strong className="text-white">Owner:</strong>{" "}
                  {siteConfig.owner}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#c8822a] text-[16px] shrink-0 mt-0.5">
                  call
                </span>
                <div>
                  <a
                    href={siteConfig.phone.primaryHref}
                    className="hover:text-white block transition-colors"
                  >
                    {siteConfig.phone.primaryFormatted}
                  </a>
                  <a
                    href={siteConfig.phone.secondaryHref}
                    className="hover:text-white block transition-colors"
                  >
                    {siteConfig.phone.secondaryFormatted}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#c8822a] text-[16px] shrink-0 mt-0.5">
                  location_on
                </span>
                <p className="leading-relaxed">{siteConfig.address.full}</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#c8822a] text-[16px] shrink-0 mt-0.5">
                  schedule
                </span>
                <p>
                  Open Daily:{" "}
                  <span className="text-white">{siteConfig.hours.time}</span>
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl("Hi Brown Town! I have an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c8822a] hover:bg-[#42210b] text-white text-xs font-bold transition-colors w-fit"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-stone-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-stone-300 transition-colors"
            >
              Terms
            </Link>
            <p>Baking with love in Najafgarh, New Delhi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
