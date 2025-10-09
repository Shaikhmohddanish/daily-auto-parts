import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RequestQuoteForm } from "@/components/request-quote-form"
import { HelpCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Daily Auto Parts",
  description:
    "Frequently asked questions about ordering auto parts, warranties, shipping, fitment, and more from Daily Auto Parts.",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you sell OEM, aftermarket, or used parts?",
      answer:
        "We offer all three! OEM (Original Equipment Manufacturer) parts provide exact factory specifications and fitment. Quality aftermarket parts offer reliable alternatives, often at lower prices. We also carry thoroughly tested used parts that provide excellent value. When you request a quote, we'll present available options with pricing for each type so you can choose what works best for your needs and budget.",
    },
    {
      question: "How do I confirm fitment for my vehicle?",
      answer:
        "For best results, include your Vehicle Identification Number (VIN) when requesting a quote. Your VIN allows us to match the exact OEM part number for your specific vehicle, accounting for trim level, engine type, transmission, and production date. You can also provide the OEM part number from your existing part. Our parts specialists will verify compatibility before confirming your order to ensure you receive the correct part.",
    },
    {
      question: "What warranty options are available?",
      answer:
        "Most parts come with warranty options ranging from 30 to 180 days. The exact warranty term depends on the part type and condition (new, remanufactured, or used). Warranties cover defects in materials and workmanship under normal use. The specific warranty for your part will be confirmed on your invoice. For complete details, please see our Warranty Policies page.",
    },
    {
      question: "How fast is shipping?",
      answer:
        "Most orders ship within 1-2 business days and arrive within 2-5 business days via standard shipping. Expedited shipping options are available for faster delivery. Large items like engines and transmissions may require freight shipping, which typically takes 3-7 business days. We'll provide tracking information once your order ships so you can monitor delivery progress.",
    },
    {
      question: "Do you accept returns?",
      answer:
        "Yes, parts may be returned within 30 days of purchase if they are unused and in original condition with intact packaging. A return authorization (RMA) must be obtained before shipping parts back. A restocking fee of 15-20% may apply to non-defective returns. Parts that are defective under warranty can be returned for replacement or refund with no restocking fee. See our Warranty Policies page for complete return details.",
    },
    {
      question: "What information helps you quote accurately?",
      answer:
        "The more information you provide, the more accurate your quote will be. Include: Vehicle VIN (most important), year, make, model, engine size, transmission type, and trim level. If you have the OEM part number from your existing part, that's extremely helpful. Photos of the part you need can also assist with identification. For engines and transmissions, let us know if you need accessories like wiring harnesses, sensors, or mounting hardware.",
    },
    {
      question: "Do you ship engines and transmissions with accessories?",
      answer:
        "This varies by part and availability. Some engines and transmissions come complete with accessories (alternator, starter, wiring harness, sensors, etc.), while others are sold as bare units. When requesting a quote, specify what accessories you need, and we'll let you know what's included and what can be added. We recommend discussing your specific installation requirements with our parts specialists.",
    },
    {
      question: "Do you offer wholesale pricing?",
      answer:
        "Yes, we work with mechanics, repair shops, and dealerships. Contact us at 888-815-8187 to discuss wholesale pricing and volume discounts. We can set up a business account for easier ordering and invoicing. Wholesale customers may have access to extended payment terms and priority sourcing for hard-to-find parts.",
    },
    {
      question: "Can I pick up parts locally?",
      answer:
        "Local pickup may be available for certain parts at our Sheridan, WY location. Contact us to confirm availability and schedule a pickup time. Most parts are sourced from our nationwide network of suppliers and will need to be shipped to you or to our location first.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, Mastercard, American Express, Discover), debit cards, and wire transfers. For wholesale customers, we may offer invoicing with net payment terms. Payment is typically required before shipping, though exceptions may be made for established business accounts.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="mb-3 text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Find answers to common questions about ordering parts, warranties, shipping, and more
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-12 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border bg-card px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Resources */}
        <div className="mb-12 rounded-lg border bg-muted/30 p-8">
          <h2 className="mb-4 text-2xl font-bold">Need More Information?</h2>
          <p className="mb-6 text-muted-foreground">
            For detailed policies and additional information, check out these resources:
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button asChild variant="outline" className="justify-start bg-transparent">
              <Link href="/warranty">Warranty Policies</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start bg-transparent">
              <Link href="/terms">Terms & Conditions</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start bg-transparent">
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button asChild variant="outline" className="justify-start bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Quote Form CTA */}
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-2xl font-bold">Still Have Questions?</h2>
          <p className="mb-6 text-muted-foreground">
            Request a quote and our parts specialists will answer your questions and help you find the right part
          </p>
        </div>
        <RequestQuoteForm />
      </div>

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  )
}
