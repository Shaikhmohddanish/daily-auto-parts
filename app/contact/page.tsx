import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RequestQuoteForm } from "@/components/request-quote-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Daily Auto Parts",
  description:
    "Get in touch with Daily Auto Parts for quotes, fitment help, and customer support. Call 888-815-8187 or fill out our contact form.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="mb-3 text-3xl md:text-4xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Have questions? Need help finding a part? Our team is here to assist you.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Phone</h3>
                      <a href="tel:8888158187" className="text-lg text-primary hover:underline">
                        888-815-8187
                      </a>
                      <p className="text-sm text-muted-foreground">Call us for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Email</h3>
                      <a href="mailto:support@dailyautoparts.com" className="text-primary hover:underline">
                        support@dailyautoparts.com
                      </a>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Address</h3>
                      <a
                        href="https://maps.google.com/?q=4300+W+State+St,+Boise,+ID+83703"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        4300 W State St
                        <br />
                        Boise, ID 83703
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">View on Google Maps</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold">Business Hours</h3>
                      <div className="space-y-1 text-sm">
                        <p>
                          <span className="font-medium">Monday - Saturday:</span> 8:00 AM - 6:00 PM
                        </p>
                        <p>
                          <span className="font-medium">Sunday:</span> Closed
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">Mountain Time (MT)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">How Can We Help?</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Order Status & Tracking</h3>
                    <p>Check on your order status, shipping updates, or delivery questions</p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Fitment Help</h3>
                    <p>Not sure if a part fits your vehicle? We'll help verify compatibility</p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Bulk & Wholesale Inquiries</h3>
                    <p>Contact us for volume pricing and wholesale opportunities</p>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Warranty & Returns</h3>
                    <p>Questions about warranty coverage or return procedures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Simple Contact Form */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input id="contact-name" placeholder="Your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input id="contact-email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input id="contact-phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Input id="contact-subject" placeholder="What can we help you with?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea id="contact-message" placeholder="Please describe your inquiry or question..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div>
            <div className="mb-6">
              <h2 className="mb-2 text-2xl font-bold">Request a Quote</h2>
              <p className="text-muted-foreground">
                Looking for a specific part? Fill out the form below and we'll get back to you with pricing and
                availability.
              </p>
            </div>
            <RequestQuoteForm />
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.8427010521534!2d-116.24316384775265!3d43.6499325734065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae57e885f011b1%3A0xa1a8fab9966a6531!2s4300%20W%20State%20St%2C%20Boise%2C%20ID%2083703!5e0!3m2!1sen!2sus!4v1633526872642"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Daily Auto Parts Location"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Schema.org ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Daily Auto Parts",
            description: "Contact information for Daily Auto Parts",
            url: "https://dailyautoparts.com/contact",
          }),
        }}
      />
    </div>
  )
}
