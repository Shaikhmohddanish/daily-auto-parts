"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo } from "react"

// Hardcoded IDs to avoid missing tags across all pages
const GOOGLE_ADS_ID = "AW-17770283333"
const GA_MEASUREMENT_ID = ""

export function GoogleTag() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pagePath = useMemo(() => {
    const query = searchParams?.toString()
    return query ? `${pathname}?${query}` : pathname
  }, [pathname, searchParams])

  useEffect(() => {
    if (typeof window === "undefined" || !(window as any).gtag) return

    if (GA_MEASUREMENT_ID) {
      ;(window as any).gtag("config", GA_MEASUREMENT_ID, {
        page_path: pagePath,
      })
    }

    if (GOOGLE_ADS_ID) {
      ;(window as any).gtag("config", GOOGLE_ADS_ID, {
        page_path: pagePath,
      })
    }
  }, [pagePath])

  if (!GOOGLE_ADS_ID && !GA_MEASUREMENT_ID) return null

  const primaryId = GOOGLE_ADS_ID || GA_MEASUREMENT_ID

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });` : ""}
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}', { send_page_view: false });` : ""}
        `}
      </Script>
    </>
  )
}
