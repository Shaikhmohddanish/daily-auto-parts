import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { partsData } from "@/lib/parts-data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Filter } from "lucide-react"

export const metadata: Metadata = {
  title: "Parts Catalogue | Daily Auto Parts",
  description: "Browse our complete catalogue of auto parts for all makes and models. Find high-quality OEM and aftermarket parts with warranty options.",
}

export default function PartsPage() {
  // Return the parts catalogue page
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Parts Catalogue</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Browse our extensive selection of high-quality auto parts for all makes and models. 
          All parts are thoroughly inspected and come with warranty options.
        </p>
      </div>

      {/* Filter by category section */}
      <div className="flex flex-wrap gap-2 justify-center py-4">
        <Badge variant="secondary" className="text-sm py-1.5 px-3 cursor-pointer">
          <Filter className="h-4 w-4 mr-1" /> All Categories
        </Badge>
        {Array.from(new Set(partsData.map(part => part.category))).map(category => (
          <Badge key={category} variant="outline" className="text-sm py-1.5 px-3 cursor-pointer hover:bg-primary hover:text-primary-foreground">
            {category}
          </Badge>
        ))}
      </div>
      
      {/* Parts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {partsData.map((part) => (
          <Card key={part.slug} className="overflow-hidden flex flex-col h-full">
            <div className="aspect-square relative">
              <Image
                src={part.image}
                alt={part.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-2 flex-grow">
              <h3 className="font-bold text-lg">{part.name}</h3>
              <p className="text-muted-foreground line-clamp-3">
                {part.description}
              </p>
              <Badge variant="outline" className="mt-2">
                {part.category}
              </Badge>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button asChild className="w-full">
                <Link href={part.link}>
                  View Details
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
