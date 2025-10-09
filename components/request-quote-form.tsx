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

interface RequestQuoteFormProps {
  initialPart?: string
}

export function RequestQuoteForm({ initialPart }: RequestQuoteFormProps) {
  const { toast } = useToast()
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [part, setPart] = useState(initialPart || "")
  const [quantity, setQuantity] = useState("1")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [zip, setZip] = useState("")
  const [vin, setVin] = useState("")
  const [notes, setNotes] = useState("")
  const [engine, setEngine] = useState("")
  const [transmission, setTransmission] = useState("")
  const [drivetrain, setDrivetrain] = useState("")
  const [fuelType, setFuelType] = useState("")
  const [bodyStyle, setBodyStyle] = useState("")
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
    if (Number.parseInt(quantity) < 1) newErrors.quantity = "Quantity must be at least 1"
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
      <div className="rounded-lg border bg-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold">Quote Request Received!</h3>
        <p className="mb-4 text-muted-foreground">Thanks! A parts specialist will contact you shortly.</p>
        <div className="rounded-md bg-muted p-4 text-left">
          <p className="text-sm font-medium">Your Request:</p>
          <p className="mt-2 text-sm">
            <span className="font-medium">Vehicle:</span> {year} {brand} {model}
          </p>
          <p className="text-sm">
            <span className="font-medium">Part:</span> {part}
          </p>
          <p className="text-sm">
            <span className="font-medium">Quantity:</span> {quantity}
          </p>
        </div>
        <Button onClick={() => setSubmitted(false)} className="mt-6">
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border bg-card p-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Request a Quote</h3>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and we'll get back to you with pricing and availability.
        </p>
      </div>

      {/* Vehicle Information */}
      <div className="space-y-4">
        <h4 className="font-semibold">Vehicle Information</h4>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="brand">Brand *</Label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger id="brand" className={errors.brand ? "border-destructive" : ""}>
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
            {errors.brand && <p className="text-xs text-destructive">{errors.brand}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Model *</Label>
            <Select value={model} onValueChange={setModel} disabled={!brand}>
              <SelectTrigger id="model" className={errors.model ? "border-destructive" : ""}>
                <SelectValue placeholder="Select model" />
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

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="year">Year *</Label>
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger id="year" className={errors.year ? "border-destructive" : ""}>
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
            {errors.year && <p className="text-xs text-destructive">{errors.year}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="part">Part Needed *</Label>
            <Select value={part} onValueChange={setPart}>
              <SelectTrigger id="part" className={errors.part ? "border-destructive" : ""}>
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
            {errors.part && <p className="text-xs text-destructive">{errors.part}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="engine">Engine</Label>
            <Select value={engine} onValueChange={setEngine}>
              <SelectTrigger id="engine">
                <SelectValue placeholder="Select engine type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="I4">I4</SelectItem>
                <SelectItem value="V6">V6</SelectItem>
                <SelectItem value="V8">V8</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
                <SelectItem value="EV">EV</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="transmission">Transmission</Label>
            <Select value={transmission} onValueChange={setTransmission}>
              <SelectTrigger id="transmission">
                <SelectValue placeholder="Select transmission" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Manual">Manual</SelectItem>
                <SelectItem value="Automatic">Automatic</SelectItem>
                <SelectItem value="CVT">CVT</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="drivetrain">Drivetrain</Label>
            <Select value={drivetrain} onValueChange={setDrivetrain}>
              <SelectTrigger id="drivetrain">
                <SelectValue placeholder="Select drivetrain" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="FWD">FWD</SelectItem>
                <SelectItem value="RWD">RWD</SelectItem>
                <SelectItem value="AWD">AWD/4x4</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="fuelType">Fuel Type</Label>
            <Select value={fuelType} onValueChange={setFuelType}>
              <SelectTrigger id="fuelType">
                <SelectValue placeholder="Select fuel type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Gasoline">Gasoline</SelectItem>
                <SelectItem value="Diesel">Diesel</SelectItem>
                <SelectItem value="Hybrid">Hybrid</SelectItem>
                <SelectItem value="Electric">Electric</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bodyStyle">Body Style</Label>
            <Select value={bodyStyle} onValueChange={setBodyStyle}>
              <SelectTrigger id="bodyStyle">
                <SelectValue placeholder="Select body style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sedan">Sedan</SelectItem>
                <SelectItem value="SUV">SUV</SelectItem>
                <SelectItem value="Truck">Truck</SelectItem>
                <SelectItem value="Coupe">Coupe</SelectItem>
                <SelectItem value="Hatchback">Hatchback</SelectItem>
                <SelectItem value="Van">Van</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity *</Label>
            <Select value={quantity} onValueChange={setQuantity}>
              <SelectTrigger id="quantity">
                <SelectValue placeholder="Select quantity" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (i + 1).toString()).map((q) => (
                  <SelectItem key={q} value={q}>
                    {q}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="vin">Vehicle VIN (Optional)</Label>
          <Input
            id="vin"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="For best results, include your VIN"
          />
          <p className="text-xs text-muted-foreground">Including your VIN helps us match the exact OEM part number</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h4 className="font-semibold">Contact Information</h4>

        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className={errors.fullName ? "border-destructive" : ""}
          />
          {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
        </div>

        {errors.contact && <p className="text-xs text-destructive">{errors.contact}</p>}

        <div className="space-y-2">
          <Label htmlFor="zip">ZIP/Postal Code *</Label>
          <Input
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="12345 or A1B 2C3"
            className={errors.zip ? "border-destructive" : ""}
          />
          {errors.zip && <p className="text-xs text-destructive">{errors.zip}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any specific requirements or questions?"
            rows={4}
          />
        </div>
      </div>

      {/* GDPR Consent */}
      <div className="flex items-start gap-2">
        <Checkbox
          id="gdpr"
          checked={gdprConsent}
          onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
          className={errors.gdpr ? "border-destructive" : ""}
        />
        <Label htmlFor="gdpr" className="text-sm leading-relaxed">
          I agree to the processing of my information per the{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
          . *
        </Label>
      </div>
      {errors.gdpr && <p className="text-xs text-destructive">{errors.gdpr}</p>}

      <Button type="submit" size="lg" className="w-full">
        Submit Quote Request
      </Button>
    </form>
  )
}
