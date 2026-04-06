'use client'

import { useState } from 'react'
import { FiUser } from 'react-icons/fi'
import LoginModal from './LoginModal'

export function UserLoginButton () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-white transition rounded-xl duration-300 px-4 py-2 hover:text-black hover:bg-gray-200"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <FiUser size={20} aria-hidden />
        <span className="hidden sm:inline">Login</span>
      </button>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
