import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact & Store Location",
  description: `Visit Brown Town Cake & Cookies at ${siteConfig.address.full}. Call ${siteConfig.phone.primaryFormatted} or message on WhatsApp for custom cakes and home delivery.`,
  openGraph: {
    title: "Contact Us | Brown Town Cake & Cookies Najafgarh",
    description: `Visit our 100% pure vegetarian bakery in Shyam Vihar, Najafgarh or order via WhatsApp at ${siteConfig.phone.primaryFormatted}.`,
    url: `${siteConfig.seo.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fdf9f2]">
      <ContactClient />
    </main>
  );
}
