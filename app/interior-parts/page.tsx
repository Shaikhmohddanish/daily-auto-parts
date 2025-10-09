import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PartFitmentTool } from '@/components/part-fitment-tool'
import { RequestQuoteFormCompact } from '@/components/request-quote-form-compact'
import { TopBrands } from '@/components/top-brands'
import { Counter } from '@/components/ui/counter'
import { Phone, Shield, Truck, Search, CheckCircle, Star, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Used Interior Parts | Quality Interior Auto Parts | Daily Auto Parts',
  description: 'Find quality used interior parts at unbeatable prices. Seats, dashboards, door panels, consoles and more. All parts inspected and guaranteed. Free shipping available.',
  keywords: 'used interior parts, car interior parts, auto interior, seats, dashboard, door panels, console, steering wheel, used auto parts',
  openGraph: {
    title: 'Used Interior Parts | Quality Interior Auto Parts',
    description: 'Find quality used interior parts at unbeatable prices. All parts inspected and guaranteed.',
    type: 'website',
    images: ['/hero-car.png'],
  },
  alternates: {
    canonical: '/interior-parts',
  },
}

const interiorParts = [
  {
    name: 'Front Seats',
    image: '/seat-front.png',
    description: 'Driver and passenger seats with various fabric and leather options',
    commonIssues: ['Wear and tear', 'Electric motor failure', 'Foam degradation'],
  },
  {
    name: 'Rear Seats',
    image: '/seat-back.jpg',
    description: 'Back row seating including bench and captain\'s chairs',
    commonIssues: ['Fabric damage', 'Hinge problems', 'Folding mechanism issues'],
  },
  {
    name: 'Dashboard',
    image: '/speedometer.jpg',
    description: 'Complete dashboard assemblies and instrument clusters',
    commonIssues: ['Cracking', 'Warping', 'Electronic failures'],
  },
  {
    name: 'Door Panels',
    image: '/door.jpg',
    description: 'Interior door trim panels with switches and handles',
    commonIssues: ['Loose clips', 'Switch failures', 'Fabric sagging'],
  },
  {
    name: 'Center Console',
    image: '/console-front.jpg',
    description: 'Front and rear console assemblies with storage compartments',
    commonIssues: ['Broken hinges', 'Cup holder damage', 'Armrest wear'],
  },
  {
    name: 'Steering Wheel',
    image: '/steering.png',
    description: 'Steering wheels with various trim levels and controls',
    commonIssues: ['Wear on grip', 'Control button failure', 'Airbag issues'],
  },
  {
    name: 'Headrests',
    image: '/headrest.jpg',
    description: 'Adjustable headrests for all seating positions',
    commonIssues: ['Height adjustment failure', 'Fabric wear', 'Mounting damage'],
  },
  {
    name: 'Sun Visors',
    image: '/sunvisor.jpg',
    description: 'Driver and passenger sun visors with mirrors',
    commonIssues: ['Hinge looseness', 'Mirror damage', 'Light failure'],
  },
  {
    name: 'Glove Box',
    image: '/glove-box.jpg',
    description: 'Dashboard storage compartments with latching mechanisms',
    commonIssues: ['Latch failure', 'Hinge damage', 'Lock problems'],
  },
  {
    name: 'Speedometer',
    image: '/speedometer.jpg',
    description: 'Instrument clusters and gauge assemblies',
    commonIssues: ['Dead pixels', 'Backlight failure', 'Needle sticking'],
  },
  {
    name: 'Rear View Mirror',
    image: '/mirror-rear-view.jpg',
    description: 'Interior mirrors with auto-dimming and compass features',
    commonIssues: ['Auto-dim failure', 'Mounting looseness', 'Compass malfunction'],
  },
  {
    name: 'Seat Belts',
    image: '/seat-belt.png',
    description: 'Complete seat belt assemblies and retractors',
    commonIssues: ['Retractor failure', 'Webbing fraying', 'Buckle sticking'],
  },
]

