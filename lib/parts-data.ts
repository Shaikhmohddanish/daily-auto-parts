// Parts catalogue data for display
export interface PartData {
  slug: string
  name: string
  image: string
  link: string
  description: string
  category: string
  commonIssues?: string[]
  compatibility?: string
  avgLifespan?: string
}

export const partsData: PartData[] = [
  {
    slug: "engine",
    name: "Engine",
    image: "/car-engine-block.jpg",
    link: "/parts/engine",
    description: "Complete engine assemblies and engine blocks for all vehicle makes and models. Our engines are thoroughly tested and come with warranty options.",
    category: "Engine Components",
    commonIssues: ["Overheating", "Oil leaks", "Knocking sounds", "Poor performance"],
    compatibility: "Available for most domestic and import vehicles 1990-2025",
    avgLifespan: "150,000-300,000 miles"
  },
  {
    slug: "transmission",
    name: "Transmission",
    image: "/car-transmission.png",
    link: "/parts/transmission",
    description: "Manual and automatic transmissions, including remanufactured units. All transmissions are tested for proper shifting and fluid integrity.",
    category: "Drivetrain",
    commonIssues: ["Slipping gears", "Hard shifting", "Fluid leaks", "Strange noises"],
    compatibility: "Manual, automatic, and CVT transmissions available",
    avgLifespan: "150,000-200,000 miles"
  },
  {
    slug: "alternator",
    name: "Alternator",
    image: "/car-alternator.jpg",
    link: "/parts/alternator",
    description: "High-quality alternators that provide reliable electrical power for your vehicle. Tested for proper voltage output and amperage capacity.",
    category: "Electrical",
    commonIssues: ["Dim lights", "Battery warning light", "Electrical failures", "Strange noises"],
    compatibility: "12V and 24V systems, various amperage ratings",
    avgLifespan: "100,000-150,000 miles"
  },
  {
    slug: "starter",
    name: "Starter",
    image: "/car-starter-motor.jpg",
    link: "/parts/starter",
    description: "Reliable starter motors for quick engine starts. Each starter is tested for proper engagement and cranking power.",
    category: "Electrical",
    commonIssues: ["Engine won't crank", "Clicking sounds", "Slow cranking", "Intermittent starting"],
    compatibility: "Available for gas and diesel engines",
    avgLifespan: "80,000-150,000 miles"
  },
  {
    slug: "radiator",
    name: "Radiator",
    image: "/car-radiator.png",
    link: "/parts/radiator",
    description: "Cooling system radiators for optimal engine temperature control. Pressure tested for leaks and proper cooling efficiency.",
    category: "Cooling System",
    commonIssues: ["Overheating", "Coolant leaks", "Corrosion", "Clogged tubes"],
    compatibility: "Aluminum and plastic/aluminum construction",
    avgLifespan: "8-10 years"
  },
  {
    slug: "brake-pads",
    name: "Brake Pads",
    image: "/car-brake-pads.png",
    link: "/parts/brake-pads",
    description: "High-quality brake pads for safe and reliable stopping power. Available in ceramic, metallic, and organic compounds.",
    category: "Brake System",
    commonIssues: ["Squealing", "Reduced stopping power", "Vibration", "Wear indicators"],
    compatibility: "Front and rear applications, various vehicle sizes",
    avgLifespan: "25,000-70,000 miles"
  },
  {
    slug: "brake-rotors",
    name: "Brake Rotors",
    image: "/car-brake-rotors.jpg",
    link: "/parts/brake-rotors",
    description: "Precision-machined brake rotors for smooth braking performance. Vented and solid designs available for various applications.",
    category: "Brake System",
    commonIssues: ["Warping", "Scoring", "Vibration during braking", "Noise"],
    compatibility: "Standard and performance applications",
    avgLifespan: "50,000-100,000 miles"
  },
  {
    slug: "shock-absorbers",
    name: "Shock Absorbers",
    image: "/car-shock-absorbers.jpg",
    link: "/parts/shock-absorbers",
    description: "Quality shock absorbers for improved ride comfort and vehicle control. Gas-charged and hydraulic options available.",
    category: "Suspension",
    commonIssues: ["Rough ride", "Excessive bouncing", "Leaking fluid", "Uneven tire wear"],
    compatibility: "Front and rear applications, various vehicle weights",
    avgLifespan: "50,000-100,000 miles"
  },
  {
    slug: "struts",
    name: "Struts",
    image: "/car-struts-suspension.jpg",
    link: "/parts/struts",
    description: "Complete strut assemblies including springs and mounts. Provides structural support and dampening for your vehicle's suspension.",
    category: "Suspension",
    commonIssues: ["Noise over bumps", "Poor handling", "Uneven tire wear", "Vehicle pulling"],
    compatibility: "MacPherson strut systems, quick-strut assemblies",
    avgLifespan: "50,000-100,000 miles"
  },
  {
    slug: "headlights",
    name: "Headlights",
    image: "/car-headlights.png",
    link: "/parts/headlights",
    description: "Complete headlight assemblies including housings and bulbs. HID, LED, and halogen options available for optimal visibility.",
    category: "Lighting",
    commonIssues: ["Dim output", "Moisture buildup", "Cracked lens", "Electrical issues"],
    compatibility: "OEM and aftermarket styling, various bulb types",
    avgLifespan: "10-15 years"
  },
  {
    slug: "tail-lights",
    name: "Tail Lights",
    image: "/car-tail-lights.png",
    link: "/parts/tail-lights",
    description: "Tail light assemblies for safety and legal compliance. LED and incandescent options with proper DOT certification.",
    category: "Lighting",
    commonIssues: ["Burnt bulbs", "Cracked housing", "Water intrusion", "Wiring problems"],
    compatibility: "OEM replacement and custom styling options",
    avgLifespan: "10-15 years"
  },
  {
    slug: "catalytic-converter",
    name: "Catalytic Converter",
    image: "/catalytic-converter.jpg",
    link: "/parts/catalytic-converter",
    description: "EPA-compliant catalytic converters for emissions control. Direct-fit and universal options available with proper certification.",
    category: "Exhaust System",
    commonIssues: ["Check engine light", "Failed emissions test", "Reduced performance", "Rattling noise"],
    compatibility: "CARB and EPA compliant, various engine sizes",
    avgLifespan: "80,000-120,000 miles"
  },
  {
    slug: "ac-compressor",
    name: "AC Compressor",
    image: "/ac-compressor.png",
    link: "/parts/ac-compressor",
    description: "Air conditioning compressors for reliable climate control. Remanufactured units come with new seals and proper refrigerant oil.",
    category: "Climate Control",
    commonIssues: ["No cold air", "Compressor clutch failure", "Refrigerant leaks", "Strange noises"],
    compatibility: "R134a and R1234yf refrigerant systems",
    avgLifespan: "8-12 years"
  },
  {
    slug: "air-bag",
    name: "Air Bag",
    image: "/air-bag.png",
    link: "/parts/air-bag",
    description: "Safety airbag modules for driver and passenger protection. All units are professionally tested and reset for proper deployment.",
    category: "Safety Systems",
    commonIssues: ["Airbag warning light", "Deployed bags", "Sensor malfunctions", "Clock spring issues"],
    compatibility: "Driver, passenger, side, and curtain airbags",
    avgLifespan: "10-15 years"
  },
  {
    slug: "air-filter",
    name: "Air Filter",
    image: "/air-filter.png",
    link: "/parts/air-filter",
    description: "Engine air filters for optimal air flow and engine protection. Paper, foam, and cotton filter media available for various conditions.",
    category: "Engine Components",
    commonIssues: ["Reduced performance", "Poor fuel economy", "Engine hesitation", "Dirty filter element"],
    compatibility: "Standard and high-performance applications",
    avgLifespan: "12,000-15,000 miles"
  },
  {
    slug: "bumper",
    name: "Bumper",
    image: "/bumper.png",
    link: "/parts/bumper",
    description: "Front and rear bumper assemblies for collision repair and replacement. OEM and aftermarket options with proper mounting hardware.",
    category: "Body Parts",
    commonIssues: ["Collision damage", "Cracking", "Paint fade", "Mounting bracket failure"],
    compatibility: "Primed and painted options available",
    avgLifespan: "Vehicle lifetime with proper care"
  },
  {
    slug: "console-front",
    name: "Front Console",
    image: "/console-front.jpg",
    link: "/parts/console-front",
    description: "Center console assemblies with cup holders, storage compartments, and armrests. Available in various colors and trim levels.",
    category: "Interior",
    commonIssues: ["Broken latches", "Worn armrest", "Damaged trim", "Missing components"],
    compatibility: "Cloth, leather, and vinyl upholstery options",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "console-rear",
    name: "Rear Console",
    image: "/console-rear.jpg",
    link: "/parts/console-rear",
    description: "Rear center console components for passenger comfort and storage. Includes cup holders, armrests, and climate controls where applicable.",
    category: "Interior",
    commonIssues: ["Broken cup holders", "Damaged storage lid", "Worn upholstery", "Missing trim pieces"],
    compatibility: "Various trim levels and color options",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "door-handle",
    name: "Door Handle",
    image: "/door-handle.jpg",
    link: "/parts/door-handle",
    description: "Exterior door handles for reliable entry and exit. Chrome, painted, and textured finishes available to match your vehicle.",
    category: "Body Parts",
    commonIssues: ["Handle breaks", "Paint peeling", "Freezing in winter", "Key cylinder wear"],
    compatibility: "Driver and passenger side options",
    avgLifespan: "8-12 years"
  },
  {
    slug: "door-handle-interior",
    name: "Interior Door Handle",
    image: "/door-handle-in.png",
    link: "/parts/door-handle-interior",
    description: "Interior door handles and trim for easy door operation from inside the vehicle. Various colors and finishes to match interior.",
    category: "Interior",
    commonIssues: ["Handle breaks", "Cable disconnection", "Worn finish", "Loose mounting"],
    compatibility: "Front and rear door applications",
    avgLifespan: "10-15 years"
  },
  {
    slug: "door-mirror",
    name: "Door Mirror",
    image: "/door-mirror.jpg",
    link: "/parts/door-mirror",
    description: "Side view mirrors with manual or power adjustment. Heated and auto-dimming options available for enhanced visibility and safety.",
    category: "Body Parts",
    commonIssues: ["Mirror glass broken", "Motor failure", "Loose mounting", "Heating element failure"],
    compatibility: "Manual, power, heated, and folding options",
    avgLifespan: "8-12 years"
  },
  {
    slug: "door",
    name: "Door",
    image: "/door.jpg",
    link: "/parts/door",
    description: "Complete door assemblies including frames, glass, regulators, and hardware. Available for front and rear applications.",
    category: "Body Parts",
    commonIssues: ["Collision damage", "Rust", "Window regulator failure", "Lock mechanism issues"],
    compatibility: "2-door, 4-door, and extended cab applications",
    avgLifespan: "Vehicle lifetime with proper maintenance"
  },
  {
    slug: "drive-shaft-rear",
    name: "Rear Drive Shaft",
    image: "/drive-shaft-rear.jpg",
    link: "/parts/drive-shaft-rear",
    description: "Rear driveshafts for RWD and AWD vehicles. Includes universal joints and proper balancing for smooth power transmission.",
    category: "Drivetrain",
    commonIssues: ["Vibration", "U-joint failure", "Imbalance", "Worn splines"],
    compatibility: "Various lengths and configurations",
    avgLifespan: "100,000-150,000 miles"
  },
  {
    slug: "drive-shaft-front",
    name: "Front Drive Shaft",
    image: "/driving-shaft-front.jpg",
    link: "/parts/drive-shaft-front",
    description: "Front axle shafts and CV axles for FWD and AWD vehicles. Includes CV joints and boots for reliable power delivery.",
    category: "Drivetrain",
    commonIssues: ["CV joint clicking", "Boot tears", "Vibration", "Grease leakage"],
    compatibility: "Left and right side applications",
    avgLifespan: "80,000-120,000 miles"
  },
  {
    slug: "exhaust-assembly",
    name: "Exhaust Assembly",
    image: "/exhaust-assembly.jpg",
    link: "/parts/exhaust-assembly",
    description: "Complete exhaust systems including pipes, mufflers, and resonators. Stainless steel and aluminized options for durability.",
    category: "Exhaust System",
    commonIssues: ["Rust holes", "Loud exhaust", "Emissions failure", "Rattling noises"],
    compatibility: "Single and dual exhaust configurations",
    avgLifespan: "5-8 years"
  },
  {
    slug: "fender",
    name: "Fender",
    image: "/fender.png",
    link: "/parts/fender",
    description: "Front and rear fenders for collision repair and rust replacement. Steel and aluminum construction with proper fitment.",
    category: "Body Parts",
    commonIssues: ["Collision damage", "Rust", "Dents", "Paint damage"],
    compatibility: "Left and right side options",
    avgLifespan: "Vehicle lifetime with proper care"
  },
  {
    slug: "fog-lamp",
    name: "Fog Lamp",
    image: "/fog-lamp.jpg",
    link: "/parts/fog-lamp",
    description: "Fog lights for improved visibility in adverse weather conditions. Halogen, LED, and HID options with proper beam patterns.",
    category: "Lighting",
    commonIssues: ["Burnt bulbs", "Moisture intrusion", "Lens damage", "Wiring issues"],
    compatibility: "Factory and aftermarket mounting options",
    avgLifespan: "5-10 years"
  },
  {
    slug: "fuse-box",
    name: "Fuse Box",
    image: "/fuse-box.jpg",
    link: "/parts/fuse-box",
    description: "Electrical fuse and relay boxes for circuit protection. Under-hood and interior junction boxes with proper fuse ratings.",
    category: "Electrical",
    commonIssues: ["Blown fuses", "Corroded terminals", "Relay failure", "Overheating"],
    compatibility: "Various fuse types and amperage ratings",
    avgLifespan: "Vehicle lifetime with proper maintenance"
  },
  {
    slug: "glove-box",
    name: "Glove Box",
    image: "/glove-box.jpg",
    link: "/parts/glove-box",
    description: "Dashboard glove compartments for storage and organization. Includes latches, hinges, and dampeners for smooth operation.",
    category: "Interior",
    commonIssues: ["Broken latch", "Sagging door", "Damaged hinge", "Missing dampener"],
    compatibility: "Various colors and trim levels",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "headrest",
    name: "Headrest",
    image: "/headrest.jpg",
    link: "/parts/headrest",
    description: "Adjustable headrests for comfort and safety. Various upholstery options to match your vehicle's interior trim.",
    category: "Interior",
    commonIssues: ["Worn upholstery", "Broken adjustment", "Missing headrest", "Damaged padding"],
    compatibility: "Front and rear seat applications",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "mirror-rear-view",
    name: "Rear View Mirror",
    image: "/mirror-rear-view.jpg",
    link: "/parts/mirror-rear-view",
    description: "Interior rearview mirrors with manual or auto-dimming features. Some models include compass, temperature, and garage door controls.",
    category: "Interior",
    commonIssues: ["Loose mounting", "Auto-dim failure", "Broken mirror", "Button malfunctions"],
    compatibility: "Manual and automatic dimming options",
    avgLifespan: "Vehicle lifetime with proper care"
  },
  {
    slug: "seat-back",
    name: "Seat Back",
    image: "/seat-back.jpg",
    link: "/parts/seat-back",
    description: "Seat back assemblies including frames, upholstery, and adjustment mechanisms. Available in various colors and materials.",
    category: "Interior",
    commonIssues: ["Worn upholstery", "Broken recliner", "Frame damage", "Lumbar support failure"],
    compatibility: "Bucket and bench seat configurations",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "seat-belt",
    name: "Seat Belt",
    image: "/seat-belt.png",
    link: "/parts/seat-belt",
    description: "Safety seat belt assemblies including retractors, buckles, and webbing. All units tested for proper operation and safety compliance.",
    category: "Safety Systems",
    commonIssues: ["Belt won't retract", "Buckle won't latch", "Frayed webbing", "Pretensioner deployment"],
    compatibility: "Front and rear seat positions",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "seat-front",
    name: "Front Seat",
    image: "/seat-front.png",
    link: "/parts/seat-front",
    description: "Complete front seat assemblies with manual or power adjustments. Heating, cooling, and memory options available.",
    category: "Interior",
    commonIssues: ["Worn upholstery", "Power seat failure", "Broken track", "Heater malfunction"],
    compatibility: "Driver and passenger configurations",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "signal-fog-lamp",
    name: "Signal Fog Lamp",
    image: "/signal-fog-lamp.jpg",
    link: "/parts/signal-fog-lamp",
    description: "Combination turn signal and fog lamp assemblies. Provides both directional signaling and auxiliary lighting functions.",
    category: "Lighting",
    commonIssues: ["Burnt bulbs", "Water intrusion", "Lens cracking", "Socket corrosion"],
    compatibility: "Front and rear applications",
    avgLifespan: "8-12 years"
  },
  {
    slug: "speedometer",
    name: "Speedometer",
    image: "/speedometer.jpg",
    link: "/parts/speedometer",
    description: "Instrument cluster speedometers and gauges. Analog and digital displays with proper mileage programming available.",
    category: "Electrical",
    commonIssues: ["Inaccurate readings", "Dead gauges", "Backlight failure", "Needle sticking"],
    compatibility: "Various gauge configurations",
    avgLifespan: "Vehicle lifetime with proper care"
  },
  {
    slug: "steering-column",
    name: "Steering Column",
    image: "/steering-column.jpg",
    link: "/parts/steering-column",
    description: "Complete steering columns with tilt, telescoping, and adjustment features. Includes ignition switch and turn signal components.",
    category: "Steering",
    commonIssues: ["Loose steering", "Tilt mechanism failure", "Ignition switch problems", "Turn signal issues"],
    compatibility: "Manual and automatic transmission applications",
    avgLifespan: "Vehicle lifetime with proper maintenance"
  },
  {
    slug: "steering-wheel",
    name: "Steering Wheel",
    image: "/steering.png",
    link: "/parts/steering-wheel",
    description: "Steering wheels with various grips and materials. Leather, vinyl, and rubber options with integrated controls where applicable.",
    category: "Steering",
    commonIssues: ["Worn grip", "Control button failure", "Cracking", "Discoloration"],
    compatibility: "Various sizes and control configurations",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "sunvisor",
    name: "Sun Visor",
    image: "/sunvisor.jpg",
    link: "/parts/sunvisor",
    description: "Sun visors with mirrors and storage compartments. Helps reduce glare and provides convenient mirror access for passengers.",
    category: "Interior",
    commonIssues: ["Loose mounting", "Broken mirror", "Torn fabric", "Light not working"],
    compatibility: "Driver and passenger side options",
    avgLifespan: "Vehicle lifetime with normal use"
  },
  {
    slug: "thermostat-housing",
    name: "Thermostat Housing",
    image: "/thermostat-housing.jpg",
    link: "/parts/thermostat-housing",
    description: "Engine thermostat housings for proper coolant flow control. Includes gaskets and hardware for leak-free installation.",
    category: "Cooling System",
    commonIssues: ["Coolant leaks", "Overheating", "Stuck thermostat", "Corrosion"],
    compatibility: "Various engine configurations",
    avgLifespan: "80,000-120,000 miles"
  },
  {
    slug: "transfer-case",
    name: "Transfer Case",
    image: "/transfer-case.jpg",
    link: "/parts/transfer-case",
    description: "4WD and AWD transfer cases for proper power distribution between front and rear axles. Manual and electronic shift options.",
    category: "Drivetrain",
    commonIssues: ["Shifting problems", "Fluid leaks", "Chain noise", "Electronic control failure"],
    compatibility: "Part-time and full-time 4WD systems",
    avgLifespan: "150,000-200,000 miles"
  },
  {
    slug: "wheel",
    name: "Wheel",
    image: "/wheel.png",
    link: "/parts/wheel",
    description: "Alloy and steel wheels in various sizes and finishes. OEM and aftermarket options with proper load ratings and offset specifications.",
    category: "Wheels & Tires",
    commonIssues: ["Curb damage", "Corrosion", "Bent rim", "Paint chipping"],
    compatibility: "Various bolt patterns and sizes",
    avgLifespan: "Vehicle lifetime with proper care"
  },
  {
    slug: "window-motor",
    name: "Window Motor",
    image: "/window-glass-motor.png",
    link: "/parts/window-motor",
    description: "Power window motors and regulators for smooth window operation. Includes mounting hardware and proper torque specifications.",
    category: "Electrical",
    commonIssues: ["Slow operation", "Window won't move", "Motor noise", "Regulator failure"],
    compatibility: "Front and rear door applications",
    avgLifespan: "80,000-120,000 miles"
  },
]
