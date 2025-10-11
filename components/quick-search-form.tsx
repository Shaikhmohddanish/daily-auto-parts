"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"
import { Search } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useScrollbarFix } from "@/hooks/use-scrollbar-fix"
import Link from "next/link"

export function QuickSearchForm() {
  const router = useRouter()
  const isMobile = useIsMobile()
  const { toast } = useToast()
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [part, setPart] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [zip, setZip] = useState("")
  const [website] = useState("dailyautoparts.com")
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [step, setStep] = useState(1)
  
  // Apply scrollbar fix
  useScrollbarFix()

  const years = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => (2026 - i).toString())
  const availableModels: string[] = make ? brandModels[make] || [] : []

  useEffect(() => {
    if (make) {
      setModel("")
    }
  }, [make])

  const validateFields = () => {
    const newErrors: Record<string, string> = {};
    
    if (step === 2) {
      if (!name) newErrors.name = "Name is required";
      if (!email) newErrors.email = "Email is required";
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = "Invalid email format";
      }
      if (!contact) newErrors.contact = "Contact number is required";
      if (!zip) newErrors.zip = "ZIP/Postal code is required";
    }
    
    // Validate that terms are agreed
    if (!termsAgreed) {
      newErrors.terms = "You must agree to the Terms and Conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = async () => {
    if (!validateFields()) {
      return;
    }

    setErrors({})
    
    // Create FormData object to send to the API
    try {
      const formData = new FormData()
      formData.append("make", make || "Not specified")
      formData.append("model", model || "Not specified")
      formData.append("year", year || "Not specified")
      formData.append("part", part || "Not specified")
      formData.append("name", name || "")
      formData.append("email", email || "")
      formData.append("contact", contact || "")
      formData.append("zip", zip || "")
      formData.append("website", website)
      formData.append("termsAgreed", termsAgreed.toString())
      formData.append("formType", "quick-search")
      
      // Send the form data directly to the API endpoint
      const response = await fetch("/api/google-form-proxy", {
        method: "POST",
        body: formData
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      // Show success message using toast or other notification
      toast({
        title: "Request submitted successfully!",
        description: "We'll get back to you shortly with the requested information.",
      });
      
      // Reset form
      setMake("");
      setModel("");
      setYear("");
      setPart("");
      setName("");
      setEmail("");
      setContact("");
      setZip("");
      setStep(1);
      
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      {step === 1 && (
        <div className={isMobile ? "grid grid-cols-2 gap-4" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}>
          {isMobile ? (
            <>
              {/* Left column for mobile */}
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quick-make">Make</Label>
                <Select value={make} onValueChange={setMake}>
                  <SelectTrigger id="quick-make">
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(brandModels).map((b: string) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quick-model">Model</Label>
                <Select value={model} onValueChange={setModel} disabled={!make}>
                  <SelectTrigger id="quick-model">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableModels.map((m: string) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Right column for mobile */}
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quick-year">Year</Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger id="quick-year">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent style={{ maxHeight: '250px', overflowY: 'scroll' }} className="select-dropdown-with-scrollbar">
                    <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                      {years.map((y: string) => (
                        <SelectItem key={y} value={y}>
                          {y}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quick-part">Part</Label>
                <Select value={part} onValueChange={setPart}>
                  <SelectTrigger id="quick-part">
                    <SelectValue placeholder="Select part" />
                  </SelectTrigger>
                  <SelectContent style={{ maxHeight: '250px', overflowY: 'scroll' }} className="select-dropdown-with-scrollbar">
                    <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                      {parts.map((p: string) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </div>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Desktop layout */}
            <div className="space-y-2">
              <Label htmlFor="quick-make">Make</Label>
              <Select value={make} onValueChange={setMake}>
                <SelectTrigger id="quick-make">
                  <SelectValue placeholder="Select make" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(brandModels).map((b: string) => (
                    <SelectItem key={b} value={b}>
                      {b}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quick-model">Model</Label>
              <Select value={model} onValueChange={setModel} disabled={!make}>
                <SelectTrigger id="quick-model">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  {availableModels.map((m: string) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quick-year">Year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger id="quick-year">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent style={{ maxHeight: '250px', overflowY: 'scroll' }} className="select-dropdown-with-scrollbar">
                  <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    {years.map((y: string) => (
                      <SelectItem key={y} value={y}>
                        {y}
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quick-part">Part</Label>
              <Select value={part} onValueChange={setPart}>
                <SelectTrigger id="quick-part">
                  <SelectValue placeholder="Select part" />
                </SelectTrigger>
                <SelectContent style={{ maxHeight: '250px', overflowY: 'scroll' }} className="select-dropdown-with-scrollbar">
                  <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    {parts.map((p: string) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      </div>
      )}

      {step === 1 ? (
        <div className="mt-4 flex items-start space-x-2">
          <Checkbox 
            id="terms" 
            checked={termsAgreed} 
            onCheckedChange={(checked) => setTermsAgreed(checked === true)} 
            className="mt-0.5" 
          />
          <div className="space-y-1">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the <Link href="/terms" className="text-primary hover:underline">Terms and Conditions</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
            </label>
            {errors.terms && <p className="text-sm text-destructive">{errors.terms}</p>}
          </div>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quick-name">Name <span className="text-destructive">*</span></Label>
            <Input
              id="quick-name" 
              className={errors.name ? "border-destructive" : ""}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quick-email">Email <span className="text-destructive">*</span></Label>
            <Input 
              id="quick-email" 
              type="email"
              className={errors.email ? "border-destructive" : ""}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quick-contact">Phone <span className="text-destructive">*</span></Label>
            <Input 
              id="quick-contact" 
              type="tel"
              className={errors.contact ? "border-destructive" : ""}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="(555) 123-4567"
            />
            {errors.contact && <p className="text-xs text-destructive">{errors.contact}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="quick-zip">ZIP <span className="text-destructive">*</span></Label>
            <Input 
              id="quick-zip" 
              className={errors.zip ? "border-destructive" : ""}
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="ZIP/Postal code"
            />
            {errors.zip && <p className="text-xs text-destructive">{errors.zip}</p>}
          </div>
          
          <div className="col-span-1 md:col-span-2 flex items-center">
            <Button 
              variant="outline" 
              type="button" 
              onClick={() => setStep(1)} 
              className="mr-2"
            >
              Back
            </Button>
          </div>
        </div>
      )}

      {step === 1 ? (
        <Button onClick={() => setStep(2)} size="lg" className="mt-4 w-full" disabled={!make && !model && !year && !part}>
          <Search className="mr-2 h-4 w-4" />
          Next
        </Button>
      ) : (
        <Button onClick={handleSearch} size="lg" className="mt-4 w-full" disabled={!name || !email || !contact || !zip}>
          <Search className="mr-2 h-4 w-4" />
          Search Parts
        </Button>
      )}
    </div>
  )
}
