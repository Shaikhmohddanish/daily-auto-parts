import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, AlertCircle, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Warranty Policies | Daily Auto Parts",
  description:
    "Learn about our flexible warranty options, return policy, and coverage terms for auto parts. 30-180 day warranties available.",
}

export default function WarrantyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="mb-3 text-4xl font-bold">Warranty Policies</h1>
          <p className="text-muted-foreground">
            We stand behind our parts with flexible warranty options and a fair return policy
          </p>
        </div>

        <div className="space-y-8">
          {/* Warranty Coverage Overview */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Warranty Coverage Overview</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Daily Auto Parts offers warranty protection on most parts to give you peace of mind. Our warranties
                  cover defects in materials and workmanship under normal use and service.
                </p>
                <p>
                  <strong className="text-foreground">Important:</strong> Warranties cover parts only. Labor costs for
                  installation or removal are not included unless expressly stated in writing on your invoice.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Warranty Terms */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Warranty Term Options</h2>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">30-Day Warranty</h3>
                  <p className="text-sm text-muted-foreground">
                    Standard coverage for most used parts. Covers defects and failures under normal operating
                    conditions.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">90-Day Warranty</h3>
                  <p className="text-sm text-muted-foreground">
                    Extended coverage for remanufactured and select used parts. Provides additional protection and peace
                    of mind.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-semibold">180-Day Warranty</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium coverage for new OEM and high-quality remanufactured parts. Our longest warranty term
                    available.
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <p className="text-sm">
                    <strong>Note:</strong> The exact warranty term for your part will be confirmed on your invoice.
                    Warranty period begins on the date of purchase.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Covered */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold">What's Covered</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Manufacturing defects in materials or workmanship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Parts that fail under normal use and proper installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Electrical components that fail due to internal defects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Mechanical parts with premature wear beyond normal expectations</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* What's Not Covered */}
          <Card className="border-destructive/20">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-destructive" />
                <h2 className="text-2xl font-bold">What's Not Covered</h2>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Normal wear and tear items (brake pads, filters, belts, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Damage from improper installation or modification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Parts used in racing, commercial, or off-road applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Damage from accidents, abuse, or neglect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Fluids, lubricants, and consumables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Damage from overheating, lack of maintenance, or contamination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Labor costs for installation, removal, or diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  <span>Consequential damages (towing, rental car, lost wages, etc.)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Warranty Claim Process */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold">How to File a Warranty Claim</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Contact Us Immediately</h3>
                    <p className="text-sm text-muted-foreground">
                      Call us at{" "}
                      <a href="tel:8888888888" className="text-primary">
                        888-888-8888
                      </a>{" "}
                      within the warranty period. Do not return parts without authorization.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Provide Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Have your invoice number, photos of the part, and description of the issue ready. We may request
                      additional diagnostic information.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Receive Return Authorization</h3>
                    <p className="text-sm text-muted-foreground">
                      If approved, we'll issue an RMA (Return Merchandise Authorization) number and return shipping
                      instructions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    4
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Ship the Part Back</h3>
                    <p className="text-sm text-muted-foreground">
                      Package the part securely and ship it back with the RMA number clearly marked. Keep your tracking
                      information.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    5
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Resolution</h3>
                    <p className="text-sm text-muted-foreground">
                      Once we receive and inspect the part, we'll send a replacement or issue a refund according to the
                      warranty terms.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping & Handling */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Shipping & Handling on Warranty Claims</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Defective Parts:</strong> If the part is confirmed defective under
                  warranty, we will cover return shipping costs and send a replacement at no charge.
                </p>
                <p>
                  <strong className="text-foreground">Non-Defective Returns:</strong> If inspection reveals the part is
                  not defective (e.g., wrong part ordered, improper installation), return shipping and restocking fees
                  may apply.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Core Returns */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Core Returns</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  Some parts (engines, transmissions, alternators, starters, etc.) may have a core charge. This is a
                  refundable deposit that encourages the return of your old part for remanufacturing.
                </p>
                <p>
                  <strong className="text-foreground">Core Return Requirements:</strong>
                </p>
                <ul className="ml-6 space-y-1">
                  <li>• Core must be returned within 30 days of purchase</li>
                  <li>• Core must be the same type as the part purchased</li>
                  <li>• Core must be complete and rebuildable (no cracks, broken housings, etc.)</li>
                  <li>• Core must be properly packaged to prevent damage during shipping</li>
                </ul>
                <p>
                  Core charges will be refunded once we receive and inspect your core. Refunds are typically processed
                  within 5-7 business days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Return & Refund Policy */}
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Return & Refund Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Return Window</h3>
                  <p className="text-sm text-muted-foreground">
                    Parts may be returned within 30 days of purchase for a refund or exchange, subject to the conditions
                    below.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Return Conditions</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Part must be unused and in original condition</li>
                    <li>• Original packaging must be intact</li>
                    <li>• All accessories and documentation must be included</li>
                    <li>• Return authorization (RMA) must be obtained before shipping</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Restocking Fee</h3>
                  <p className="text-sm text-muted-foreground">
                    A 15-20% restocking fee may apply to returns that are not due to our error or defect. Special order
                    and electrical parts may have higher restocking fees.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Refund Timing</h3>
                  <p className="text-sm text-muted-foreground">
                    Refunds are processed within 5-7 business days after we receive and inspect the returned part.
                    Refunds are issued to the original payment method.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Non-Returnable Items</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Installed or used parts</li>
                    <li>• Special order or custom parts</li>
                    <li>• Electrical parts that have been installed</li>
                    <li>• Fluids, chemicals, and consumables</li>
                    <li>• Parts without original packaging</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">How to Start a Return</h3>
                  <p className="text-sm text-muted-foreground">
                    Contact us at{" "}
                    <a href="tel:8888888888" className="text-primary">
                      888-888-8888
                    </a>{" "}
                    to request a return authorization. Do not ship parts back without an RMA number, as they may not be
                    accepted.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="border-muted-foreground/20 bg-muted/30">
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-bold">Important Disclaimer</h2>
              <p className="text-sm text-muted-foreground">
                These warranty policies are subject to change without notice. The warranty terms on your invoice are the
                final and binding terms for your purchase. If you have questions about warranty coverage, please contact
                us before purchasing.
              </p>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="rounded-lg border bg-primary/5 p-8 text-center">
            <Phone className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-bold">Questions About Our Warranty?</h3>
            <p className="mb-4 text-muted-foreground">Our team is here to help explain coverage and answer questions</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg">
                <a href="tel:8888888888">Call 888-888-8888</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
