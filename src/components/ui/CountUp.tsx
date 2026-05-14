'use client'

import { useRef, useEffect, useState } from 'react'

function parse(raw: string): { prefix: string; num: number; suffix: string } {
  const m = raw.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!m) return { prefix: '', num: 0, suffix: raw }
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3] }
}

interface CountUpProps {
  value:      string
  className?: string
}

export function CountUp({ value, className = '' }: CountUpProps) {
  const { prefix, num, suffix } = parse(value)
  const [count, setCount] = useState(0)
  const ref   = useRef<HTMLSpanElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || fired.current) return
        fired.current = true
        obs.disconnect()
        const t0  = performance.now()
        const dur = 1400
        const tick = (now: number) => {
          const p      = Math.min((now - t0) / dur, 1)
          const eased  = 1 - (1 - p) ** 3
          setCount(Math.round(eased * num))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [num])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
