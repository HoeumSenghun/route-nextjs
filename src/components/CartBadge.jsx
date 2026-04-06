'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { selectCartItemCount, useCartStore } from '@/src/store/useCartStore'

export function CartBadge () {
  const count = useCartStore(selectCartItemCount)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const displayCount = mounted ? count : 0

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 text-white transition rounded-xl duration-300 px-4 py-2 hover:text-black hover:bg-gray-200"
      aria-label={`Shopping cart, ${displayCount} items`}
    >
      <FiShoppingCart size={20} />
      <span className="hidden sm:inline">Cart</span>
      {displayCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-4.5 h-4.5 flex items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-gray-900 px-1">
          {displayCount > 99 ? '99+' : displayCount}
        </span>
      )}
    </Link>
  )
}
