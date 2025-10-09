import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Parts Catalogue", href: "/parts" },
    { name: "Exterior Parts", href: "/exterior-parts" },
    { name: "Interior Parts", href: "/interior-parts" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ]

  const legalLinks = [
    { name: "Warranty Policies", href: "/warranty" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Data Protection", href: "/data-protection" },
    { name: "Advertising Policy", href: "/advertising" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Daily Auto Parts</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:8888888888" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                888-888-8888
              </a>
              <a
                href="https://maps.google.com/?q=30+N+Gould+St,+STE+N,+Sheridan,+WY+82801"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-primary"
              >
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  30 N Gould St, STE N<br />
                  Sheridan, WY 82801
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Business Hours</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Monday - Saturday</p>
              <p className="font-medium">8:00 AM - 6:00 PM</p>
              <p className="mt-2">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">&copy; {new Date().getFullYear()} Daily Auto Parts. All rights reserved.</p>
          <p className="text-xs">
            All trademarks are property of their respective owners and are used for identification purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
