"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/cartStore";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";

function generateWhatsAppMessage(
  items: ReturnType<typeof useCartStore.getState>["items"],
  formData: { name: string; phone: string; preference: string; date: string; time: string; message: string; address: string }
) {
  const itemLines = items
    .map(
      (i) =>
        `• ${i.productName} (${i.selectedSize}) x${i.quantity} = ₹${(i.price * i.quantity).toLocaleString("en-IN")}`
    )
    .join("\n");

  const total = items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  return `Hi Brown Town Cake & Cookies! 🎂

I would like to place an order.

*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}

*Order Details:*
${itemLines}

*Total: ₹${total.toLocaleString("en-IN")}*

*Preference:* ${formData.preference}
${formData.preference === "Delivery" ? `Address: ${formData.address}\n` : ""}
*Preferred Date:* ${formData.date}
*Preferred Time:* ${formData.time}
${formData.message ? `\n*Cake Message / Instructions:*\n${formData.message}` : ""}

Thank you!`;
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, subtotal, totalItems } =
    useCartStore();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    preference: "Pickup",
    date: "",
    time: "",
    message: "",
    address: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Valid 10-digit phone number is required";
    if (!form.date) errs.date = "Preferred date is required";
    if (!form.time) errs.time = "Preferred time is required";
    if (form.preference === "Delivery" && !form.address.trim())
      errs.address = "Delivery address is required";
    return errs;
  };

  const handlePlaceOrder = () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const msg = generateWhatsAppMessage(items, form);
    const url = whatsappUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (totalItems() === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-20 gap-6 px-4 text-center">
        <span className="material-symbols-outlined text-[80px] text-stone-200">
          shopping_cart
        </span>
        <h1 className="font-serif text-2xl font-bold text-[#42210b]">
          Your cart is empty
        </h1>
        <p className="text-stone-500 max-w-sm">
          Browse our menu and add your favourite cakes, cookies, and pastries!
        </p>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c8822a] text-white font-bold text-sm hover:bg-[#42210b] transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">
            restaurant_menu
          </span>
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf9f2]">
      <div className="bg-white border-b border-[#ebdccb]/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b]">
            Your Cart
          </h1>
          <p className="text-stone-600 mt-1 text-sm">
            {totalItems()} item{totalItems() !== 1 ? "s" : ""} — place your
            order via WhatsApp below
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-[#42210b]">Cart Items</h2>
              <button
                onClick={clearCart}
                className="text-xs text-red-600 hover:text-red-700 font-semibold flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">
                  delete
                </span>
                Clear Cart
              </button>
            </div>

            {items.map((item) => (
              <div
                key={`${item.productId}-${item.selectedSize}`}
                className="p-3 sm:p-4 rounded-2xl bg-white border border-[#ebdccb]/70 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
              >
                {/* Top / Left: Image + Info */}
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.productSlug}`}
                      className="font-serif text-sm font-bold text-[#42210b] hover:text-[#c8822a] transition-colors block truncate"
                    >
                      {item.productName}
                    </Link>
                    <p className="text-xs text-stone-500">{item.selectedSize}</p>
                    <p className="text-xs font-semibold text-[#42210b] mt-0.5">
                      ₹{item.price.toLocaleString("en-IN")} each
                    </p>
                  </div>
                </div>

                {/* Bottom on mobile / Right on desktop: Quantity controls & Total */}
                <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#ebdccb]/40">
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 bg-[#f7f2ea] p-1 rounded-xl">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.selectedSize,
                          item.quantity - 1
                        )
                      }
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white hover:bg-[#ebdccb] flex items-center justify-center text-[#42210b] shadow-2xs transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        remove
                      </span>
                    </button>
                    <span className="w-6 text-center font-bold text-xs sm:text-sm text-[#42210b]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.selectedSize,
                          item.quantity + 1
                        )
                      }
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white hover:bg-[#ebdccb] flex items-center justify-center text-[#42210b] shadow-2xs transition-colors"
                      aria-label="Increase quantity"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        add
                      </span>
                    </button>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#42210b] text-sm">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                    <button
                      onClick={() =>
                        removeItem(item.productId, item.selectedSize)
                      }
                      className="text-[11px] text-red-500 hover:text-red-600 mt-0.5"
                      aria-label={`Remove ${item.productName} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/menu"
              className="inline-flex items-center gap-1.5 text-[#c8822a] hover:text-[#42210b] font-semibold text-sm transition-colors mt-2"
            >
              <span className="material-symbols-outlined text-[16px]">
                arrow_back
              </span>
              Continue Shopping
            </Link>
          </div>

          {/* Order Form + Summary */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Summary */}
            <div className="p-6 rounded-2xl bg-white border border-[#ebdccb]/70 shadow-xs">
              <h2 className="font-serif text-lg font-bold text-[#42210b] mb-4">
                Order Summary
              </h2>
              <div className="flex flex-col gap-2 text-sm">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.selectedSize}`}
                    className="flex justify-between"
                  >
                    <span className="text-stone-600 truncate max-w-[200px]">
                      {item.productName} ({item.selectedSize}) ×{item.quantity}
                    </span>
                    <span className="font-semibold text-[#42210b] shrink-0">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
                <div className="border-t border-[#ebdccb] pt-3 mt-1 flex justify-between font-bold text-[#42210b]">
                  <span>Total</span>
                  <span className="font-serif text-lg">
                    ₹{subtotal().toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="p-6 rounded-2xl bg-white border border-[#ebdccb]/70 shadow-xs">
              <h2 className="font-serif text-lg font-bold text-[#42210b] mb-4">
                Your Details
              </h2>
              <div className="flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40 ${errors.name ? "border-red-400" : "border-[#ebdccb]"}`}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40 ${errors.phone ? "border-red-400" : "border-[#ebdccb]"}`}
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Pickup / Delivery */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-2">
                    Order Type
                  </label>
                  <div className="flex gap-3">
                    {["Pickup", "Delivery"].map((pref) => (
                      <button
                        key={pref}
                        type="button"
                        onClick={() =>
                          setForm((f) => ({ ...f, preference: pref }))
                        }
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-colors ${
                          form.preference === pref
                            ? "bg-[#42210b] text-white border-[#42210b]"
                            : "bg-white text-stone-700 border-[#ebdccb] hover:border-[#c8822a]"
                        }`}
                      >
                        {pref}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Address */}
                {form.preference === "Delivery" && (
                  <div>
                    <label
                      htmlFor="address"
                      className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-1"
                    >
                      Delivery Address *
                    </label>
                    <textarea
                      id="address"
                      value={form.address}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, address: e.target.value }))
                      }
                      rows={2}
                      className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40 resize-none ${errors.address ? "border-red-400" : "border-[#ebdccb]"}`}
                      placeholder="Your full delivery address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                )}

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="date"
                      className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-1"
                    >
                      Preferred Date *
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, date: e.target.value }))
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40 ${errors.date ? "border-red-400" : "border-[#ebdccb]"}`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="time"
                      className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-1"
                    >
                      Preferred Time *
                    </label>
                    <input
                      id="time"
                      type="time"
                      value={form.time}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, time: e.target.value }))
                      }
                      className={`w-full px-3 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40 ${errors.time ? "border-red-400" : "border-[#ebdccb]"}`}
                    />
                    {errors.time && (
                      <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Cake message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-[#42210b] block mb-1"
                  >
                    Cake Message / Special Instructions
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    rows={2}
                    maxLength={300}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#ebdccb] text-sm focus:outline-none focus:ring-2 focus:ring-[#c8822a]/40 resize-none"
                    placeholder='e.g. "Happy Birthday Priya! 🎂" or custom decoration notes'
                  />
                </div>

                {/* Place order via WhatsApp */}
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#c8822a] hover:bg-[#42210b] text-white font-bold text-sm shadow-lg transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chat
                  </span>
                  Place Order via WhatsApp
                </button>

                <p className="text-[11px] text-stone-500 text-center leading-relaxed">
                  Clicking above will open WhatsApp with your order details
                  pre-filled. Your order is confirmed once {siteConfig.owner}{" "}
                  responds on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
