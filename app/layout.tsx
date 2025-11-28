import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingPhoneButton } from "@/components/floating-phone-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL('https://dailyautoparts.com'),
  title: {
    default: "Daily Auto Parts | OEM & Quality Used Auto Parts",
    template: "%s | Daily Auto Parts"
  },
  description:
    "Find OEM-grade and quality used auto parts with fast quotes and friendly support. New, remanufactured & quality-tested used parts for all major brands with warranty options.",
  generator: "Next.js",
  applicationName: "Daily Auto Parts",
  referrer: "origin-when-cross-origin",
  keywords: [
    "auto parts",
    "car parts", 
    "OEM parts",
    "used auto parts",
    "remanufactured parts",
    "engine parts",
    "transmission parts",
    "brake parts",
    "suspension parts",
    "electrical parts",
    "body parts",
    "automotive parts",
    "vehicle parts",
    "car repair parts",
    "auto salvage parts",
    "quality auto parts",
    "affordable car parts",
    "fast shipping auto parts"
  ],
  authors: [{ name: "Daily Auto Parts" }],
  creator: "Daily Auto Parts",
  publisher: "Daily Auto Parts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dailyautoparts.com",
    siteName: "Daily Auto Parts",
    title: "Daily Auto Parts | OEM & Quality Used Auto Parts",
    description: "Fast quotes on quality auto parts for all major vehicle brands. New, used, and remanufactured parts with warranty options.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Daily Auto Parts Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Auto Parts | OEM & Quality Used Auto Parts",
    description: "Fast quotes on quality auto parts for all major vehicle brands",
    images: ["/logo.png"],
    creator: "@dailyautoparts",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "automotive",
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Daily Auto Parts" />
        <meta name="application-name" content="Daily Auto Parts" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://dailyautoparts.com" />
        <link rel="alternate" hrefLang="en-US" href="https://dailyautoparts.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17761691138" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17761691138');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              name: "Daily Auto Parts",
              description: "Quality OEM and used auto parts with fast quotes and reliable service",
              url: "https://dailyautoparts.com",
              telephone: "+18888158187",
              email: "info@dailyautoparts.com",
              foundingDate: "2020",
              currenciesAccepted: "USD",
              paymentAccepted: ["Cash", "Credit Card", "Check", "PayPal"],
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4300 W State St",
                addressLocality: "Boise",
                addressRegion: "ID",
                postalCode: "83703",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.6499325",
                longitude: "-116.2431638",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              serviceType: ["Auto Parts Sales", "Used Auto Parts", "OEM Parts", "Remanufactured Parts"],
              logo: {
                "@type": "ImageObject",
                url: "https://dailyautoparts.com/logo.png",
              },
              image: "https://dailyautoparts.com/logo.png",
              sameAs: [
                "https://www.facebook.com/dailyautoparts",
                "https://www.twitter.com/dailyautoparts",
                "https://www.instagram.com/dailyautoparts",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Auto Parts Catalog",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Engine Parts",
                      category: "Automotive",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Transmission Parts",
                      category: "Automotive",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Brake Parts",
                      category: "Automotive",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
          <FloatingPhoneButton />
          <Toaster />
        </Suspense>
        <Analytics />
        <SpeedInsights 
          sampleRate={1.0}
          debug={true}
        />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  )
}
