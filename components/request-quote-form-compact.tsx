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
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"
import { Car, Mail, Phone, MapPin, FileText, ShieldCheck } from "lucide-react"

interface RequestQuoteFormCompactProps {
  initialPart?: string
}

export function RequestQuoteFormCompact({ initialPart }: RequestQuoteFormCompactProps) {
  const { toast } = useToast()
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
    
    // Simulate form submission with a delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setSubmitted(true)
    
    toast({
      title: "Quote Request Received!",
      description: "Thanks! A parts specialist will contact you shortly.",
    })

    // Fire analytics event
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "lead_submit", {
        brand,
        model,
        year,
        part,
      })
    }
  }

  if (submitted) {
    return (
      <Card className="overflow-hidden border-2 border-primary/20">
        <CardContent className="pt-6 px-4 sm:px-6 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 border border-green-200">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-bold text-green-700">Quote Request Received!</h3>
          <p className="mb-6 text-muted-foreground">
            Thank you for your request. A parts specialist will contact you shortly.
          </p>
          
          <div className="mb-6 rounded-lg bg-slate-50 p-4 text-left border border-slate-200">
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200">
              <Car className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-slate-500">Vehicle</p>
                <p className="font-medium">{year} {brand} {model}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-slate-500">Part</p>
                <p className="font-medium">{part}</p>
              </div>
            </div>
          </div>
          
          <Button onClick={() => setSubmitted(false)} variant="outline" className="w-full">
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand" className="text-sm">Brand <span className="text-destructive">*</span></Label>
                    <Select value={brand} onValueChange={setBrand}>
                      <SelectTrigger id="brand" className={`h-10 ${errors.brand ? "border-destructive" : ""}`}>
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
                    <Label htmlFor="model" className="text-sm">Model <span className="text-destructive">*</span></Label>
                    <Select value={model} onValueChange={setModel} disabled={!brand}>
                      <SelectTrigger id="model" className={`h-10 ${errors.model ? "border-destructive" : ""}`}>
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
                    <Label htmlFor="year" className="text-sm">Year <span className="text-destructive">*</span></Label>
                    <Select value={year} onValueChange={setYear}>
                      <SelectTrigger id="year" className={`h-10 ${errors.year ? "border-destructive" : ""}`}>
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
                    <Label htmlFor="part" className="text-sm">Part <span className="text-destructive">*</span></Label>
                    <Select value={part} onValueChange={setPart}>
                      <SelectTrigger id="part" className={`h-10 ${errors.part ? "border-destructive" : ""}`}>
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

                <div className="pt-2">
                  <Button 
                    type="button"
                    onClick={handleNext}
                    className="w-full"
                  >
                    Next
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  
                  <div className="flex items-start gap-2 pt-2">
                    <Checkbox
                      id="gdpr"
                      checked={gdprConsent}
                      onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                      className={`mt-1 ${errors.gdpr ? "border-destructive" : ""}`}
                    />
                    <Label htmlFor="gdpr" className="text-sm leading-relaxed cursor-pointer">
                      I agree to the{" "}
                      <Link href="/privacy" className="text-primary hover:underline font-medium">
                        Privacy Policy
                      </Link>
                      <span className="text-destructive"> *</span>
                    </Label>
                  </div>
                  {errors.gdpr && <p className="text-xs text-destructive mt-1">{errors.gdpr}</p>}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setActiveStep(1)}
                      className="w-full sm:w-1/3"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit"
                      className="w-full sm:w-2/3"
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