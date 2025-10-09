"use client"

import React, { useState, useEffect } from "react"
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
    <div className="space-y-3 sm:space-y-4">
      {/* Vehicle Selection - Compact on mobile */}
      <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-3">
        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="fitment-brand" className="text-xs sm:text-sm font-medium">Brand</Label>
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger id="fitment-brand" className="h-9 sm:h-10">
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

        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="fitment-model" className="text-xs sm:text-sm font-medium">Model</Label>
          <Select value={model} onValueChange={setModel} disabled={!brand}>
            <SelectTrigger id="fitment-model" className="h-9 sm:h-10">
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

        <div className="space-y-1 sm:space-y-2">
          <Label htmlFor="fitment-year" className="text-xs sm:text-sm font-medium">Year</Label>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger id="fitment-year" className="h-9 sm:h-10">
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

      {/* Results - More compact */}
      {isComplete && (
        <div className="flex items-start gap-2 rounded-md bg-primary/10 p-2 sm:p-3 text-xs sm:text-sm">
          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
          <span className="leading-relaxed">
            Compatible with your {year} {brand} {model}. Include VIN for exact fitment.
          </span>
        </div>
      )}

      {!isComplete && (
        <div className="space-y-2 sm:space-y-3">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Select your vehicle details to check compatibility.
          </p>
          
          {/* Simplified benefits - only show on larger screens */}
          <div className="hidden sm:block border-t pt-3 space-y-2">
            <h4 className="font-medium text-sm">Why Vehicle Fitment Matters:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <span>Proper compatibility</span>
              </div>
              <div className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <span>Prevents issues</span>
              </div>
              <div className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <span>Saves money</span>
              </div>
              <div className="flex items-start gap-1">
                <CheckCircle className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <span>Guaranteed function</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
