"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export function ScrollToTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Scroll to top on page navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname, searchParams])

  // This component doesn't render anything
  return null
}