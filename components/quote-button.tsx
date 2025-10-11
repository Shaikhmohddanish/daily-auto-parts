"use client"

import { Button } from "@/components/ui/button"

interface QuoteButtonProps {
  className?: string
}

export default function QuoteButton({ className }: QuoteButtonProps) {
  const handleClick = () => {
    const element = document.getElementById('quote-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Button 
      size="lg" 
      variant="outline" 
      className={`text-base bg-transparent ${className || ''}`}
      onClick={handleClick}
    >
      Get a Quote
    </Button>
  )
}