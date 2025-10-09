import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RequestQuoteForm } from "@/components/request-quote-form"
import { Shield, Truck, Users, Award, CheckCircle, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Daily Auto Parts",
  description:
    "Learn about Daily Auto Parts - your trusted source for OEM, aftermarket, and quality used auto parts with nationwide shipping and expert support.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-4xl font-bold">About Daily Auto Parts</h1>
          <p className="text-lg text-muted-foreground">
            Your trusted partner for quality auto parts and exceptional service
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Daily Auto Parts, we're committed to providing reliable auto parts sourcing, transparent pricing, and
              expert fitment support. Whether you're a DIY enthusiast, professional mechanic, or repair shop owner, we
              help you find the exact parts you need at competitive prices. Our goal is to make auto parts purchasing
              simple, trustworthy, and hassle-free.
            </p>
          </CardContent>
        </Card>

        {/* How We Work */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="mb-6 text-2xl font-bold">How We Work</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Nationwide Sourcing Network</h3>
                  <p className="text-sm text-muted-foreground">
                    We work with a trusted network of suppliers across the United States to source OEM, quality
                    aftermarket, and thoroughly tested used parts. This gives you access to a wide selection and
                    competitive pricing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Quality Checks & Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Used parts undergo inspection and testing before shipping. We verify functionality and condition to
                    ensure you receive parts that meet our quality standards. All parts come with warranty options for
                    your protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Fast & Secure Shipping</h3>
                  <p className="text-sm text-muted-foreground">
                    We handle logistics to get parts to you quickly and safely. Most orders ship within 1-2 business
                    days with tracking provided. Large items like engines and transmissions are professionally packaged
                    and shipped via freight.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Coverage */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Nationwide Coverage</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We ship auto parts throughout the United States, serving individual customers, mechanics, and repair
                shops from coast to coast. Our centralized location in Sheridan, Wyoming, combined with our nationwide
                supplier network, allows us to source and deliver parts efficiently.
              </p>
              <div className="rounded-lg bg-muted p-4">
                <p className="mb-2 font-semibold text-foreground">Contact Information</p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:8888888888" className="text-primary">
                    888-888-8888
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> 30 N Gould St, STE N, Sheridan, WY 82801
                </p>
                <p>
                  <strong>Hours:</strong> Monday - Saturday, 8:00 AM - 6:00 PM MT
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="mb-6 text-2xl font-bold">Our Values</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <Users className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Real People, Real Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Talk to knowledgeable parts specialists who understand fitment and can answer your questions
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Transparent Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    No hidden fees or surprises. We provide clear quotes with all costs included
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Award className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">
                    Every part is inspected and backed by warranty options for your peace of mind
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Truck className="h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-1 font-semibold">Fast Response Times</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick quotes, fast shipping, and responsive customer service when you need help
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust & Security */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="mb-4 text-2xl font-bold">Trust & Security</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We take your privacy and security seriously. All transactions are processed securely, and we never share
                your personal information with third parties for marketing purposes. Our fraud prevention measures
                protect both you and us from unauthorized transactions.
              </p>
              <p>
                For complete details on how we handle your information, please review our{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="rounded-lg border bg-primary/5 p-8 text-center">
          <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h3 className="mb-2 text-xl font-bold">Ready to Find Your Part?</h3>
          <p className="mb-6 text-muted-foreground">Request a quote and experience the Daily Auto Parts difference</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href="tel:8888888888">Call 888-888-8888</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/parts">Browse Parts</Link>
            </Button>
          </div>
        </div>

        {/* Quote Form */}
        <div className="mt-12">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold">Get a Quote</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly</p>
          </div>
          <RequestQuoteForm />
        </div>
      </div>

      {/* Schema.org AboutPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Daily Auto Parts",
            description: "Learn about Daily Auto Parts and our commitment to quality auto parts and service",
            url: "https://dailyautoparts.com/about",
          }),
        }}
      />
    </div>
  )
}
