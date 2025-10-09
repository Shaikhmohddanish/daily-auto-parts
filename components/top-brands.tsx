import Link from "next/link"
import Image from "next/image"

export function TopBrands() {
  const topBrands = [
    { name: "Audi", image: "/images/audi.webp" },
    { name: "Ford", image: "/images/ford.webp" },
    { name: "Chevrolet", image: "/images/chevolet.webp" },
    { name: "Porsche", image: "/images/porche.webp" },
    { name: "GMC", image: "/images/gmc.webp" },
    { name: "Dodge", image: "/images/dodge.webp" },
    { name: "GM", image: "/images/gm.webp" },
    { name: "Toyota", image: "/images/tyota.webp" },
    { name: "BMW", image: "/images/bmw.webp" },
    { name: "Mercedes-Benz", image: "/images/mercedes.webp" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
      {topBrands.map((brand) => (
        <Link
          key={brand.name}
          href={`/parts?brand=${encodeURIComponent(brand.name)}`}
          className="group flex flex-col items-center justify-center rounded-lg border bg-card p-3 md:p-6 transition-all hover:border-primary hover:shadow-md"
        >
          <div className="mb-2 md:mb-3 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white overflow-hidden group-hover:shadow-lg transition-shadow">
            <Image
              src={brand.image}
              alt={`${brand.name} logo`}
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="text-center text-xs md:text-sm font-medium leading-tight">{brand.name}</span>
        </Link>
      ))}
    </div>
  )
}
