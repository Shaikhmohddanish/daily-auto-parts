"use client"

import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingPhoneButton() {
  const phoneNumber = "8888158187" // Your phone number

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <Button
      onClick={handlePhoneClick}
      className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 p-0"
      aria-label="Call us now"
      title="Call us: (888) 888-8888"
    >
      <Phone className="h-6 w-6 text-white" />
    </Button>
  )
}