import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions | Daily Auto Parts",
  description: "Terms and conditions for using Daily Auto Parts services and purchasing auto parts.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Terms & Conditions</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using the Daily Auto Parts website and services, you accept and agree to be bound by
              these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Use of Website</h2>
            <p className="text-muted-foreground">
              You agree to use this website only for lawful purposes and in a manner that does not infringe the rights
              of, or restrict or inhibit the use and enjoyment of this site by any third party.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Quotes & Orders</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Quotes provided through our website or by phone are estimates only and are not guarantees of
                availability or final pricing. All quotes are subject to verification and confirmation.
              </p>
              <p>
                We reserve the right to refuse or cancel any order for any reason, including but not limited to product
                availability, errors in pricing or product information, or suspected fraudulent activity.
              </p>
              <p>
                Orders are not confirmed until you receive an order confirmation from us. We will make reasonable
                efforts to notify you if a part is unavailable or if there are delays.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Pricing, Taxes & Core Charges</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                All prices are in US Dollars and are subject to change without notice. We strive to display accurate
                pricing, but errors may occur. If we discover a pricing error, we will notify you and give you the
                option to proceed at the correct price or cancel your order.
              </p>
              <p>
                Applicable sales taxes will be added to your order based on your shipping address. Some parts may
                include a refundable core charge, which will be clearly indicated on your invoice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Shipping & Risk of Loss</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Shipping costs and estimated delivery times will be provided at the time of order confirmation. We are
                not responsible for delays caused by shipping carriers or circumstances beyond our control.
              </p>
              <p>
                Risk of loss and title for items purchased pass to you upon delivery to the shipping carrier. We
                recommend purchasing shipping insurance for high-value items.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Fitment Responsibility</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                While we make every effort to ensure accurate fitment information, it is ultimately your responsibility
                to verify that parts are compatible with your specific vehicle. We strongly recommend providing your
                Vehicle Identification Number (VIN) and OEM part numbers when requesting quotes.
              </p>
              <p>
                Fitment can vary based on trim level, engine type, transmission, production date, and other factors. We
                are not responsible for parts ordered incorrectly due to incomplete or inaccurate vehicle information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Warranty Limitations & Remedies</h2>
            <p className="text-muted-foreground">
              Warranty terms are detailed in our Warranty Policies page. Our liability under any warranty is limited to
              repair, replacement, or refund of the defective part. We are not liable for consequential damages,
              including but not limited to labor costs, towing, rental vehicles, or lost wages.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Returns & Refunds</h2>
            <p className="text-muted-foreground">
              Return and refund policies are detailed in our Warranty Policies page. All returns require prior
              authorization. Restocking fees may apply to non-defective returns.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Limitation of Liability</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                To the fullest extent permitted by law, Daily Auto Parts shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly.
              </p>
              <p>
                Our total liability for any claim arising out of or relating to these terms or our services shall not
                exceed the amount paid by you for the specific part or service giving rise to the claim.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Intellectual Property & Trademarks</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Daily Auto
                Parts or its content suppliers and is protected by copyright and trademark laws.
              </p>
              <p>
                All vehicle manufacturer names, logos, and trademarks are the property of their respective owners and
                are used for identification purposes only. We are not affiliated with, endorsed by, or sponsored by any
                vehicle manufacturer.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Governing Law & Dispute Resolution</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the State
                of Wyoming, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising out of or relating to these terms or our services shall be resolved through binding
                arbitration in Sheridan County, Wyoming, except that either party may seek injunctive relief in court.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">12. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
              immediately upon posting to this website. Your continued use of our services after changes are posted
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">13. Contact Information</h2>
            <div className="text-muted-foreground">
              <p className="mb-2">If you have questions about these Terms and Conditions, please contact us:</p>
              <p>
                <strong className="text-foreground">Daily Auto Parts</strong>
                <br />
                30 N Gould St, STE N
                <br />
                Sheridan, WY 82801
                <br />
                Phone:{" "}
                <a href="tel:8888888888" className="text-primary">
                  888-888-8888
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
