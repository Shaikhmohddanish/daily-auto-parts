'use client'

import { useState, useEffect, useRef } from 'react'

interface UseCounterProps {
  end: number
  duration?: number
  start?: number
  decimals?: number
}

export function useCounter({ end, duration = 2000, start = 0, decimals = 0 }: UseCounterProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const countRef = useRef(start)
  const frameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = countRef.current

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = startValue + (end - startValue) * easeOutQuart
      
      countRef.current = currentValue
      setCount(Number(currentValue.toFixed(decimals)))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isVisible, end, duration, decimals])

  return { count, ref }
}