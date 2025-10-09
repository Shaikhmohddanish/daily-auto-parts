import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TopBrands } from '@/components/top-brands'
import { Phone, Truck, Clock, MapPin, AlertTriangle, CheckCircle, Package, Mail, Calendar, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Tracking | Fast Delivery Nationwide | Daily Auto Parts',
  description: 'Learn about our shipping policy, tracking information, and delivery times. We ship used auto parts nationwide with 5-7 day processing and 10-12 day delivery.',
  keywords: 'shipping policy, auto parts delivery, tracking, freight shipping, nationwide delivery, used parts shipping',
  openGraph: {
    title: 'Shipping & Tracking | Fast Delivery Nationwide',
    description: 'Learn about our shipping policy, tracking information, and delivery times for used auto parts.',
    type: 'website',
    images: ['/hero-car.png'],
  },
  alternates: {
    canonical: '/shipping',
  },
}

const shippingPolicies = [
  {
    number: '1',
    title: 'Freight Parts Address',
    description: 'For any freight parts, it is preferable to provide a business name and address. If there is no business address, kindly help us with a nearby Walmart parking address or there could be additional charges for doorstep delivery.',
    icon: MapPin,
    color: 'blue'
  },
  {
    number: '2',
    title: 'Order Processing',
    description: 'Once the order is placed, it will take 5-7 working days to generate the tracking ID. The delivery is entirely depending upon the dimensions of the product and the distance to be covered (10-12 working days).',
    icon: Package,
    color: 'green'
  },
  {
    number: '3',
    title: 'Wrong Shipping Address',
    description: 'If a wrong shipping address is provided by the customer, the organization does not hold any responsibility once the part is shipped. In such case, the customer will need to pay the additional charges for the reshipment of the same part.',
    icon: AlertTriangle,
    color: 'yellow'
  },
  {
    number: '4',
    title: 'Order Cancellation',
    description: 'If the customer wants to cancel the order, then they will be eligible for a partial refund, after a deduction of 25% of the paid amount.',
    icon: DollarSign,
    color: 'red'
  },
]

const trackingExpectations = [
  'Email notification with tracking information',
  'Regular updates on shipment status',
  'Estimated delivery date',
  'Contact information for shipping carrier'
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shipping & Tracking
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Call +1(888) 888-8888 (Toll-Free) To Talk With Our Mechanic
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-lg">
                <Phone className="h-5 w-5" />
                <span>Expert Support</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Truck className="h-5 w-5" />
                <span>Nationwide Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Package className="h-5 w-5" />
                <span>Order Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Network */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              About Our Network
            </h2>
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-500">
              <p className="text-lg text-gray-700 leading-relaxed">
                Daily Auto Parts is not a direct junkyard or owned by any junkyard. We are tied up with 4000+ junkyards in the United States. Our quality check team and experts do regular visits to junkyards to find the exact part you are looking for. After they do a quality test, then they ship the part. So, the whole process takes time & patience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Shipping Information
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* General Info */}
              <Card className="lg:col-span-3 p-6 border-blue-200 bg-blue-50">
                <CardContent className="p-0">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Shipping is available throughout the United States. We ship from various locations nationwide so we can deliver your product in the fastest manner possible so that you can get your automobile back on the road quicker. In cases where an item is out of stock, on back order, or is a special order, we will notify you via email with an approximate ETA.
                  </p>
                </CardContent>
              </Card>

              {/* Processing Time */}
              <Card className="text-center p-6 border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Processing Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-2">5-7 working days</p>
                  <p className="text-gray-600">to generate tracking ID</p>
                </CardContent>
              </Card>

              {/* Delivery Time */}
              <Card className="text-center p-6 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Delivery Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">10-12 working days</p>
                  <p className="text-gray-600">(depends on dimensions and distance)</p>
                </CardContent>
              </Card>

              {/* Network Coverage */}
              <Card className="text-center p-6 border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Network Coverage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-purple-600 mb-2">4000+</p>
                  <p className="text-gray-600">junkyards nationwide</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Shipping Policy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {shippingPolicies.map((policy, index) => {
                const IconComponent = policy.icon
                const colorClasses = {
                  blue: 'border-blue-200 bg-blue-50',
                  green: 'border-green-200 bg-green-50',
                  yellow: 'border-yellow-200 bg-yellow-50',
                  red: 'border-red-200 bg-red-50'
                }[policy.color]
                
                const iconColorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  yellow: 'bg-yellow-100 text-yellow-600',
                  red: 'bg-red-100 text-red-600'
                }[policy.color]
                
                const numberColorClasses = {
                  blue: 'bg-blue-600',
                  green: 'bg-green-600',
                  yellow: 'bg-yellow-600',
                  red: 'bg-red-600'
                }[policy.color]

                return (
                  <Card key={index} className={`p-6 hover:shadow-lg transition-shadow ${colorClasses}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${numberColorClasses} text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                          {policy.number}
                        </div>
                        <div className="flex-1">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${iconColorClasses}`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                            {policy.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-700 leading-relaxed">
                        {policy.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Important Notes
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6 border-red-200 bg-red-50">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-red-800 mb-2">Return Policy</h3>
                    <p className="text-red-700">
                      No refund or return on any body part, exterior parts, or electronic parts.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-orange-200 bg-orange-50">
                <div className="flex items-start gap-4">
                  <DollarSign className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-orange-800 mb-2">Additional Fees</h3>
                    <p className="text-orange-700">
                      All state fees & transport fees have to be paid by the customer. If anything extra amount is needed at the time of delivery, the customer has to pay the extra fees.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Your Order */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Tracking Your Order
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Once your order is processed and shipped, you will receive a tracking ID via email. You can use this tracking ID to monitor your shipment's progress.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect:</h3>
                <div className="space-y-4">
                  {trackingExpectations.map((expectation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{expectation}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="p-8 border-blue-200 bg-blue-50">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Questions About Your Shipment?
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Our shipping team is here to help track your order and answer any delivery questions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Call</p>
                    <p className="text-2xl font-bold text-blue-600">+1(888) 888-8888</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Email Support</p>
                    <p className="text-gray-600">Available for tracking assistance</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Browse Top Car
          </h2>
          <TopBrands />
        </div>
      </section>
    </div>
  )
}