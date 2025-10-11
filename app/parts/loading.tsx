export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Parts Catalogue</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Browse our extensive selection of high-quality auto parts for all makes and models.
        </p>
      </div>

      {/* Skeleton loading for filters */}
      <div className="flex flex-wrap gap-2 justify-center py-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div 
            key={i} 
            className="h-8 w-20 animate-pulse rounded-full bg-muted"
          ></div>
        ))}
      </div>
      
      {/* Skeleton loading for parts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(12).fill(0).map((_, i) => (
          <div key={i} className="rounded-lg border bg-card overflow-hidden">
            <div className="aspect-square bg-muted animate-pulse"></div>
            <div className="p-4 space-y-3">
              <div className="h-6 w-3/4 bg-muted rounded animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse"></div>
                <div className="h-4 bg-muted rounded animate-pulse"></div>
              </div>
              <div className="h-6 w-1/4 mt-2 bg-muted rounded animate-pulse"></div>
            </div>
            <div className="p-4 pt-0">
              <div className="h-10 w-full bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
