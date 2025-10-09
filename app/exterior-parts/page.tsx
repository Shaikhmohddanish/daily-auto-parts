import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RequestQuoteFormCompact } from "@/components/request-quote-form-compact"
import { PartFitmentTool } from "@/components/part-fitment-tool"
import { Counter } from "@/components/ui/counter"
import { TopBrands } from "@/components/top-brands"
import { partsData } from "@/lib/parts-data"
import { Phone, Truck, Shield, Package, CheckCircle, Search, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Used Exterior Auto Parts | Daily Auto Parts",
  description: "Quality used exterior parts including bumpers, fenders, doors, mirrors, and body panels. Fast quotes, nationwide shipping, and warranty options available.",
  keywords: ["used exterior parts", "car body parts", "bumpers", "fenders", "doors", "mirrors", "auto salvage"],
  openGraph: {
    title: "Used Exterior Auto Parts | Daily Auto Parts",
    description: "Find quality used exterior parts for your vehicle with fast quotes and nationwide shipping.",
  },
}

export default function ExteriorPartsPage() {
  // Filter exterior parts from our parts data
  const exteriorParts = partsData.filter(part => 
    part.category === "Body Parts" || 
    part.category === "Lighting" ||
    part.name.toLowerCase().includes("bumper") ||
    part.name.toLowerCase().includes("fender") ||
    part.name.toLowerCase().includes("door") ||
    part.name.toLowerCase().includes("mirror") ||
    part.name.toLowerCase().includes("headlight") ||
    part.name.toLowerCase().includes("tail")
  )

  const vehicleBrands = [
    { name: "Chrysler", models: ["200", "300", "Town & Country"] },
    { name: "Chevrolet", models: ["Malibu", "Impala", "Equinox"] },
    { name: "Honda", models: ["Accord", "Odyssey", "Pilot"] },
    { name: "Hyundai", models: ["Elantra", "Santa Fe", "Sonata"] },
    { name: "Nissan", models: ["Altima", "Rogue", "Sentra"] },
    { name: "Ford", models: ["Escape", "Fusion", "Focus"] },
    { name: "Toyota", models: ["Camry", "Matrix", "Prius"] },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Used Exterior Parts</h1>
            <div className="flex items-center justify-center gap-4 text-lg mb-12">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">Call (888) 888-8888 (Toll-Free)</span>
              <span className="text-muted-foreground">To Talk With Our Mechanic</span>
            </div>
          </div>

          {/* Find Your Right Part Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Find Your Right Part</h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">Select your vehicle details to find the perfect auto part</p>
            </div>
            
            {/* Single Card with Internal Layout */}
            <Card className="w-full">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                {/* Mobile: Compact stacked, Desktop: Side by side */}
                <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
                  {/* Fitment Tool */}
                  <div className="lg:border-r lg:pr-8">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Check Compatibility</h3>
                      <p className="text-sm text-muted-foreground">Verify part fitment for your vehicle</p>
                    </div>
                    <PartFitmentTool />
                  </div>
                  
                  {/* Quote Form */}
                  <div className="lg:pl-0">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Get Quote</h3>
                      <p className="text-sm text-muted-foreground">Request pricing and availability</p>
                    </div>
                    <RequestQuoteFormCompact initialPart="Exterior Parts" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Modern Auto Recycling Network</h2>
            <div className="prose prose-lg max-w-none text-center mb-12">
              <p className="text-lg leading-relaxed">
                We are a modern auto recycling facility with the network of 4000+ junkyards all over United States, 
                not to be confused with the old junkyard dog mentality of the past. We are focused on delivering high quality, 
                used automotive parts. Our inventory is updated daily consisting of cars, pick-up trucks vans and SUV's for 
                both foreign and domestic vehicles.
              </p>
              <p className="text-lg leading-relaxed">
                All our parts are cleaned, tested and cataloged into our computerized inventory system. The vast majority 
                of our parts are photographed and then all of our inventory is put online to better serve you 24 hours a day, 
                7 days a week.
              </p>
              <p className="text-lg leading-relaxed">
                We offer fast nationwide shipping with UPS and or LTL freight trucks.
              </p>
              <p className="text-lg leading-relaxed">
                Our warranty programs provide peace of mind for our customers as we want to ensure you are getting the highest 
                quality used parts available. Browse through our site to find the right car part – right now!
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Quality Parts</h3>
                  <p className="text-sm text-muted-foreground">Cleaned, tested & cataloged</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Fast Shipping</h3>
                  <p className="text-sm text-muted-foreground">UPS & LTL freight nationwide</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Warranty</h3>
                  <p className="text-sm text-muted-foreground">Peace of mind programs</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">24/7 Service</h3>
                  <p className="text-sm text-muted-foreground">Online inventory access</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Brands We Are Serving</h2>
          <TopBrands />
        </div>
      </section>

      {/* Exterior Parts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Exterior Parts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exteriorParts.map((part) => (
              <Link key={part.slug} href={part.link}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <Image
                      src={part.image || "/placeholder.svg"}
                      alt={part.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{part.name}</h3>
                    {part.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {part.description}
                      </p>
                    )}
                    <Badge variant="secondary" className="mb-2">{part.category}</Badge>
                    <p className="text-sm text-primary">View Details →</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* We Sell Used Parts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">We Sell Used Parts</h2>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed">
                We are a full service salvage yard because we value your time and don't want you to waste it pulling auto parts. 
                At our salvage yard and auto parts store, we'll pull the used auto parts for you, and help you find whatever make 
                and model of car part, rebuilt transmission, or truck part you need in our junkyard. You don't have to bring your 
                own tools or go on a lengthy search for the part you need. We are also in touch with a large network of salvage 
                yards that we will access if we don't have the used car part, used engine, or wheel you need on site at our junkyard.
              </p>
              <p className="text-lg leading-relaxed">
                At Daily Auto Parts your satisfaction with your used car part or rebuilt transmission is our passion. We offer 
                both 90 day and extended warranties on all the parts we sell. When you shop at Daily Auto Parts, you can take 
                pride in supporting the local community and economy, just as we do. We provide friendly customer service at our 
                full service salvage yard.
              </p>
              <p className="text-lg leading-relaxed">
                Quality, Clean, Inspected, and Guaranteed used auto parts from Daily Auto Parts. Who has the best used auto parts 
                United States has to offer? Well if you are trying to save time and money on anything from an entire new engine 
                to a small interior part, check out Daily Auto Parts.
              </p>
              <p className="text-lg leading-relaxed">
                No part is too big or too small. If you are looking for a replacement transmission, fender, or used engine for 
                your vehicle, check out our inventory. If you think your car or truck is too old or too new, give us a try. 
                We just might surprise you! Fast, easy and affordable that's Daily Auto Parts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Brands Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">We have used engines for trucks, SUV's, hybrids, foreign & domestic cars such as:</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vehicleBrands.map((brand) => (
              <Card key={brand.name}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">{brand.name}</h3>
                  <div className="space-y-1">
                    {brand.models.map((model) => (
                      <p key={model} className="text-sm text-muted-foreground">{model}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg">
              Each and every used engine is inspected, cleaned, and guaranteed for six months. There is no auto parts store 
              that is big enough to house each and every part that has ever been made, but if we don't have it, our team of 
              experts will find it for you.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={21000} suffix="+" />
              </div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={240} suffix="+" />
              </div>
              <div className="text-muted-foreground">Cars in Garage</div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={21000} suffix="k+" />
              </div>
              <div className="text-muted-foreground">Total Miles Driven</div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter end={24} suffix="+" />
              </div>
              <div className="text-muted-foreground">Auto Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Exterior Part?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free quote today and experience our quality service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+18888888888">
                <Phone className="mr-2 h-4 w-4" />
                Call (888) 888-8888
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact" className="text-black">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}