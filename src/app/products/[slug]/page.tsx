import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, products } from "@/lib/products";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";
import AddToCartSection from "./AddToCartSection";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all products
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description.slice(0, 160),
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} | Brown Town Cake & Cookies`,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.imageAlt }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.basePrice,
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.businessName,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-[#fdf9f2] border-b border-[#ebdccb]/60 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500">
              <Link href="/" className="hover:text-[#42210b] transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-[12px]">
                chevron_right
              </span>
              <Link
                href="/menu"
                className="hover:text-[#42210b] transition-colors"
              >
                Menu
              </Link>
              <span className="material-symbols-outlined text-[12px]">
                chevron_right
              </span>
              <span className="text-[#42210b] font-medium truncate">
                {product.name}
              </span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100 shadow-lg border-4 border-white">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* VEG badge */}
              <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-emerald-800 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                100% Vegetarian
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {product.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#c8822a] text-white text-[11px] font-bold">
                      {product.badge}
                    </span>
                  )}
                  <span className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                    {product.category === "custom"
                      ? "Custom Cakes"
                      : product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)}
                  </span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b] leading-tight">
                  {product.name}
                </h1>
              </div>

              <p className="text-stone-700 leading-relaxed">{product.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-[#f7f2ea] text-[#42210b] text-xs font-medium border border-[#ebdccb]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 text-sm">
                <span
                  className={`w-2 h-2 rounded-full ${product.available ? "bg-emerald-500" : "bg-red-500"}`}
                />
                <span
                  className={`font-semibold ${product.available ? "text-emerald-700" : "text-red-600"}`}
                >
                  {product.available ? "Available Today" : "Currently Unavailable"}
                </span>
              </div>

              {/* Sizes */}
              <div className="p-4 rounded-xl bg-[#fdf9f2] border border-[#ebdccb]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#42210b] mb-3">
                  Available Sizes & Pricing
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.sizes.map((size) => (
                    <div
                      key={size.label}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#ebdccb] text-sm"
                    >
                      <span className="font-medium text-stone-700">
                        {size.label}
                      </span>
                      <span className="font-bold text-[#42210b]">
                        ₹{size.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to cart + WhatsApp */}
              <AddToCartSection product={product} />

              {/* Direct WhatsApp */}
              <a
                href={whatsappUrl(product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                Enquire via WhatsApp
              </a>

              {/* Info notes */}
              <div className="grid grid-cols-1 gap-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#c8822a] text-[16px]">
                    eco
                  </span>
                  100% Pure Vegetarian — No eggs, no gelatin
                </div>
                {product.customizationAvailable && (
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c8822a] text-[16px]">
                      palette
                    </span>
                    Custom flavours, sizes & decorations available on request
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#c8822a] text-[16px]">
                    schedule
                  </span>
                  Advance order recommended for custom designs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