export default function InteriorPartsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Used Interior Parts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Call +1(888) 888-8888 (Toll-Free) To Talk With Our Mechanic
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Truck className="h-5 w-5" />
                <span>Fast Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Selection and Quote Form */}
              <section className="py-12 sm:py-16 lg:py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">Find Your Right Part</h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
                Use our fitment tool and quote system to find compatible interior parts for your vehicle
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
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
                      <RequestQuoteFormCompact initialPart="Interior Parts" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

      {/* About Interior Parts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Nationwide Auto Salvage Network
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Our huge nationwide auto salvage network connects thousands of salvage yards and junkyards into one place. Increasing the possibility of finding any part you are looking for. Purchase your used parts locally to save you time on shipping. If our yard does not have your used part in stock, we can have it delivered to you, no problem! Search for used interior fast in our auto salvage inventory system.
              </p>
              
              <p>
                The interior of the vehicle plays a huge role in how the vehicle is perceived and how well it has been treated. The interior of most vehicles is different, as the interior of the vehicle has the ability to make the vehicle look different. The interior of the vehicle includes each and everything that is boxed between the four doors. The interior of the vehicle is as important as the exterior of the vehicle.
              </p>
              
              <p>
                When the vehicle is being designed one of the main factors that is time consuming is the interior design of the vehicle. This interior covers from the fabric used on the seats, to the grip of the vehicle. Almost every component of the interior is designed in a way that it ties in the look perfectly; they are all made to complement each other and make the vehicle look more beautiful. The interior even covers the side panels, and the armrest found inside of the vehicle. Each of them are designed keeping in mind the overall look of the vehicle.
              </p>
              
              <p>
                Search for a junkyard that may have your Interior in stock! You can search in the USA by zip code for used auto salvage parts near you using our used parts request form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Interior Parts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Browse Top Car Interior Parts
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Quality used interior parts for all makes and models
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {interiorParts.map((part) => (
              <Card key={part.name} className="group hover:shadow-lg transition-shadow duration-300 border-gray-200">
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={part.image}
                      alt={part.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {part.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-2">
                    {part.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">Common Issues:</p>
                    <div className="flex flex-wrap gap-1">
                      {part.commonIssues.map((issue) => (
                        <Badge key={issue} variant="secondary" className="text-xs">
                          {issue}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <TopBrands />
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center p-6 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    #1 We Inspect All Parts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Arm Auto Parts can help you find Used Interior fast and easy. All used parts are inspected before being sold. Anything mechanical, is tested for function. We visually inspect for any cracks, leaks, damage, or issues before we put the parts in our inventory system.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    #2 We Guarantee All Parts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Feel secure and rest easy when you search for Used Interior and millions of used auto parts from our nationwide network of locally owned salvage yards. We provide up to 1 year warranty on some of the parts we sell.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    #3 Nationwide Shipping and Delivery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    When you need Used Interior in a flash, we have partnered with all major shipping and freight carriers to ship any used part, used engine, used transmission, and more to any address in the United States.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Used Interior Parts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Why are used interior and used auto parts so important?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              {/* Pros */}
              <Card className="p-8 border-green-200 bg-green-50">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Pros of Buying Used Interior From Our Salvage Yard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Prices are 50-75% less than aftermarket parts',
                    'Most parts are OEM (original equipment manufacturer)',
                    'Better fitment, performance, and longevity',
                    'All parts come with warranty',
                    'Expert customer service and decades of knowledge',
                    'Visual identification and part numbers cataloged'
                  ].map((pro) => (
                    <div key={pro} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{pro}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Cons */}
              <Card className="p-8 border-red-200 bg-red-50">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-red-800">
                    Cons of Buying Aftermarket Parts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Poor fitment and gaps between body lines',
                    'Parts may not line up properly',
                    'Factory bolts and nuts may not fit',
                    'Time wasted on returns and refunds',
                    'Quality doesn\'t match OEM standards',
                    'Images can be misleading about fitment'
                  ].map((con) => (
                    <div key={con} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-300 mt-0.5 flex-shrink-0"></div>
                      <span className="text-gray-700">{con}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Tips for Buying Used Interior Parts:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Make sure all parts are inspected and fit your vehicle',
                'Cross reference your VIN or OEM part numbers',
                'Ask for pictures of the specific part',
                'Get shipping quotes to your zip code',
                'Always ask for a guarantee with your parts',
                'Remember: OEM parts will always outperform aftermarket'
              ].map((tip, index) => (
                <Card key={index} className="p-6 border-blue-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 font-medium">{tip}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Over 15 Years of Excellence
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Over the last 15 years, Arm Auto Parts has become one of the most recognizable Used Interior suppliers on the internet. Our state of the art inventory search system is what helps you locate Used Interior. Our database has all interchangeable years already stored, and immediately pulls API data to find the specific vehicle you are looking for, before finding Used Interior for you.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              <span className="font-bold text-2xl text-blue-600">100% Customer Service Guaranteed!</span><br />
              Finding Any Used Interior Will Be A Breeze With Arm Auto Parts. Our local auto junkyards near you are ready to help get your used auto parts pulled, and shipped immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Contact and Stats */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us Today</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-blue-300">
                <Counter end={45} suffix="k+" />
              </div>
              <p className="text-lg text-blue-100">Happy Customer</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-blue-300">
                <Counter end={500} suffix="+" />
              </div>
              <p className="text-lg text-blue-100">Cars in Garage</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-blue-300">
                <Counter end={45} suffix="k+" />
              </div>
              <p className="text-lg text-blue-100">Total Kilometer</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-blue-300">
                <Counter end={50} suffix="+" />
              </div>
              <p className="text-lg text-blue-100">Car Center Solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}