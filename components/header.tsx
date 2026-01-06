"use client"

import Link from "next/link"
import { Menu, ShoppingCart } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-[#1e3a5f] italic">CADLINK</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Shipping policy
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-foreground hidden sm:inline">CADlink</span>
            <Link href="#" className="relative">
              <ShoppingCart className="h-5 w-5 text-foreground" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                1
              </span>
            </Link>
            <Link
              href="https://t.co/BfWNfWCCo5"
              className="bg-[#0168A0] hover:bg-[#015580] text-white px-6 py-2 rounded text-sm font-medium transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Blog
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Contact Us
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Shipping policy
            </Link>
            <Link href="https://t.co/BfWNfWCCo5" className="text-sm font-medium text-primary">
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
