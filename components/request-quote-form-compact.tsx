"use client"

import Link from "next/link"
import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useIsMobile } from "@/hooks/use-mobile"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"
import { Car, Mail, Phone, MapPin, FileText, ShieldCheck } from "lucide-react"

interface RequestQuoteFormCompactProps {
  initialPart?: string
}

export function RequestQuoteFormCompact({ initialPart }: RequestQuoteFormCompactProps) {
  const { toast } = useToast()
  const isMobile = useIsMobile()
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [part, setPart] = useState(initialPart || "")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [zip, setZip] = useState("")
  const [vin, setVin] = useState("")
  const [gdprConsent, setGdprConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [activeStep, setActiveStep] = useState(1)

  const years = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => (2026 - i).toString())
  const availableModels = brand ? brandModels[brand] || [] : []

  useEffect(() => {
    if (brand) {
      setModel("")
    }
  }, [brand])

  const validate = (step?: number) => {
    const newErrors: Record<string, string> = {}
    
    if (step === 1 || !step) {
      if (!brand) newErrors.brand = "Brand is required"
      if (!model) newErrors.model = "Model is required"
      if (!year) newErrors.year = "Year is required"
      if (!part) newErrors.part = "Part is required"
    }
    
    if (step === 2 || !step) {
      if (!fullName) newErrors.fullName = "Full name is required"
      if (!email) newErrors.email = "Email is required"
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Invalid email format"
      }
      if (!phone) newErrors.phone = "Phone is required"
      if (phone && !/^\d{10,}$/.test(phone.replace(/\D/g, ""))) {
        newErrors.phone = "Phone must be at least 10 digits"
      }
      if (!zip) newErrors.zip = "ZIP/Postal code is required"
      if (!gdprConsent) newErrors.gdpr = "You must agree to the privacy policy"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate(1)) {
      setActiveStep(2)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      toast({
        title: "Please check your information",
        description: "Some required fields need your attention",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Create FormData object to send to the API
      const formData = new FormData()
      formData.append("brand", brand)
      formData.append("model", model)
      formData.append("year", year)
      formData.append("part", part)
      formData.append("fullName", fullName)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("zip", zip)
      formData.append("vin", vin)
      formData.append("formType", "request-quote-form-compact")

      // Send the data to our API endpoint
      const response = await fetch("/api/google-form-proxy", {
        method: "POST",
        body: formData
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }
      
      toast({
        title: "Quote request sent!",
        description: "We'll get back to you shortly with pricing information.",
      })
      
      setSubmitted(true)
      setIsLoading(false)
      
      // Reset form
      setBrand("")
      setModel("")
      setYear("")
      setPart("")
      setFullName("")
      setEmail("")
      setPhone("")
      setZip("")
      setVin("")
      setGdprConsent(false)
      setActiveStep(1)
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      })
      setIsLoading(false)
    }
  }
  
  // Show success message after submission
  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6 flex flex-col items-center text-center">
          <div className="rounded-full bg-green-100 p-3 mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 11L12 14L22 4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Quote Request Received</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for submitting your quote request. Our team will review your information and get back to you shortly with pricing and availability details.
          </p>
          <Button 
            onClick={() => setSubmitted(false)}
            className="mt-2"
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden border-2 border-primary/20">
      <CardHeader className="bg-primary/5 px-4 py-4 sm:px-6 sm:py-5 border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl font-bold text-primary">
          <FileText className="h-5 w-5" />
          Get Quote
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        <form onSubmit={handleSubmit}>
          <div className="p-4 sm:p-6">
            {/* Progress indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${activeStep === 1 ? "text-primary" : "text-muted-foreground"}`}>
                  1. Vehicle & Part
                </span>
                <span className={`text-sm font-medium ${activeStep === 2 ? "text-primary" : "text-muted-foreground"}`}>
                  2. Contact Details
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: activeStep === 1 ? "50%" : "100%" }}
                />
              </div>
            </div>

            {activeStep === 1 && (
              <div className="space-y-5">
                <div className="flex items-center gap-2 mb-3">
                  <Car className="text-primary h-5 w-5" />
                  <h3 className="font-semibold text-base">Vehicle Information</h3>
                </div>
                
                {isMobile ? (
                  <div className="space-y-4">
                    {/* Mobile layout - vertically stacked */}
                    <div>
                      <Label htmlFor="brand-mobile" className="text-sm font-medium block mb-1.5">
                        Brand <span className="text-destructive">*</span>
                      </Label>
                      <Select value={brand} onValueChange={setBrand}>
                        <SelectTrigger id="brand-mobile" className={`h-11 w-full ${errors.brand ? "border-destructive" : ""}`}>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.keys(brandModels).map((b) => (
                            <SelectItem key={b} value={b}>
                              {b}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.brand && <p className="text-xs text-destructive mt-1">{errors.brand}</p>}
                    </div>

                    <div>
                      <Label htmlFor="model-mobile" className="text-sm font-medium block mb-1.5">
                        Model <span className="text-destructive">*</span>
                      </Label>
                      <Select value={model} onValueChange={setModel} disabled={!brand}>
                        <SelectTrigger id="model-mobile" className={`h-11 w-full ${errors.model ? "border-destructive" : ""}`}>
                          <SelectValue placeholder={brand ? "Select model" : "Select brand first"} />
                        </SelectTrigger>
                        <SelectContent>
                          {availableModels.map((m) => (
                            <SelectItem key={m} value={m}>
                              {m}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.model && <p className="text-xs text-destructive mt-1">{errors.model}</p>}
                    </div>

                    <div>
                      <Label htmlFor="year-mobile" className="text-sm font-medium block mb-1.5">
                        Year <span className="text-destructive">*</span>
                      </Label>
                      <Select value={year} onValueChange={setYear}>
                        <SelectTrigger id="year-mobile" className={`h-11 w-full ${errors.year ? "border-destructive" : ""}`}>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((y) => (
                            <SelectItem key={y} value={y}>
                              {y}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.year && <p className="text-xs text-destructive mt-1">{errors.year}</p>}
                    </div>

                    <div>
                      <Label htmlFor="part-mobile" className="text-sm font-medium block mb-1.5">
                        Part <span className="text-destructive">*</span>
                      </Label>
                      <Select value={part} onValueChange={setPart}>
                        <SelectTrigger id="part-mobile" className={`h-11 w-full ${errors.part ? "border-destructive" : ""}`}>
                          <SelectValue placeholder="Select part" />
                        </SelectTrigger>
                        <SelectContent>
                          {parts.map((p) => (
                            <SelectItem key={p} value={p}>
                              {p}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.part && <p className="text-xs text-destructive mt-1">{errors.part}</p>}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="brand-desktop" className="text-sm">Brand <span className="text-destructive">*</span></Label>
                        <Select value={brand} onValueChange={setBrand}>
                          <SelectTrigger id="brand-desktop" className={`h-10 ${errors.brand ? "border-destructive" : ""}`}>
                            <SelectValue placeholder="Select brand" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.keys(brandModels).map((b) => (
                              <SelectItem key={b} value={b}>
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.brand && <p className="text-xs text-destructive mt-1">{errors.brand}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="model-desktop" className="text-sm">Model <span className="text-destructive">*</span></Label>
                        <Select value={model} onValueChange={setModel} disabled={!brand}>
                          <SelectTrigger id="model-desktop" className={`h-10 ${errors.model ? "border-destructive" : ""}`}>
                            <SelectValue placeholder={brand ? "Select model" : "Select brand first"} />
                          </SelectTrigger>
                          <SelectContent>
                            {availableModels.map((m) => (
                              <SelectItem key={m} value={m}>
                                {m}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.model && <p className="text-xs text-destructive mt-1">{errors.model}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="year-desktop" className="text-sm">Year <span className="text-destructive">*</span></Label>
                        <Select value={year} onValueChange={setYear}>
                          <SelectTrigger id="year-desktop" className={`h-10 ${errors.year ? "border-destructive" : ""}`}>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            {years.map((y) => (
                              <SelectItem key={y} value={y}>
                                {y}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.year && <p className="text-xs text-destructive mt-1">{errors.year}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="part-desktop" className="text-sm">Part <span className="text-destructive">*</span></Label>
                        <Select value={part} onValueChange={setPart}>
                          <SelectTrigger id="part-desktop" className={`h-10 ${errors.part ? "border-destructive" : ""}`}>
                            <SelectValue placeholder="Select part" />
                          </SelectTrigger>
                          <SelectContent>
                            {parts.map((p) => (
                              <SelectItem key={p} value={p}>
                                {p}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.part && <p className="text-xs text-destructive mt-1">{errors.part}</p>}
                      </div>
                    </div>
                  </>
                )}

                <div className="pt-3">
                  <Button 
                    type="button"
                    onClick={handleNext}
                    className="w-full h-11 text-base"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-5">
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="text-primary h-5 w-5" />
                  <h3 className="font-semibold text-base">Contact Information</h3>
                </div>
                
                <div className="space-y-4">
                  {isMobile ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName-mobile" className="text-sm font-medium block mb-1.5">Name <span className="text-destructive">*</span></Label>
                        <Input
                          id="fullName-mobile"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className={`h-11 ${errors.fullName ? "border-destructive" : ""}`}
                        />
                        {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email-mobile" className="text-sm font-medium block mb-1.5">Email <span className="text-destructive">*</span></Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="email-mobile"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className={`h-11 pl-10 ${errors.email ? "border-destructive" : ""}`}
                          />
                        </div>
                        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <Label htmlFor="phone-mobile" className="text-sm font-medium block mb-1.5">Phone <span className="text-destructive">*</span></Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="phone-mobile"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(555) 123-4567"
                            className={`h-11 pl-10 ${errors.phone ? "border-destructive" : ""}`}
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="zip-mobile" className="text-sm font-medium block mb-1.5">ZIP Code <span className="text-destructive">*</span></Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="zip-mobile"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            placeholder="12345"
                            className={`h-11 pl-10 ${errors.zip ? "border-destructive" : ""}`}
                          />
                        </div>
                        {errors.zip && <p className="text-xs text-destructive mt-1">{errors.zip}</p>}
                      </div>

                      <div>
                        <Label htmlFor="vin-mobile" className="text-sm font-medium block mb-1.5">VIN (Optional)</Label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            id="vin-mobile"
                            value={vin}
                            onChange={(e) => setVin(e.target.value)}
                            placeholder="For better accuracy"
                            className="h-11 pl-10"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="gdprConsent-mobile"
                            checked={gdprConsent}
                            onCheckedChange={(checked: boolean) => setGdprConsent(checked)}
                            className="mt-0.5 data-[state=checked]:bg-primary"
                          />
                          <div>
                            <label
                              htmlFor="gdprConsent-mobile"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm">Name <span className="text-destructive">*</span></Label>
                        <Input
                          id="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className={`h-10 ${errors.fullName ? "border-destructive" : ""}`}
                        />
                        {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm">Email <span className="text-destructive">*</span></Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="your@email.com"
                              className={`h-10 pl-10 ${errors.email ? "border-destructive" : ""}`}
                            />
                          </div>
                          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm">Phone <span className="text-destructive">*</span></Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="(555) 123-4567"
                              className={`h-10 pl-10 ${errors.phone ? "border-destructive" : ""}`}
                            />
                          </div>
                          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="zip" className="text-sm">ZIP Code <span className="text-destructive">*</span></Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="zip"
                              value={zip}
                              onChange={(e) => setZip(e.target.value)}
                              placeholder="12345"
                              className={`h-10 pl-10 ${errors.zip ? "border-destructive" : ""}`}
                            />
                          </div>
                          {errors.zip && <p className="text-xs text-destructive mt-1">{errors.zip}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vin" className="text-sm">VIN (Optional)</Label>
                          <div className="relative">
                            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="vin"
                              value={vin}
                              onChange={(e) => setVin(e.target.value)}
                              placeholder="For better accuracy"
                              className="h-10 pl-10"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="gdprConsent-desktop"
                            checked={gdprConsent}
                            onCheckedChange={(checked: boolean) => setGdprConsent(checked)}
                            className="mt-0.5 data-[state=checked]:bg-primary"
                          />
                          <div>
                            <label
                              htmlFor="gdprConsent-desktop"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                            </label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {errors.gdpr && <p className="text-xs text-destructive mt-1">{errors.gdpr}</p>}

                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setActiveStep(1)}
                      className="w-full sm:w-1/3 h-11 text-base"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit"
                      className="w-full sm:w-2/3 h-11 text-base"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-opacity-25 border-t-white"></span>
                          Processing...
                        </>
                      ) : (
                        'Get Quote'
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="bg-slate-50 p-4 sm:p-6 border-t flex flex-col sm:flex-row gap-3 justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-primary h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            Your data is secure and will only be used to process your quote request.
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}