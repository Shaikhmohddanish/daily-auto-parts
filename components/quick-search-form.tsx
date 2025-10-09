"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"
import { Search } from "lucide-react"

export function QuickSearchForm() {
  const router = useRouter()
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [part, setPart] = useState("")

  const years = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => (2026 - i).toString())
  const availableModels = brand ? brandModels[brand] || [] : []

  useEffect(() => {
    if (brand) {
      setModel("")
    }
  }, [brand])

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (brand) params.set("brand", brand)
    if (model) params.set("model", model)
    if (year) params.set("year", year)
    if (part) params.set("part", part)

    router.push(`/parts?${params.toString()}`)
  }

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <Label htmlFor="quick-brand">Brand</Label>
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger id="quick-brand">
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-model">Model</Label>
          <Select value={model} onValueChange={setModel} disabled={!brand}>
            <SelectTrigger id="quick-model">
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-year">Year</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger id="quick-year">
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="quick-part">Part</Label>
          <Select value={part} onValueChange={setPart}>
            <SelectTrigger id="quick-part">
              <SelectValue placeholder="Select part" />
            </SelectTrigger>
            <SelectContent>
              {parts.slice(0, 20).map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={handleSearch} size="lg" className="mt-6 w-full" disabled={!brand && !model && !year && !part}>
        <Search className="mr-2 h-4 w-4" />
        Search Parts
      </Button>
    </div>
  )
}
