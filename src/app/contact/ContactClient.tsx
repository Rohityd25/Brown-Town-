"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";

export default function ContactClient() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    inquiryType: "Custom Celebration Cake",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const text = [
      `*New Inquiry via Website* 🎂`,
      `*Name:* ${formState.name}`,
      `*Phone:* ${formState.phone}`,
      `*Inquiry Type:* ${formState.inquiryType}`,
      formState.date ? `*Required Date:* ${formState.date}` : null,
      formState.message ? `*Details:* ${formState.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = whatsappUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "Are all your cakes and bakes strictly 100% pure vegetarian (eggless)?",
      a: "Yes, absolutely! Brown Town is a 100% pure vegetarian artisanal bakery. We never use eggs, gelatin, or any animal by-products in any recipe or facility.",
    },
    {
      q: "How much advance notice do I need for a custom designer cake?",
      a: "For single-tier custom theme cakes, 24 to 48 hours notice is ideal. For multi-tier wedding cakes or elaborate structural designs, we appreciate 3–4 days advance booking.",
    },
    {
      q: "Do you deliver cakes to Dwarka, Janakpuri, and West Delhi?",
      a: "Yes! We deliver across Najafgarh, Goyla Dairy, Shyam Vihar, Dwarka Sectors 1–24, Uttam Nagar, and surrounding West Delhi locales in temperature-stabilized carriers.",
    },
    {
      q: "Can I sample cake flavours before placing a large celebration order?",
      a: "You are welcome to visit our bakery studio in Shyam Vihar, Najafgarh to taste our daily fresh pastry slices, or discuss customized tasting boxes with master baker Yogesh.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept UPI (Google Pay, PhonePe, Paytm), Cash on pickup/delivery, and direct bank transfers for corporate and wedding orders.",
    },
  ];

  return (
    <div className="space-y-16 py-8 md:py-14">
      {/* Hero Header */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8822a]/10 text-[#c8822a] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c8822a]/20">
          <span className="material-symbols-outlined text-[16px]">location_on</span>
          Visit Our Bakery Studio
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#42210b] mb-4 tracking-tight">
          Let’s Bake Something <span className="italic text-[#c8822a]">Extraordinary</span> Together
        </h1>
        <p className="text-[#42210b]/75 text-base md:text-lg leading-relaxed">
          Whether you need a bespoke wedding centerpiece, birthday surprise, fresh cookies, or just want to stop by for your daily treat — we’d love to hear from you.
        </p>
      </section>

      {/* Info Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Visit Store */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#ebdccb]/60 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#c8822a]/10 text-[#c8822a] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-2xl">storefront</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-[#42210b] mb-2">Bakery Studio</h3>
              <p className="text-sm text-[#42210b]/75 leading-relaxed mb-4">
                {siteConfig.address.full}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1e7b34] bg-[#1e7b34]/10 px-2.5 py-1 rounded-md mb-4">
                <span className="material-symbols-outlined text-sm">eco</span>
                100% Pure Vegetarian Facility
              </div>
            </div>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#f7f2ea] text-[#42210b] font-medium text-sm hover:bg-[#ebdccb]/50 transition-colors"
            >
              <span className="material-symbols-outlined text-base">directions</span>
              Get Directions
            </a>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#ebdccb]/60 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1e7b34]/10 text-[#1e7b34] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-2xl">chat</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-[#42210b] mb-2">Call & WhatsApp</h3>
              <p className="text-sm text-[#42210b]/75 leading-relaxed mb-4">
                Direct connect with master baker Yogesh and our counter staff for fast orders & queries.
              </p>
              <div className="space-y-1.5 mb-4 text-sm">
                <div className="flex items-center justify-between text-[#42210b]">
                  <span className="text-xs text-[#42210b]/60 font-medium">Primary:</span>
                  <a href={siteConfig.phone.primaryHref} className="font-semibold hover:text-[#c8822a]">
                    {siteConfig.phone.primaryFormatted}
                  </a>
                </div>
                <div className="flex items-center justify-between text-[#42210b]">
                  <span className="text-xs text-[#42210b]/60 font-medium">Secondary:</span>
                  <a href={siteConfig.phone.secondaryHref} className="font-semibold hover:text-[#c8822a]">
                    {siteConfig.phone.secondaryFormatted}
                  </a>
                </div>
              </div>
            </div>
            <a
              href={siteConfig.whatsapp.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white font-medium text-sm hover:bg-[#20b858] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              Message on WhatsApp
            </a>
          </div>

          {/* Card 3: Opening Hours */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-[#ebdccb]/60 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#42210b]/10 text-[#42210b] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-2xl">schedule</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-[#42210b] mb-2">Baking Hours</h3>
              <p className="text-sm text-[#42210b]/75 leading-relaxed mb-4">
                We bake fresh batches morning and evening. Our doors are open seven days a week!
              </p>
              <div className="bg-[#f7f2ea] rounded-xl p-3.5 space-y-2 mb-4 text-xs">
                <div className="flex justify-between items-center text-[#42210b]">
                  <span className="font-medium">Everyday (Mon – Sun):</span>
                  <span className="font-bold text-[#c8822a]">9:00 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between items-center text-[#42210b]/80 border-t border-[#ebdccb]/40 pt-1.5">
                  <span>Fresh Loaves & Puffs:</span>
                  <span className="font-medium">Ready by 10:30 AM</span>
                </div>
                <div className="flex justify-between items-center text-[#42210b]/80">
                  <span>Evening Warm Cookies:</span>
                  <span className="font-medium">Ready by 4:30 PM</span>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#42210b] text-[#fdf9f2] font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Open Today Until 10:30 PM
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#f7f2ea]/70 rounded-3xl p-6 sm:p-10 md:p-12 border border-[#ebdccb] grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Form: Direct Inquiry */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-[#c8822a] text-xs font-bold uppercase tracking-wider">Fast Response</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#42210b] mt-1">
                Send an Inquiry or Custom Request
              </h2>
              <p className="text-sm text-[#42210b]/70 mt-1">
                Fill this quick form and click send. It instantly formats your request and opens a WhatsApp chat with our master baker!
              </p>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                <div>
                  <strong>WhatsApp chat launched!</strong> If it did not open automatically, click{" "}
                  <a
                    href={siteConfig.whatsapp.baseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline font-bold"
                  >
                    here to message us
                  </a>.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#42210b] mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Pooja Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#ebdccb] bg-white text-[#42210b] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#42210b] mb-1.5">
                    WhatsApp / Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#ebdccb] bg-white text-[#42210b] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#42210b] mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#ebdccb] bg-white text-[#42210b] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40"
                  >
                    <option value="Custom Celebration Cake">Custom Celebration Cake</option>
                    <option value="Tiered Wedding Cake">Tiered Wedding Cake</option>
                    <option value="Bulk / Corporate Gift Boxes">Bulk / Corporate Gift Boxes</option>
                    <option value="Birthday Party Dessert Table">Birthday Party Dessert Table</option>
                    <option value="Store Pickup / Today's Availability">Store Pickup / Today's Availability</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#42210b] mb-1.5">
                    Date Needed (Optional)
                  </label>
                  <input
                    type="date"
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#ebdccb] bg-white text-[#42210b] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#42210b] mb-1.5">
                  Describe what you have in mind (Flavours, theme, weight, photo inspiration)
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="e.g. 1.5kg Chocolate Truffle cake with gold butterfly theme for 25th anniversary on Saturday..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#ebdccb] bg-white text-[#42210b] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#c8822a] hover:bg-[#b07223] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">send</span>
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>

          {/* Right Info: Landmarks & How to Reach */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#ebdccb]/60 flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-xl text-[#42210b] mb-3">How to Reach Us</h3>
              <p className="text-xs text-[#42210b]/75 leading-relaxed mb-6">
                Conveniently situated right off Goyla Road in Shyam Vihar Phase-1, minutes away from Najafgarh market and Dwarka Mor.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#c8822a]/15 text-[#c8822a] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">pin_drop</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#42210b]">Key Landmark</h4>
                    <p className="text-xs text-[#42210b]/70">Near Bitu Dhaba Chowk, Shyam Vihar Phase-1</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#c8822a]/15 text-[#c8822a] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">subway</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#42210b]">Nearest Metro Stations</h4>
                    <p className="text-xs text-[#42210b]/70">
                      Najafgarh Metro (Grey Line) ~ 8 mins<br />
                      Dwarka Mor Metro (Blue Line) ~ 15 mins
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#c8822a]/15 text-[#c8822a] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">local_shipping</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#42210b]">Home Delivery Radius</h4>
                    <p className="text-xs text-[#42210b]/70">
                      Free or nominal delivery across Najafgarh, Goyla Dairy, Shyam Vihar, Chhawla, and all Dwarka Sectors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#1e7b34]/15 text-[#1e7b34] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-base">verified</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#42210b]">Bakery Head</h4>
                    <p className="text-xs text-[#42210b]/70">Chef & Founder: Yogesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#ebdccb]/60 mt-6">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-[#42210b] text-[#42210b] font-semibold text-xs hover:bg-[#42210b] hover:text-[#fdf9f2] transition-colors"
              >
                <span className="material-symbols-outlined text-base">map</span>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-[#c8822a] text-xs font-bold uppercase tracking-wider">Got Questions?</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#42210b] mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ebdccb]/70 shadow-sm"
            >
              <h3 className="font-semibold text-[#42210b] text-base mb-2 flex items-start gap-2.5">
                <span className="text-[#c8822a] font-bold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-[#42210b]/75 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-[#42210b] text-[#fdf9f2] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif font-bold text-lg">Have a special custom requirement?</h4>
            <p className="text-xs text-[#fdf9f2]/70">Talk directly to Chef Yogesh for customized tiered designs and party menus.</p>
          </div>
          <Link
            href="/cart"
            className="shrink-0 px-6 py-2.5 rounded-xl bg-[#c8822a] hover:bg-[#b07223] text-white font-medium text-xs transition-colors"
          >
            Browse Menu & Cart
          </Link>
        </div>
      </section>
    </div>
  );
}
