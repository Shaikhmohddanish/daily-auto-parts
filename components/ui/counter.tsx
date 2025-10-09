"use client"

import { useCounter } from "@/hooks/use-counter"

interface CounterProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function Counter({ 
  end, 
  duration = 2000, 
  decimals = 0, 
  suffix = "", 
  prefix = "",
  className = ""
}: CounterProps) {
  const { count, ref } = useCounter({ end, duration, decimals })

  return (
    <span ref={ref} className={className}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  )
}