// Cart store using localStorage for persistence — no backend required.
// Compatible with React 19 / Next.js 16 App Router (client-only).

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/lib/products";

export interface CartItem {
  productId: string;
  productSlug: string;
  productName: string;
  productImage: string;
  selectedSize: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product, size: string, price: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, size, price) => {
        const existing = get().items.find(
          (i) => i.productId === product.id && i.selectedSize === size
        );
        if (existing) {
          set((state) => ({
            items: state.items.map((i) =>
              i.productId === product.id && i.selectedSize === size
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          }));
        } else {
          set((state) => ({
            items: [
              ...state.items,
              {
                productId: product.id,
                productSlug: product.slug,
                productName: product.name,
                productImage: product.image,
                selectedSize: size,
                price,
                quantity: 1,
              },
            ],
          }));
        }
      },

      removeItem: (productId, size) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.selectedSize === size)
          ),
        }));
      },

      updateQuantity: (productId, size, quantity) => {
        if (quantity < 1) {
          get().removeItem(productId, size);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.selectedSize === size
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () => get().items.reduce((acc, i) => acc + i.quantity, 0),

      subtotal: () =>
        get().items.reduce((acc, i) => acc + i.price * i.quantity, 0),
    }),
    {
      name: "brown-town-cart",
    }
  )
);
