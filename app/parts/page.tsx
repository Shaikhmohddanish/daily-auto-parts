"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { RequestQuoteForm } from "@/components/request-quote-form"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"
import { partsData } from "@/lib/parts-data"
import { Filter, X } from "lucide-react"

function PartsContent() {
  const searchParams = useSearchParams()
  const [brand, setBrand] = useState(searchParams.get("brand") || "all")
  const [model, setModel] = useState(searchParams.get("model") || "all")
  const [year, setYear] = useState(searchParams.get("year") || "all")
  const [part, setPart] = useState(searchParams.get("part") || "all")
  const [condition, setCondition] = useState("all")
  const [warranty, setWarranty] = useState("all")
  const [availability, setAvailability] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const years = Array.from({ length: 2026 - 1985 + 1 }, (_, i) => (2026 - i).toString())
  const availableModels = brand ? brandModels[brand] || [] : []

  useEffect(() => {
    if (brand) {
      setModel("")
    }
  }, [brand])

  const clearFilters = () => {
    setBrand("all")
    setModel("all")
    setYear("all")
    setPart("all")
    setCondition("all")
    setWarranty("all")
    setAvailability("all")
    setSearchTerm("")
  }

  const hasActiveFilters =
    brand !== "all" ||
    model !== "all" ||
    year !== "all" ||
    part !== "all" ||
    condition !== "all" ||
    warranty !== "all" ||
    availability !== "all" ||
    searchTerm

  // Filter parts based on search term
  const filteredParts = partsData.filter((p) => {
    if (searchTerm) {
      return p.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
    if (part !== "all") {
      return p.name.toLowerCase().includes(part.toLowerCase())
    }
    return true
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-3 text-4xl font-bold">Auto Parts Catalogue</h1>
        <p className="text-muted-foreground">
          Browse our extensive selection of OEM, aftermarket, and quality used auto parts. Can't find what you need?
          Request a quote and we'll source it for you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Filters Sidebar - Desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-6 rounded-lg border bg-card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              )}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="filter-brand">Brand</Label>
                <Select value={brand} onValueChange={setBrand}>
                  <SelectTrigger id="filter-brand">
                    <SelectValue placeholder="All brands" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All brands</SelectItem>
                    {Object.keys(brandModels).map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filter-model">Model</Label>
                <Select value={model} onValueChange={setModel} disabled={!brand}>
                  <SelectTrigger id="filter-model">
                    <SelectValue placeholder="All models" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All models</SelectItem>
                    {availableModels.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filter-year">Year</Label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger id="filter-year">
                    <SelectValue placeholder="All years" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All years</SelectItem>
                    {years.map((y) => (
                      <SelectItem key={y} value={y}>
                        {y}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filter-part">Part Type</Label>
                <Select value={part} onValueChange={setPart}>
                  <SelectTrigger id="filter-part">
                    <SelectValue placeholder="All parts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All parts</SelectItem>
                    {parts.slice(0, 30).map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filter-condition">Condition</Label>
                <Select value={condition} onValueChange={setCondition}>
                  <SelectTrigger id="filter-condition">
                    <SelectValue placeholder="All conditions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All conditions</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="reman">Remanufactured</SelectItem>
                    <SelectItem value="used">Used</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filter-warranty">Warranty</Label>
                <Select value={warranty} onValueChange={setWarranty}>
                  <SelectTrigger id="filter-warranty">
                    <SelectValue placeholder="All warranties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All warranties</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filter-availability">Availability</Label>
                <Select value={availability} onValueChange={setAvailability}>
                  <SelectTrigger id="filter-availability">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="in-stock">In Stock</SelectItem>
                    <SelectItem value="backorder">Backorder</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="filter-search">Search Parts</Label>
                <Input
                  id="filter-search"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Filters Button */}
        <div className="lg:hidden">
          <Button variant="outline" onClick={() => setShowFilters(true)} className="w-full">
            <Filter className="mr-2 h-4 w-4" />
            Filters{" "}
            {hasActiveFilters &&
              `(${[brand, model, year, part, condition, warranty, availability, searchTerm].filter(Boolean).length})`}
          </Button>
        </div>

        {/* Results Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{filteredParts.length} parts found</p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Can't Find Your Part?</Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Request a Quote</DialogTitle>
                </DialogHeader>
                <RequestQuoteForm initialPart={part} />
              </DialogContent>
            </Dialog>
          </div>

          {filteredParts.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <h3 className="mb-2 text-lg font-semibold">No parts found</h3>
                <p className="mb-4 text-muted-foreground">
                  We couldn't find any parts matching your search. Try adjusting your filters or request a custom quote.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Request a Quote</Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Request a Quote</DialogTitle>
                    </DialogHeader>
                    <RequestQuoteForm initialPart={part} />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredParts.map((partItem) => (
                <Link key={partItem.slug} href={partItem.link}>
                  <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <Image
                        src={partItem.image || "/placeholder.svg"}
                        alt={partItem.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{partItem.name}</h3>
                      {partItem.description && (
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {partItem.description}
                        </p>
                      )}
                      <p className="mt-2 text-sm text-primary">View Details →</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Dialog */}
      {showFilters && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b p-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile-filter-brand">Brand</Label>
                  <Select value={brand} onValueChange={setBrand}>
                    <SelectTrigger id="mobile-filter-brand">
                      <SelectValue placeholder="All brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All brands</SelectItem>
                      {Object.keys(brandModels).map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile-filter-model">Model</Label>
                  <Select value={model} onValueChange={setModel} disabled={!brand}>
                    <SelectTrigger id="mobile-filter-model">
                      <SelectValue placeholder="All models" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All models</SelectItem>
                      {availableModels.map((m) => (
                        <SelectItem key={m} value={m}>
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile-filter-year">Year</Label>
                  <Select value={year} onValueChange={setYear}>
                    <SelectTrigger id="mobile-filter-year">
                      <SelectValue placeholder="All years" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All years</SelectItem>
                      {years.map((y) => (
                        <SelectItem key={y} value={y}>
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile-filter-part">Part Type</Label>
                  <Select value={part} onValueChange={setPart}>
                    <SelectTrigger id="mobile-filter-part">
                      <SelectValue placeholder="All parts" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All parts</SelectItem>
                      {parts.slice(0, 30).map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile-filter-search">Search Parts</Label>
                  <Input
                    id="mobile-filter-search"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Button variant="outline" onClick={clearFilters} className="flex-1 bg-transparent">
                  Clear All
                </Button>
                <Button onClick={() => setShowFilters(false)} className="flex-1">
                  Show Results
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function PartsPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <PartsContent />
    </Suspense>
  )
}
