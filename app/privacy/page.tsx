import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Daily Auto Parts",
  description: "Learn how Daily Auto Parts collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Daily Auto Parts ("we," "us," or "our") respects your privacy and is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Personal Information</h3>
                <p className="text-muted-foreground">
                  When you request a quote or place an order, we collect information such as:
                </p>
                <ul className="ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>• Name and contact information (email, phone, address)</li>
                  <li>• Vehicle information (make, model, year, VIN)</li>
                  <li>• Payment information (processed securely by our payment processor)</li>
                  <li>• Order history and preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Automatically Collected Information</h3>
                <p className="text-muted-foreground">
                  When you visit our website, we automatically collect certain information, including:
                </p>
                <ul className="ml-6 mt-2 space-y-1 text-muted-foreground">
                  <li>• IP address and browser type</li>
                  <li>• Device information and operating system</li>
                  <li>• Pages visited and time spent on our site</li>
                  <li>• Referring website and search terms used</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. How We Use Your Information</h2>
            <p className="mb-3 text-muted-foreground">We use the information we collect to:</p>
            <ul className="ml-6 space-y-1 text-muted-foreground">
              <li>• Process and fulfill your orders and quote requests</li>
              <li>• Verify vehicle fitment and provide accurate part recommendations</li>
              <li>• Communicate with you about orders, shipping, and customer support</li>
              <li>• Send promotional emails (with your consent)</li>
              <li>• Improve our website, products, and services</li>
              <li>• Detect and prevent fraud and security threats</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Cookies & Tracking Technologies</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are
                small data files stored on your device that help us remember your preferences and understand how you use
                our site.
              </p>
              <p>
                We use Google Analytics and similar services to analyze website traffic and usage patterns. These
                services may collect information about your browsing behavior across different websites.
              </p>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may limit your ability
                to use certain features of our website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. How We Share Your Information</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>We do not sell your personal information to third parties. We may share your information with:</p>
              <ul className="ml-6 space-y-1">
                <li>
                  • <strong className="text-foreground">Service Providers:</strong> Companies that help us operate our
                  business (payment processors, shipping carriers, email services)
                </li>
                <li>
                  • <strong className="text-foreground">Parts Suppliers:</strong> To source and verify parts for your
                  order
                </li>
                <li>
                  • <strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect
                  our rights
                </li>
              </ul>
              <p>
                All third-party service providers are contractually obligated to protect your information and use it
                only for the purposes we specify.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Data Retention & Security</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                policy, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p>
                We implement appropriate technical and organizational security measures to protect your information from
                unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Your Privacy Rights</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>You have the right to:</p>
              <ul className="ml-6 space-y-1">
                <li>• Access and review the personal information we hold about you</li>
                <li>• Request correction of inaccurate or incomplete information</li>
                <li>• Request deletion of your personal information (subject to legal requirements)</li>
                <li>• Opt out of marketing communications at any time</li>
                <li>• Object to or restrict certain processing of your information</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">8. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Our services are not intended for individuals under the age of 13. We do not knowingly collect personal
              information from children. If you believe we have collected information from a child, please contact us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. International Users & GDPR</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Our services are primarily intended for users in the United States. If you are accessing our website
                from outside the US, please be aware that your information may be transferred to and processed in the
                United States.
              </p>
              <p>
                For users in the European Union, we comply with GDPR requirements. You have additional rights under
                GDPR, including the right to data portability and the right to lodge a complaint with a supervisory
                authority.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting
              the new policy on this page and updating the "Last Updated" date. Your continued use of our services after
              changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Contact Us</h2>
            <div className="text-muted-foreground">
              <p className="mb-2">If you have questions or concerns about this Privacy Policy, please contact us:</p>
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
        </div>
      </div>
    </div>
  )
}
