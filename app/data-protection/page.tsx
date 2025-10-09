import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Phone, Mail, FileText, Users, Lock, Eye, Download, Trash2, Edit } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Protection & GDPR Privacy Policy | Daily Auto Parts",
  description: "Learn how Daily Auto Parts protects your personal information and complies with GDPR regulations. Your privacy and data security are our priorities.",
  openGraph: {
    title: "Data Protection & Privacy Policy | Daily Auto Parts", 
    description: "Comprehensive privacy policy and GDPR compliance information for Daily Auto Parts customers.",
  },
}

export default function DataProtectionPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-8">
        <Shield className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold mb-4">Data Protection</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Your privacy and data security are our top priorities
        </p>
        <div className="flex items-center justify-center gap-4 text-lg">
          <Phone className="h-5 w-5 text-primary" />
          <span className="font-semibold">Call (888) 888-8888 (Toll-Free)</span>
          <span className="text-muted-foreground">To Talk With Our Mechanic</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-gray max-w-none">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              GDPR Privacy Policy for Daily Auto Parts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              At Daily Auto Parts, accessible from dailyautoparts.com, one of our main priorities is the privacy of our visitors. 
              This Privacy Policy document contains types of information that is collected and recorded by Daily Auto Parts and how we use it. 
              If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              General Data Protection Regulation (GDPR)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We are a Data Controller of your information. Daily Auto Parts legal basis for collecting and using the personal 
              information described in this Privacy Policy depends on the Personal Information we collect and the specific context 
              in which we collect the information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Daily Auto Parts needs to perform a contract with you</li>
              <li>You have given Daily Auto Parts permission to do so</li>
              <li>Processing your personal information is in Daily Auto Parts legitimate interests</li>
              <li>Daily Auto Parts needs to comply with the law</li>
            </ul>
            <p>
              Daily Auto Parts will retain your personal information only for as long as is necessary for the purposes set out in this 
              Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, 
              resolve disputes, and enforce our policies.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Your Data Protection Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be 
              informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us. 
              In certain circumstances, you have the following data protection rights:
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Eye className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">The right to access</h4>
                  <p className="text-sm text-muted-foreground">Update or delete the information we have on you</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Edit className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">The right of rectification</h4>
                  <p className="text-sm text-muted-foreground">Correct any information you believe is inaccurate</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">The right to object</h4>
                  <p className="text-sm text-muted-foreground">Object to our processing of your personal data</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Lock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">The right of restriction</h4>
                  <p className="text-sm text-muted-foreground">Request restriction of processing your personal data</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Download className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">The right to data portability</h4>
                  <p className="text-sm text-muted-foreground">Transfer your data to another organization</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 border rounded-lg">
                <Trash2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">The right to withdraw consent</h4>
                  <p className="text-sm text-muted-foreground">Withdraw consent at any time</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Log Files</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Daily Auto Parts follows a standard procedure of using log files. These files log visitors when they visit websites. 
              All hosting companies do this and a part of hosting services' analytics. The information collected by log files include 
              internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, 
              and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose 
              of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering 
              demographic information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">We use the information we collect in various ways, including to:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cookies and Web Beacons</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Like any other website, dailyautoparts.com uses 'cookies'. These cookies are used to store information including 
              visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used 
              to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Third Party Privacy Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Daily Auto Parts's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult 
              the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their 
              practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your 
              individual browser options. To know more detailed information about cookie management with specific web browsers, 
              it can be found at the browsers' respective websites.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Children's Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and 
              guardians to observe, participate in, and/or monitor and guide their online activity. Daily Auto Parts does not 
              knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your 
              child provided this kind of information on our website, we strongly encourage you to contact us immediately and we 
              will do our best efforts to promptly remove such information from our records.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Online Privacy Policy Only</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to 
              the information that they shared and/or collect in dailyautoparts.com. This policy is not applicable to any 
              information collected offline or via channels other than this website.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Consent</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Daily Auto Parts</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:+18888888888" className="text-primary hover:underline">(888) 888-8888</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:support@dailyautoparts.com" className="text-primary hover:underline">
                    support@dailyautoparts.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Need Help or Have Questions?</h2>
        <p className="text-muted-foreground mb-6">
          Our privacy team is here to help you understand your rights and how we protect your data.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="tel:+18888888888">
              <Phone className="mr-2 h-4 w-4" />
              Call (888) 888-8888
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}