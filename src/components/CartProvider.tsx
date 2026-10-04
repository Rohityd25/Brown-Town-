"use client";
// CartProvider ensures Zustand localStorage hydration happens client-side only.
export default function CartProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
