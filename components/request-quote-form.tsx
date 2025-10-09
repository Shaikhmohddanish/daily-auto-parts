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

    setSubmitted(true)
    toast({
      title: "Quote Request Received!",
      description: "Thanks! A parts specialist will contact you shortly.",
    })

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
      <div className="rounded-lg bg-muted/20 p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-lg font-bold">Quote Request Received!</h3>
        <p className="mb-4 text-muted-foreground">
          Thank you! A parts specialist will contact you shortly with a quote.
        </p>
        <div className="rounded-md bg-background p-4 text-left border">
          <h4 className="font-medium">Your Request Summary:</h4>
          <div className="mt-2 space-y-1 text-sm">
            <p><span className="font-medium">Vehicle:</span> {year} {brand} {model}</p>
            <p><span className="font-medium">Part:</span> {part}</p>
            <p><span className="font-medium">Quantity:</span> {quantity}</p>
            <p><span className="font-medium">Contact:</span> {fullName}</p>
          </div>
        </div>
        <Button onClick={() => setSubmitted(false)} className="mt-4 w-full">
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Vehicle Information</h3>
        
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="brand">Vehicle Brand *</Label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger id="brand" className={errors.brand ? "border-destructive" : ""}>
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(brandModels).map((b) => (
                  <SelectItem key={b} value={b}>{b}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.brand && <p className="text-sm text-destructive">{errors.brand}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="model">Vehicle Model *</Label>
            <Select value={model} onValueChange={setModel} disabled={!brand}>
              <SelectTrigger id="model" className={errors.model ? "border-destructive" : ""}>
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                {availableModels.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.model && <p className="text-sm text-destructive">{errors.model}</p>}
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
                  <SelectItem key={y} value={y}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.year && <p className="text-sm text-destructive">{errors.year}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={errors.quantity ? "border-destructive" : ""}
            />
            {errors.quantity && <p className="text-sm text-destructive">{errors.quantity}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="part">Part Needed *</Label>
          <Select value={part} onValueChange={setPart}>
            <SelectTrigger id="part" className={errors.part ? "border-destructive" : ""}>
              <SelectValue placeholder="Select part" />
            </SelectTrigger>
            <SelectContent>
              {parts.map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.part && <p className="text-sm text-destructive">{errors.part}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="vin">VIN Number (Optional)</Label>
          <Input
            id="vin"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="Enter VIN for better part matching"
            maxLength={17}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Contact Information</h3>
        
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className={errors.fullName ? "border-destructive" : ""}
          />
          {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="zip">ZIP/Postal Code *</Label>
          <Input
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="12345"
            className={errors.zip ? "border-destructive" : ""}
          />
          {errors.zip && <p className="text-sm text-destructive">{errors.zip}</p>}
        </div>

        {errors.contact && <p className="text-sm text-destructive">{errors.contact}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Additional Notes (Optional)</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any specific requirements or questions about the part..."
          rows={3}
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="gdpr"
          checked={gdprConsent}
          onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
          className={`mt-0.5 ${errors.gdpr ? "border-destructive" : ""}`}
        />
        <Label htmlFor="gdpr" className="text-sm leading-relaxed cursor-pointer">
          I agree to the{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{" "}
          and consent to the collection and processing of my personal data for quote purposes. *
        </Label>
      </div>
      {errors.gdpr && <p className="text-sm text-destructive">{errors.gdpr}</p>}

      <Button type="submit" className="w-full" size="lg">
        Request Quote
      </Button>
    </form>
  )
}
