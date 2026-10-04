import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center bg-[#fdf9f2] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative inline-flex items-center justify-center">
          <div className="w-24 h-24 rounded-3xl bg-[#c8822a]/10 flex items-center justify-center text-[#c8822a] border border-[#c8822a]/20">
            <span className="material-symbols-outlined text-5xl">cookie</span>
          </div>
          <span className="absolute -top-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#42210b] text-[#fdf9f2] font-mono text-xs font-bold tracking-wider">
            404
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#42210b]">
            Crumb Not Found!
          </h1>
          <p className="text-sm sm:text-base text-[#42210b]/75 leading-relaxed">
            The confection you are looking for has either been enjoyed down to the last crumb, or was never on our baking sheet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#42210b] hover:bg-[#280d00] text-[#fdf9f2] font-medium text-sm transition-colors shadow-sm"
          >
            Back to Homepage
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c8822a] hover:bg-[#b07223] text-white font-medium text-sm transition-colors shadow-sm"
          >
            Browse Fresh Menu
          </Link>
        </div>

        <div className="pt-6 border-t border-[#ebdccb]">
          <p className="text-xs text-[#42210b]/60 mb-2">Need help finding a specific cake or placing an urgent order?</p>
          <a
            href={whatsappUrl("Hi Brown Town! I got a 404 page while browsing your website and need help finding an item.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e7b34] hover:underline"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            Chat with Chef Yogesh on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
