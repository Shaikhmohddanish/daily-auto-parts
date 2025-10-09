"use client"

import Link from "next/link"
import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"

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
  const [errors, setErrors] = useState<Record<string, string>>({})

  const years = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => (2026 - i).toString())
  const availableModels = brand ? brandModels[brand] || [] : []

  useEffect(() => {
    if (brand) {
      setModel("")
    }
  }, [brand])

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!brand) newErrors.brand = "Brand is required"
    if (!model) newErrors.model = "Model is required"
    if (!year) newErrors.year = "Year is required"
    if (!part) newErrors.part = "Part is required"
    if (!fullName) newErrors.fullName = "Full name is required"
    if (!email && !phone) newErrors.contact = "Email or phone is required"
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format"
    }
    if (phone && !/^\d{10,}$/.test(phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone must be at least 10 digits"
    }
    if (!zip) newErrors.zip = "ZIP/Postal code is required"
    if (!gdprConsent) newErrors.gdpr = "You must agree to the privacy policy"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      })
      return
    }

    // Simulate form submission
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
      <div className="rounded-lg bg-muted/20 p-3 sm:p-4 text-center">
        <div className="mx-auto mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10">
          <svg className="h-5 w-5 sm:h-6 sm:w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-base sm:text-lg font-bold">Quote Received!</h3>
        <p className="mb-3 text-muted-foreground text-sm">We'll contact you shortly.</p>
        <div className="rounded-md bg-background p-2 sm:p-3 text-left border text-xs sm:text-sm">
          <p className="font-medium">Request:</p>
          <p className="mt-1">
            <span className="font-medium">Vehicle:</span> {year} {brand} {model}
          </p>
          <p>
            <span className="font-medium">Part:</span> {part}
          </p>
        </div>
        <Button onClick={() => setSubmitted(false)} className="mt-3 w-full text-sm" size="sm">
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
      {/* Vehicle & Part - Compact */}
      <div className="space-y-2">
        <h4 className="font-semibold text-sm sm:text-base">Vehicle & Part</h4>

        <div className="grid gap-2 grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="brand" className="text-xs font-medium">Brand *</Label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger id="brand" className={`h-8 sm:h-9 text-xs sm:text-sm ${errors.brand ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(brandModels).map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.brand && <p className="text-xs text-destructive">{errors.brand}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="model" className="text-xs font-medium">Model *</Label>
            <Select value={model} onValueChange={setModel} disabled={!brand}>
              <SelectTrigger id="model" className={`h-8 sm:h-9 text-xs sm:text-sm ${errors.model ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Model" />
              </SelectTrigger>
              <SelectContent>
                {availableModels.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.model && <p className="text-xs text-destructive">{errors.model}</p>}
          </div>
        </div>

        <div className="grid gap-2 grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="year" className="text-xs font-medium">Year *</Label>
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger id="year" className={`h-8 sm:h-9 text-xs sm:text-sm ${errors.year ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.year && <p className="text-xs text-destructive">{errors.year}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="part" className="text-xs font-medium">Part *</Label>
            <Select value={part} onValueChange={setPart}>
              <SelectTrigger id="part" className={`h-8 sm:h-9 text-xs sm:text-sm ${errors.part ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Part" />
              </SelectTrigger>
              <SelectContent>
                {parts.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.part && <p className="text-xs text-destructive">{errors.part}</p>}
          </div>
        </div>
      </div>

      {/* Contact - Compact */}
      <div className="space-y-2">
        <h4 className="font-semibold text-sm sm:text-base">Contact</h4>

        <div className="space-y-1">
          <Label htmlFor="fullName" className="text-xs font-medium">Name *</Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your name"
            className={`h-8 sm:h-9 text-xs sm:text-sm ${errors.fullName ? "border-destructive" : ""}`}
          />
          {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
        </div>

        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-xs font-medium">Email *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={`h-8 sm:h-9 text-xs sm:text-sm ${errors.email ? "border-destructive" : ""}`}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-xs font-medium">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className={`h-8 sm:h-9 text-xs sm:text-sm ${errors.phone ? "border-destructive" : ""}`}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="zip" className="text-xs font-medium">ZIP Code *</Label>
          <Input
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="12345"
            className={`h-8 sm:h-9 text-xs sm:text-sm ${errors.zip ? "border-destructive" : ""}`}
          />
          {errors.zip && <p className="text-xs text-destructive">{errors.zip}</p>}
        </div>

        {errors.contact && <p className="text-xs text-destructive">{errors.contact}</p>}
      </div>

      {/* Optional VIN - Only show on larger screens */}
      <div className="hidden sm:block space-y-1">
        <Label htmlFor="vin" className="text-xs font-medium">VIN (Optional)</Label>
        <Input
          id="vin"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          placeholder="For better accuracy"
          className="h-8 sm:h-9 text-xs sm:text-sm"
        />
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start gap-2">
        <Checkbox
          id="gdpr"
          checked={gdprConsent}
          onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
          className={`mt-0.5 ${errors.gdpr ? "border-destructive" : ""}`}
        />
        <Label htmlFor="gdpr" className="text-xs leading-relaxed cursor-pointer">
          I agree to the{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          . *
        </Label>
      </div>
      {errors.gdpr && <p className="text-xs text-destructive">{errors.gdpr}</p>}

      <Button type="submit" className="w-full h-9 sm:h-10 text-sm font-medium">
        Get Quote
      </Button>
    </form>
  )
}