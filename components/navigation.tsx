"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
    { href: "/nos-expertises", label: "Nos expertises" },
    { href: "/pourquoi-nous-choisir", label: "Pourquoi nous choisir ?" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary tracking-tight">ALL SYSTEMSCO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm xl:text-base text-foreground hover:text-primary transition-colors duration-200 font-medium whitespace-nowrap px-2 py-1 rounded-md hover:bg-muted/50"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2 xl:ml-4">
              <Link href="/contact">Contactez-nous</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 hover:bg-muted/50"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-card border-t border-border shadow-lg animate-in slide-in-from-top-2 duration-200">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-sm sm:text-base text-card-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2 pt-4">
                <Button asChild className="w-full" size="sm">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contactez-nous
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
