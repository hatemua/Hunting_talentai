'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'

interface RevealProps {
  children:   ReactNode
  delay?:     number
  className?: string
  from?:      'bottom' | 'left' | 'right'
}

const fromClass = {
  bottom: 'translate-y-8',
  left:   '-translate-x-8',
  right:  'translate-x-8',
}

export function Reveal({ children, delay = 0, className = '', from = 'bottom' }: RevealProps) {
  const ref       = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [ready,   setReady]   = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setReady(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-700 ease-out
        ${ready && !visible ? `opacity-0 ${fromClass[from]}` : 'opacity-100 translate-x-0 translate-y-0'}
        ${className}`}
    >
      {children}
    </div>
  )
}
