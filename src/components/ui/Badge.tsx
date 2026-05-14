import { ReactNode } from 'react'

interface BadgeProps {
  children:    ReactNode
  variant?:    'mint' | 'amber' | 'section'
  withDot?:    boolean
  className?:  string
}

export function Badge({ children, variant = 'mint', withDot = false, className = '' }: BadgeProps) {
  const variantCls = {
    mint:    'bg-mint/10 border border-mint/30 text-mint',
    amber:   'bg-amber/10 border border-amber/30 text-amber',
    section: 'text-mint font-semibold uppercase tracking-[0.1em] text-[0.85rem]',
  }[variant]

  if (variant === 'section') {
    return (
      <span className={`block ${variantCls} ${className}`}>{children}</span>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[0.85rem] font-medium ${variantCls} ${className}`}
    >
      {withDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse-glow flex-shrink-0" />
      )}
      {children}
    </span>
  )
}
