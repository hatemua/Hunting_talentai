import { ReactNode } from 'react'

interface CardProps {
  children:   ReactNode
  className?: string
  accent?:    'none' | 'top' | 'top-dashed' | 'left'
  hover?:     boolean
}

export function Card({ children, className = '', accent = 'none', hover = false }: CardProps) {
  const accentCls = {
    none:        '',
    top:         'before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-mint before:rounded-t-[14px]',
    'top-dashed': "before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:rounded-t-[14px] before:[background:repeating-linear-gradient(90deg,#6C5CE7_0_8px,transparent_8px_14px)]",
    left:        'before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:bg-mint before:rounded-l-[14px]',
  }[accent]

  return (
    <div
      className={`relative bg-panel border border-edge rounded-[14px] overflow-hidden
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-mint/30 hover:shadow-[0_8px_32px_rgba(108,92,231,0.10),0_2px_8px_rgba(0,0,0,0.04)]' : 'shadow-[0_1px_4px_rgba(0,0,0,0.05)]'}
        ${accentCls}
        ${className}`}
    >
      {children}
    </div>
  )
}
