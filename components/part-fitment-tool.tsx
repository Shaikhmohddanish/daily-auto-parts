"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { brandModels } from "@/lib/brand-models"
import { CheckCircle } from "lucide-react"

export function PartFitmentTool() {
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")

  const years = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => (2026 - i).toString())
  const availableModels = brand ? brandModels[brand] || [] : []

  useEffect(() => {
    if (brand) {
      setModel("")
    }
  }, [brand])

  const isComplete = brand && model && year

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-1">
        <h3 className="mb-4 font-semibold">Check Fitment for Your Vehicle</h3>
        <div className="space-y-4 flex-1">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="fitment-brand">Brand</Label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger id="fitment-brand">
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
              <Label htmlFor="fitment-model">Model</Label>
              <Select value={model} onValueChange={setModel} disabled={!brand}>
                <SelectTrigger id="fitment-model">
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
              <Label htmlFor="fitment-year">Year</Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger id="fitment-year">
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
          </div>

          {isComplete && (
            <div className="flex items-center gap-2 rounded-md bg-primary/10 p-3 text-sm">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>
                This part may be compatible with your {year} {brand} {model}. Include your VIN when requesting a quote
                for exact fitment verification.
              </span>
            </div>
          )}

          {!isComplete && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Select your vehicle details above to check compatibility. For exact fitment, include your VIN in the quote
                request form.
              </p>
              
              <div className="border-t pt-4 space-y-3">
                <h4 className="font-medium text-sm">Why Vehicle Fitment Matters:</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ensures proper part compatibility</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prevents installation issues</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Saves time and money</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Guarantees proper function</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
