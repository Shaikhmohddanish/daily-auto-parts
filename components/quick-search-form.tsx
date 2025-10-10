"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"
import { Search } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useScrollbarFix } from "@/hooks/use-scrollbar-fix"
import Link from "next/link"

export function QuickSearchForm() {
  const router = useRouter()
  const isMobile = useIsMobile()
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [part, setPart] = useState("")
  const [termsAgreed, setTermsAgreed] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Apply scrollbar fix
  useScrollbarFix()

  const years = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => (2026 - i).toString())
  const availableModels: string[] = brand ? brandModels[brand] || [] : []

  useEffect(() => {
    if (brand) {
      setModel("")
    }
  }, [brand])

  const handleSearch = async () => {
    // Validate that terms are agreed
    if (!termsAgreed) {
      setErrors({ terms: "You must agree to the Terms and Conditions" })
      return
    }

    setErrors({})
    
    const params = new URLSearchParams()
    if (brand) params.set("brand", brand)
    if (model) params.set("model", model)
    if (year) params.set("year", year)
    if (part) params.set("part", part)

    // Log search to Google Form for analytics (optional)
    try {
      const formData = new FormData()
      formData.append("brand", brand || "Not specified")
      formData.append("model", model || "Not specified")
      formData.append("year", year || "Not specified")
      formData.append("part", part || "Not specified")
      formData.append("termsAgreed", termsAgreed.toString())
      formData.append("formType", "quick-search")
      
      // Send the search data to our API endpoint (don't await to keep search fast)
      fetch("/api/google-form-proxy", {
        method: "POST",
        body: formData
      }).catch(err => console.error("Error logging search:", err))
    } catch (error) {
      // Just log the error but continue with search
      console.error("Error logging search:", error)
    }

    // Navigate to search results
    router.push(`/parts?${params.toString()}`)
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className={isMobile ? "grid grid-cols-2 gap-4" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}>
        {isMobile ? (
          <>
            {/* Left column for mobile */}
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <Label htmlFor="quick-brand">Brand</Label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger id="quick-brand">
                    <SelectValue placeholder="Select brand" />
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
                <Select value={model} onValueChange={setModel} disabled={!brand}>
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
              <Label htmlFor="quick-brand">Brand</Label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger id="quick-brand">
                  <SelectValue placeholder="Select brand" />
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
              <Select value={model} onValueChange={setModel} disabled={!brand}>
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
            I agree to the <Link href="/terms" className="text-primary hover:underline">Terms and Conditions</Link>
          </label>
          {errors.terms && <p className="text-sm text-destructive">{errors.terms}</p>}
        </div>
      </div>

      <Button onClick={handleSearch} size="lg" className="mt-4 w-full" disabled={!brand && !model && !year && !part}>
        <Search className="mr-2 h-4 w-4" />
        Search Parts
      </Button>
    </div>
  )
}
