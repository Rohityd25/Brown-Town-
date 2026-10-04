import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartProvider from "@/components/CartProvider";
import MobileBottomBar from "@/components/MobileBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.businessName,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add when available
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteConfig.seo.siteUrl} />
      </head>
      <body>
        <CartProvider>
          {/* Top announcement bar */}
          <aside
            aria-label="Announcement"
            className="bg-[#280d00] text-amber-100 text-xs py-2 px-4 border-b border-[#42210b]/40"
          >
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 border border-emerald-400 p-0.5 rounded-sm bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
                </span>
                <span className="font-bold tracking-wider text-white uppercase text-[11px]">
                  100% Pure Veg Confectionery
                </span>
                <span className="text-amber-300/40 hidden sm:inline">•</span>
                <span className="hidden md:inline text-amber-200/90">
                  Freshly Baked Daily in Najafgarh, New Delhi
                </span>
                <span className="text-amber-300/40 hidden lg:inline">•</span>
                <span className="hidden lg:inline text-amber-200/90">
                  Call us to enquire about delivery options
                </span>
              </div>
              <div className="flex items-center gap-4 text-[12px]">
                <span className="text-amber-200/80 hidden sm:inline">
                  WhatsApp Order Desk:
                </span>
                <a
                  href={siteConfig.phone.primaryHref}
                  className="inline-flex items-center gap-1 font-semibold text-amber-300 hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    chat
                  </span>
                  <span>{siteConfig.phone.primaryFormatted}</span>
                </a>
              </div>
            </div>
          </aside>

          <Header />
          <main className="pb-16 lg:pb-0">{children}</main>
          <Footer />
          <MobileBottomBar />
        </CartProvider>

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: siteConfig.businessName,
              description: siteConfig.description,
              url: siteConfig.seo.siteUrl,
              telephone: siteConfig.phone.primaryFormatted,
              address: {
                "@type": "PostalAddress",
                streetAddress: `${siteConfig.address.plot}, ${siteConfig.address.block}, ${siteConfig.address.road}, ${siteConfig.address.area}`,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.pincode,
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "09:00",
                  closes: "22:30",
                },
              ],
              servesCuisine: ["Bakery", "Confectionery"],
              hasMap: siteConfig.googleMapsUrl,
              priceRange: "₹₹",
            }),
          }}
        />
      </body>
    </html>
  );
}
