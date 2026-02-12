import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
    </div>
  )
}
