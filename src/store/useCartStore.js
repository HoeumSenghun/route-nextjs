'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const items = get().items
        const existing = items.find((i) => i.id === product.id)
        if (existing) {
          set({
            items: items.map((i) =>
              i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
            )
          })
          return
        }
        set({ items: [...items, { ...product, quantity: 1 }] })
      },
      removeFromCart: (productId) => {
        set({ items: get().items.filter((i) => i.id !== productId) })
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }
        set({
          items: get().items.map((i) =>
            i.id === productId ? { ...i, quantity } : i
          )
        })
      },
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'nextapp-cart',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export function selectCartItemCount (state) {
  return state.items.reduce((n, i) => n + i.quantity, 0)
}
