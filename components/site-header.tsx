"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Parts Catalogue", href: "/parts" },
    { name: "Exterior Parts", href: "/exterior-parts" },
    { name: "Interior Parts", href: "/interior-parts" },
    { name: "Shipping", href: "/shipping" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Warranty", href: "/warranty" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-KaL4YIzb8n9lRgqEzNTkAoU8gB6pbq.png"
            alt="Daily Auto Parts Logo"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold">Daily Auto Parts</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
          <a href="tel:8888888888" className="flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            888-888-8888
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 -mr-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:8888888888"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-muted"
            >
              <Phone className="h-4 w-4" />
              888-888-8888
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
