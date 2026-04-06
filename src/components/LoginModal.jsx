'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function LoginModal ({ isOpen, onClose }) {
  const [form, setForm] = useState({ email: '', password: '' })

  useEffect(() => {
    if (!isOpen) return
    function onKey (e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, onClose])

  function handleOverlayClick (e) {
    if (e.target === e.currentTarget) onClose()
  }

  function handleChange (e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit (e) {
    e.preventDefault()
    // UI only — no auth
  }

  if (!isOpen) return null

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4"
    >
      <div
        className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2 id="login-modal-title" className="text-2xl font-semibold text-gray-800">
              Welcome back
            </h2>
            <p className="mt-1 text-sm text-gray-500">Sign in to your account</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800 cursor-pointer"
            aria-label="Close"
          >
            <span className="text-xl leading-none" aria-hidden>×</span>
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login-email" className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="you@email.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100 transition duration-150"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label htmlFor="login-password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <span className="text-xs text-gray-600 cursor-pointer">Forgot password?</span>
            </div>
            <input
              id="login-password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100 transition duration-150"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-gray-600 py-2.5 text-sm font-medium text-white hover:bg-gray-700 active:scale-[0.98] transition duration-150 cursor-pointer"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-gray-300 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 active:scale-[0.98] transition duration-150 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Do not have an account?{' '}
          <span className="font-medium text-black-600 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  )

  if (typeof document === 'undefined') return null

  return createPortal(modal, document.body)
}
