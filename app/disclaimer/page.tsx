import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Disclaimer | Daily Auto Parts",
  description: "Important disclaimers and limitations regarding Daily Auto Parts services and information.",
}

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Disclaimer</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. General Information</h2>
            <p className="text-muted-foreground">
              The information provided on the Daily Auto Parts website is for general informational purposes only. While
              we strive to keep the information accurate and up-to-date, we make no representations or warranties of any
              kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of
              the information, products, services, or related graphics contained on the website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. No Affiliation with Vehicle Manufacturers</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Daily Auto Parts is an independent auto parts supplier and is not affiliated with, endorsed by, or
                sponsored by any vehicle manufacturer. All manufacturer names, logos, and trademarks used on this
                website are the property of their respective owners and are used for identification purposes only.
              </p>
              <p>
                References to specific vehicle makes, models, or manufacturers do not imply any relationship with or
                endorsement by those manufacturers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Fitment & Compatibility</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Fitment information provided on this website is for reference purposes only and must be verified before
                purchase. Vehicle fitment can vary based on trim level, engine type, transmission, production date, and
                other factors.
              </p>
              <p>
                <strong className="text-foreground">Important:</strong> It is your responsibility to verify that parts
                are compatible with your specific vehicle. We strongly recommend providing your Vehicle Identification
                Number (VIN) and OEM part numbers when requesting quotes to ensure accurate fitment.
              </p>
              <p>
                Images shown are for illustrative purposes and may not represent the exact appearance or condition of
                the part you receive. Actual parts may vary in appearance, brand, or packaging.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Pricing & Availability</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Prices and availability of parts are subject to change without notice. While we make every effort to
                display accurate pricing, errors may occur. In the event of a pricing error, we reserve the right to
                cancel or refuse orders.
              </p>
              <p>
                Quotes provided are estimates only and are not guarantees of availability or final pricing. All quotes
                are subject to verification and confirmation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Website Availability</h2>
            <p className="text-muted-foreground">
              We make no guarantee that our website will be available at all times or that it will be free from errors,
              viruses, or other harmful components. We reserve the right to suspend, withdraw, or restrict access to the
              website at any time for maintenance, updates, or other reasons.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Professional Installation Recommended</h2>
            <p className="text-muted-foreground">
              Auto parts should be installed by qualified professionals. Improper installation can result in vehicle
              damage, personal injury, or death. We are not responsible for any damages or injuries resulting from
              improper installation or use of parts purchased from us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Limitation of Liability</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                To the fullest extent permitted by law, Daily Auto Parts shall not be liable for any direct, indirect,
                incidental, consequential, or punitive damages arising out of your access to or use of the website or
                any products or services purchased from us.
              </p>
              <p>
                This includes, but is not limited to, damages for loss of profits, data, or other intangible losses,
                even if we have been advised of the possibility of such damages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. External Links</h2>
            <p className="text-muted-foreground">
              Our website may contain links to external websites that are not operated by us. We have no control over
              the content and practices of these sites and cannot accept responsibility or liability for their
              respective privacy policies or content.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Changes to This Disclaimer</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon
              posting to this page. Your continued use of the website after changes are posted constitutes acceptance of
              the modified disclaimer.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Contact Information</h2>
            <div className="text-muted-foreground">
              <p className="mb-2">If you have questions about this disclaimer, please contact us:</p>
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
