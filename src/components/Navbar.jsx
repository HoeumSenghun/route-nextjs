import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md transition-colors duration-300 shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <nav className="flex gap-6 text-white text-sm font-medium">
          <Link href="/" className="hover:text-black hover:bg-gray-200 transition rounded-xl duration-300 px-4 py-2">Home</Link>
          <Link href="/dashboard" className="hover:text-black hover:bg-gray-200 transition rounded-xl duration-300 px-4 py-2">Dashboard</Link>
          <Link href="/blog" className="hover:text-black hover:bg-gray-200 transition rounded-xl duration-300 px-4 py-2">Blog</Link>
          <Link href="/products" className="hover:text-black hover:bg-gray-200 transition rounded-xl duration-300 px-4 py-2">Products</Link>
          <Link href="/about" className="hover:text-black hover:bg-gray-200 transition rounded-xl duration-300 px-4 py-2">About</Link>
        </nav>

      </div>
    </header>
  )
}
