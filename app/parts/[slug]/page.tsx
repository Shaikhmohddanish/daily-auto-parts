import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RequestQuoteForm } from "@/components/request-quote-form"
import { PartFitmentTool } from "@/components/part-fitment-tool"
import { partsData } from "@/lib/parts-data"
import { ChevronRight, Package, Shield, Truck, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

interface PartPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return partsData.map((part) => ({
    slug: part.slug,
  }))
}

export async function generateMetadata({ params }: PartPageProps): Promise<Metadata> {
  const { slug } = await params
  const part = partsData.find((p) => p.slug === slug)

  if (!part) {
    return {
      title: "Part Not Found",
    }
  }

  return {
    title: `${part.name} | Daily Auto Parts`,
    description: part.description || `Find quality ${part.name} for your vehicle. OEM, aftermarket, and tested used options available. Fast quotes and expert fitment support.`,
    openGraph: {
      title: `${part.name} | Daily Auto Parts`,
      description: part.description || `Quality ${part.name} with warranty options and expert support`,
      images: [part.image],
    },
  }
}

export default async function PartPage({ params }: PartPageProps) {
  const { slug } = await params
  const part = partsData.find((p) => p.slug === slug)

  if (!part) {
    notFound()
  }

  const relatedParts = partsData.filter((p) => p.slug !== part.slug).slice(0, 6)

  const specs = [
    { label: "Condition Options", value: "New, Remanufactured, Used" },
    { label: "Warranty", value: "30-180 days available" },
    { label: "Core Charge", value: "May apply (refundable)" },
    { label: "Shipping", value: "2-5 business days" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/parts" className="hover:text-foreground">
          Parts Catalogue
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{part.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Image and Info */}
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border bg-muted">
            <Image
              src={part.image || "/placeholder.svg"}
              alt={part.name}
              width={800}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Specs */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-bold">Specifications</h2>
              <div className="space-y-3">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between border-b pb-2 last:border-0">
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                    <span className="text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-bold">Why Choose Us</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Quality Guaranteed</p>
                    <p className="text-sm text-muted-foreground">All parts tested and verified before shipping</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Warranty Protection</p>
                    <p className="text-sm text-muted-foreground">Flexible warranty options up to 180 days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Fast Shipping</p>
                    <p className="text-sm text-muted-foreground">Most orders ship within 1-2 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Secure Packaging</p>
                    <p className="text-sm text-muted-foreground">Professional packaging to prevent damage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Details and Form */}
        <div className="space-y-6">
          <div>
            <h1 className="mb-3 text-4xl font-bold">{part.name}</h1>
            {part.description && (
              <p className="mb-4 text-lg text-muted-foreground">{part.description}</p>
            )}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">OEM Available</Badge>
              <Badge variant="secondary">Aftermarket Available</Badge>
              <Badge variant="secondary">Used Available</Badge>
              {part.category && <Badge variant="outline">{part.category}</Badge>}
            </div>
          </div>

          {/* Part Details */}
          {(part.commonIssues || part.compatibility || part.avgLifespan) && (
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-bold">Part Information</h3>
                <div className="space-y-4">
                  {part.compatibility && (
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Compatibility</h4>
                      <p className="text-sm text-muted-foreground">{part.compatibility}</p>
                    </div>
                  )}
                  {part.avgLifespan && (
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Average Lifespan</h4>
                      <p className="text-sm text-muted-foreground">{part.avgLifespan}</p>
                    </div>
                  )}
                  {part.commonIssues && part.commonIssues.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Common Issues</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {part.commonIssues.map((issue, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Fitment Tool */}
          <PartFitmentTool />

          {/* Compatibility Notes */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="mb-3 font-semibold">Compatibility & Fitment</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Important:</strong> For best results, include your Vehicle Identification Number (VIN) when
                  requesting a quote. This allows us to match the exact OEM part number for your specific vehicle.
                </p>
                <p>
                  Fitment can vary based on trim level, engine type, transmission, and production date. Our parts
                  specialists will verify compatibility before confirming your order.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quote Form */}
          <RequestQuoteForm initialPart={part.name} />

          {/* Legal Notice */}
          <p className="text-center text-xs text-muted-foreground">
            All manufacturer names and logos are used for identification purposes only.
          </p>
        </div>
      </div>

      {/* Related Parts */}
      <section className="mt-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Related Parts</h2>
          <Button asChild variant="outline">
            <Link href="/parts">View All Parts</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {relatedParts.map((relatedPart) => (
            <Link key={relatedPart.slug} href={relatedPart.link}>
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square overflow-hidden bg-muted">
                  <Image
                    src={relatedPart.image || "/placeholder.svg"}
                    alt={relatedPart.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-3">
                  <h3 className="text-sm font-semibold">{relatedPart.name}</h3>
                  <p className="mt-1 text-xs text-primary">View Part →</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Schema.org Product Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: part.name,
            image: part.image,
            description: part.description || `Quality ${part.name} for various vehicle makes and models`,
            brand: {
              "@type": "Brand",
              name: "Various",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
              },
            },
          }),
        }}
      />
    </div>
  )
}
