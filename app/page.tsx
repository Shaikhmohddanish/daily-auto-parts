import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RequestQuoteForm } from "@/components/request-quote-form"
import { QuickSearchForm } from "@/components/quick-search-form"
import { TopBrands } from "@/components/top-brands"
import { Counter } from "@/components/ui/counter"
import { partsData } from "@/lib/parts-data"
import { Shield, Truck, Award, HeadphonesIcon, CheckCircle, Star, Package } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Verified Fitment",
      description: "We match parts to your exact vehicle specs using VIN and OEM numbers",
    },
    {
      icon: Truck,
      title: "Nationwide Sourcing",
      description: "Access to quality OEM, aftermarket, and tested used parts across the US",
    },
    {
      icon: Shield,
      title: "Warranty Options",
      description: "Flexible warranty coverage from 30 to 180 days on most parts",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "Real people ready to help with fitment questions and order tracking",
    },
  ]

  const testimonials = [
    {
      name: "Michael R.",
      location: "Denver, CO",
      rating: 5,
      text: "Found the exact transmission I needed for my F-150 at a great price. Fast shipping and excellent communication!",
    },
    {
      name: "Sarah K.",
      location: "Austin, TX",
      rating: 5,
      text: "The team helped me verify fitment for my BMW. Part arrived quickly and was exactly as described. Highly recommend!",
    },
    {
      name: "James T.",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Best experience buying used auto parts online. Quality parts, fair pricing, and they stand behind their warranty.",
    },
    {
      name: "Lisa M.",
      location: "Seattle, WA",
      rating: 5,
      text: "Needed an engine for my Toyota Camry. They sourced it quickly and the installation went perfectly. Great service!",
    },
  ]

  const popularParts = partsData.slice(0, 20)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  OEM-Grade & Quality Used Auto Parts
                </h1>
                <p className="text-pretty text-base md:text-lg lg:text-xl text-muted-foreground">Fast Quotes, Friendly Support</p>
                <p className="text-pretty text-sm md:text-base text-muted-foreground">
                  Find the exact part for your vehicle. New, remanufactured & quality-tested used parts.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <Link href="/parts">Browse Parts</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                  <Link href="#quote-form">Get a Quote</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
                <Badge variant="secondary" className="gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                  <Shield className="h-3 w-3 md:h-4 md:w-4" />
                  Secure Checkout
                </Badge>
                <Badge variant="secondary" className="gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                  <Award className="h-3 w-3 md:h-4 md:w-4" />
                  Warranty Available
                </Badge>
                <Badge variant="secondary" className="gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                  <Truck className="h-3 w-3 md:h-4 md:w-4" />
                  Fast Shipping
                </Badge>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <Image
                src="/hero-car.png"
                alt="Quality auto parts for all major vehicle brands"
                width={800}
                height={600}
                className="h-auto w-full rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="border-y bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Top Brands We Serve</h2>
          <TopBrands />
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold">Find Your Part Fast</h2>
              <p className="text-muted-foreground">Select your vehicle details to see available parts</p>
            </div>
            <QuickSearchForm />
          </div>
        </div>
      </section>

      {/* Parts Categories Section */}
      <section className="bg-muted/20 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold">Shop by Category</h2>
            <p className="text-muted-foreground text-sm md:text-base">Browse parts by vehicle system</p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Engine Components", icon: "🔧", description: "Engines, alternators, starters" },
              { name: "Transmission", icon: "⚙️", description: "Manual & automatic transmissions" },
              { name: "Brake System", icon: "🛑", description: "Pads, rotors, calipers" },
              { name: "Suspension", icon: "🏗️", description: "Struts, shocks, springs" },
              { name: "Electrical", icon: "⚡", description: "Lights, sensors, modules" },
              { name: "Body Parts", icon: "🚗", description: "Doors, bumpers, fenders" },
              { name: "Interior", icon: "🪑", description: "Seats, consoles, trim" },
              { name: "Climate Control", icon: "❄️", description: "AC compressors, heaters" },
            ].map((category) => (
              <Link key={category.name} href={`/parts?category=${encodeURIComponent(category.name)}`}>
                <Card className="group h-full transition-all hover:shadow-lg hover:border-primary">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="text-3xl md:text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-sm md:text-base mb-2">{category.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Parts Catalogue Preview */}
      <section className="bg-muted/20 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold">Popular Auto Parts</h2>
            <p className="text-muted-foreground text-sm md:text-base">Browse our most requested parts or search our full catalogue</p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {popularParts.map((part) => (
              <Link key={part.slug} href={part.link}>
                <Card className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <Image
                      src={part.image || "/placeholder.svg"}
                      alt={part.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-3 md:p-4">
                    <h3 className="text-sm md:text-base font-semibold leading-tight">{part.name}</h3>
                    <p className="mt-1 md:mt-2 text-xs md:text-sm text-primary">View Part →</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/parts">View Full Catalogue</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Daily Auto Parts Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold">Why Daily Auto Parts?</h2>
            <p className="text-muted-foreground text-sm md:text-base">Quality parts, reliable service, and expert support</p>
          </div>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="p-4 md:p-6">
                  <div className="mb-3 md:mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-sm md:text-base font-semibold">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts Showcase */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold">Featured Auto Parts</h2>
            <p className="text-muted-foreground text-sm md:text-base">Discover our most popular and high-quality parts</p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {[
              { name: "AC Compressor", image: "/ac-compressor.png" },
              { name: "Air Filter", image: "/air-filter.png" },
              { name: "Fender", image: "/fender.png" },
              { name: "Fog Lamp", image: "/fog-lamp.jpg" },
              { name: "Steering Wheel", image: "/steering.png" },
              { name: "Wheel", image: "/wheel.png" },
            ].map((part) => (
              <Link key={part.name} href={`/parts/${part.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <Image
                      src={part.image}
                      alt={part.name}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h3 className="text-sm font-semibold text-center">{part.name}</h3>
                    <p className="mt-1 text-xs text-primary text-center">Get Quote →</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="bg-muted/20 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 text-2xl md:text-3xl font-bold">Quality You Can Trust</h2>
              <p className="mb-6 text-muted-foreground">
                Every part we sell goes through rigorous quality checks to ensure it meets our high standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold">Multi-Point Inspection</h4>
                    <p className="text-sm text-muted-foreground">Each part undergoes comprehensive testing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold">OEM Specifications</h4>
                    <p className="text-sm text-muted-foreground">Parts match original manufacturer standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-semibold">Professional Packaging</h4>
                    <p className="text-sm text-muted-foreground">Secure packaging prevents shipping damage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/car-engine-block.jpg"
                alt="Quality engine parts"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="/car-brake-rotors.jpg"
                alt="Quality brake parts"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="/car-transmission.png"
                alt="Quality transmission"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <Image
                src="/car-alternator.jpg"
                alt="Quality alternator"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Source Parts Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold">How We Source Your Parts</h2>
            <p className="text-muted-foreground text-sm md:text-base">Our proven process ensures you get the right part at the best price</p>
          </div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🔍
              </div>
              <h3 className="mb-2 text-lg font-semibold">1. Search & Locate</h3>
              <p className="text-sm text-muted-foreground">
                We search our nationwide network of verified suppliers and salvage yards to find your exact part
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                ✅
              </div>
              <h3 className="mb-2 text-lg font-semibold">2. Inspect & Test</h3>
              <p className="text-sm text-muted-foreground">
                Every used part is thoroughly inspected and tested to meet our quality standards before shipping
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl">
                📦
              </div>
              <h3 className="mb-2 text-lg font-semibold">3. Package & Ship</h3>
              <p className="text-sm text-muted-foreground">
                Parts are professionally packaged and shipped with tracking information and warranty documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Coverage Section */}
      <section className="bg-muted/20 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-4 text-2xl md:text-3xl font-bold">Extensive Vehicle Coverage</h2>
              <p className="mb-6 text-muted-foreground">
                We source parts for virtually all makes and models, from everyday drivers to luxury and exotic vehicles.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Domestic Brands</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ford, GM, Chrysler</li>
                    <li>• Cadillac, Lincoln, Buick</li>
                    <li>• Jeep, Ram, Dodge</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Import Brands</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Toyota, Honda, Nissan</li>
                    <li>• BMW, Mercedes, Audi</li>
                    <li>• Volvo, Subaru, Mazda</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/parts">Browse All Brands →</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    <Counter end={15} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    <Counter end={500} suffix="K+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Parts Sold</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    <Counter end={1000} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Supplier Network</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-2xl font-bold text-primary">
                    <Counter end={98} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">4.8/5 from 1,200+ customers</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-3 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed">{testimonial.text}</p>
                  <div className="text-sm">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Return & Refund Callout */}
      <section className="border-y py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-3 text-2xl font-bold">Flexible Return & Refund Policy</h3>
            <p className="mb-4 text-muted-foreground">
              We stand behind our parts with flexible warranty options and a fair return policy. Most parts come with
              30-180 day warranty coverage.
            </p>
            <Button asChild variant="link">
              <Link href="/warranty">Learn More About Our Warranty Policies →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Shipping & Delivery Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="mb-3 text-2xl md:text-3xl font-bold">Fast & Reliable Shipping</h2>
            <p className="text-muted-foreground text-sm md:text-base">Get your parts quickly with our nationwide shipping network</p>
          </div>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 font-semibold">Same Day Processing</h3>
                <p className="text-sm text-muted-foreground">Orders placed before 2 PM ship the same day</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Package className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 font-semibold">Secure Packaging</h3>
                <p className="text-sm text-muted-foreground">Professional packaging prevents damage during transit</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="mb-2 font-semibold">Insured Shipping</h3>
                <p className="text-sm text-muted-foreground">All shipments are fully insured for your protection</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <HeadphonesIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-2 font-semibold">Real-Time Tracking</h3>
                <p className="text-sm text-muted-foreground">Track your order from our warehouse to your door</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              <strong>Free shipping</strong> on orders over $150 • <strong>Expedited shipping</strong> available
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary">UPS Ground</Badge>
              <Badge variant="secondary">FedEx Express</Badge>
              <Badge variant="secondary">USPS Priority</Badge>
              <Badge variant="secondary">Freight Available</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Quote Form Section */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* FAQ Teaser */}
            <div>
              <h2 className="mb-8 text-center lg:text-left text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="mb-2 font-semibold text-sm md:text-base">Do you sell OEM, aftermarket, or used parts?</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      We offer all three! OEM parts for exact factory specs, quality aftermarket alternatives, and
                      thoroughly tested used parts at great prices.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="mb-2 font-semibold text-sm md:text-base">How do I confirm fitment for my vehicle?</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Include your VIN when requesting a quote. We'll match it to OEM part numbers to ensure perfect
                      fitment for your specific vehicle.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="mb-2 font-semibold text-sm md:text-base">What warranty options are available?</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Most parts come with 30, 90, or 180-day warranty options. Exact coverage is confirmed on your
                      invoice.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 md:mt-8 text-center lg:text-left">
                <Button asChild variant="outline">
                  <Link href="/faq">View All FAQs</Link>
                </Button>
              </div>
            </div>

            {/* Quote Form */}
            <div id="quote-form">
              <div className="mb-6 md:mb-8 text-center lg:text-left">
                <h2 className="mb-3 text-2xl md:text-3xl font-bold">Get a Fast Quote</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Fill out the form below and we'll get back to you with pricing and availability
                </p>
              </div>
              <RequestQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
