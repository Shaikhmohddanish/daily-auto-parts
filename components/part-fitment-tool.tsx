"use client"

import React, { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { brandModels } from "@/lib/brand-models"
import { CheckCircle, Search, Shield, DollarSign, Car } from "lucide-react"

export function PartFitmentTool() {
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [year, setYear] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const years = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => (2026 - i).toString())
  const availableModels = brand ? brandModels[brand] || [] : []

  useEffect(() => {
    if (brand) {
      setModel("")
      setIsSubmitted(false)
    }
  }, [brand])

  useEffect(() => {
    if (model || year) {
      setIsSubmitted(false)
    }
  }, [model, year])

  const isComplete = brand && model && year

  const handleCheck = () => {
    if (isComplete) {
      setIsSubmitted(true)
    }
  }

  return (
    <Card className="w-full border-2 border-primary/20 shadow-md overflow-hidden">
      <CardHeader className="bg-primary/5 px-4 py-3 sm:px-6 sm:py-4 border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl font-bold text-primary">
          <Car className="h-5 w-5 sm:h-6 sm:w-6" />
          Check Compatibility
        </CardTitle>
      </CardHeader>
      
      <CardContent className="px-4 py-4 sm:px-6 sm:py-5">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Verify part fitment for your vehicle to ensure perfect compatibility
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fitment-brand" className="text-sm font-medium">
                Brand
              </Label>
              <Select value={brand} onValueChange={setBrand}>
                <SelectTrigger id="fitment-brand" className="h-10">
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
              <Label htmlFor="fitment-model" className="text-sm font-medium">
                Model
              </Label>
              <Select value={model} onValueChange={setModel} disabled={!brand}>
                <SelectTrigger id="fitment-model" className="h-10">
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
            </div>

            <div className="space-y-2">
              <Label htmlFor="fitment-year" className="text-sm font-medium">
                Year
              </Label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger id="fitment-year" className="h-10">
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

          <div className="flex justify-end">
            <Button 
              onClick={handleCheck} 
              disabled={!isComplete}
              className="mt-2"
              size="sm"
            >
              <Search className="h-4 w-4 mr-1" />
              Check Compatibility
            </Button>
          </div>

          {isSubmitted && isComplete && (
            <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <p className="font-medium">
                  Compatible with your {year} {brand} {model}
                </p>
                <p className="text-sm text-green-700">
                  This part fits your vehicle. Include your VIN at checkout for the most accurate fitment.
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="px-4 py-4 sm:px-6 sm:py-5 bg-gray-50 border-t flex flex-col sm:flex-row gap-4 justify-between">
        <div className="grid grid-cols-2 gap-3 w-full">
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium">Proper Compatibility</p>
              <p className="text-xs text-muted-foreground">Guaranteed fit for your vehicle</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium">Prevents Issues</p>
              <p className="text-xs text-muted-foreground">Avoid installation problems</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <DollarSign className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium">Saves Money</p>
              <p className="text-xs text-muted-foreground">No returns or exchanges needed</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Car className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium">Guaranteed Function</p>
              <p className="text-xs text-muted-foreground">Parts work as intended</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
