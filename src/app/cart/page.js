'use client'

import Link from 'next/link'
import { useCartStore } from '@/src/store/useCartStore'

export default function CartPage () {
  const items = useCartStore((s) => s.items)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const removeFromCart = useCartStore((s) => s.removeFromCart)
  const clearCart = useCartStore((s) => s.clearCart)

  const total = items.reduce(
    (sum, i) => sum + Number(i.price) * i.quantity,
    0
  )

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h1>
        <p className="text-gray-600 mb-6">Add products from the shop to see them here.</p>
        <Link
          href="/products"
          className="inline-flex rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
        >
          Browse products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pb-12">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Cart</h1>
        <button
          type="button"
          onClick={() => clearCart()}
          className="text-sm text-red-600 hover:text-red-800 underline"
        >
          Clear cart
        </button>
      </div>

      <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg bg-white">
        {items.map((item) => (
          <li key={item.id} className="flex gap-4 p-4 flex-wrap sm:flex-nowrap">
            <div className="w-24 h-24 shrink-0 bg-gray-50 rounded-md overflow-hidden flex items-center justify-center p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-medium text-gray-900 line-clamp-2">{item.title}</h2>
              <p className="text-sm text-gray-500 mt-1">${Number(item.price).toFixed(2)} each</p>
              <div className="mt-3 flex items-center gap-3">
                <label className="sr-only" htmlFor={`qty-${item.id}`}>Quantity</label>
                <input
                  id={`qty-${item.id}`}
                  type="number"
                  min={1}
                  max={999}
                  value={item.quantity}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10)
                    if (Number.isNaN(v)) return
                    updateQuantity(item.id, v)
                  }}
                  className="w-16 rounded border border-gray-300 px-2 py-1 text-sm"
                />
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="w-full sm:w-auto text-right sm:text-right font-semibold text-gray-900">
              ${(Number(item.price) * item.quantity).toFixed(2)}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center text-lg">
        <span className="font-medium text-gray-700">Total</span>
        <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Checkout is not connected — this is a demo cart.
      </p>
    </div>
  )
}
