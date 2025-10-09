import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Advertising Policy | Daily Auto Parts",
  description: "Learn about Daily Auto Parts advertising practices and policies.",
}

export default function AdvertisingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Advertising Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Our Advertising Practices</h2>
            <p className="text-muted-foreground">
              Daily Auto Parts may advertise our products and services through various channels, including search
              engines, social media platforms, display advertising networks, and email marketing. This policy outlines
              our advertising practices and your rights regarding advertising.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Use of Manufacturer Names & Logos</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We use vehicle manufacturer names, logos, and trademarks in our advertising and on our website for
                identification purposes only. These trademarks are the property of their respective owners.
              </p>
              <p>
                <strong className="text-foreground">No Endorsement Implied:</strong> The use of manufacturer names and
                logos does not imply any affiliation with, endorsement by, or sponsorship from the vehicle
                manufacturers. We are an independent auto parts supplier.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. Advertising Tracking & Pixels</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We may use tracking pixels and cookies from advertising platforms (such as Google Ads, Facebook Ads,
                etc.) to measure the effectiveness of our advertising campaigns and to show you relevant ads based on
                your interests.
              </p>
              <p>
                These tracking technologies may collect information about your browsing behavior across different
                websites. For more information about how we use cookies and tracking technologies, please see our
                Privacy Policy.
              </p>
              <p>
                You can opt out of personalized advertising by adjusting your browser settings or using opt-out tools
                provided by advertising networks.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Accuracy of Advertising</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We strive to ensure that all information in our advertising is accurate and up-to-date. However, parts
                availability, pricing, and specifications are subject to change without notice.
              </p>
              <p>
                Images used in advertising may be representative and may not reflect the exact condition or appearance
                of the specific part you receive. All sales are subject to verification and confirmation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Email Marketing</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                If you provide your email address, we may send you promotional emails about our products, services, and
                special offers. You can opt out of marketing emails at any time by clicking the "unsubscribe" link in
                any email or by contacting us directly.
              </p>
              <p>
                We will not sell or share your email address with third parties for their marketing purposes without
                your explicit consent.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Third-Party Advertising</h2>
            <p className="text-muted-foreground">
              Our website may display advertisements from third-party advertising networks. We are not responsible for
              the content of third-party advertisements or the privacy practices of third-party advertisers. We
              recommend reviewing the privacy policies of any third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Reporting Misleading Advertising</h2>
            <div className="text-muted-foreground">
              <p className="mb-2">
                If you believe you have seen misleading or inaccurate advertising from Daily Auto Parts, please contact
                us immediately:
              </p>
              <p>
                <strong className="text-foreground">Daily Auto Parts</strong>
                <br />
                4300 W State St
                <br />
                Boise, ID 83703
                <br />
                Phone:{" "}
                <a href="tel:8888158187" className="text-primary">
                  888-815-8187
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Advertising Policy from time to time. Changes will be effective immediately upon
              posting to this page. The "Last Updated" date at the top of this page indicates when the policy was last
              revised.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
