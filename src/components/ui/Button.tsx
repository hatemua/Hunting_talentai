import { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'mint'
type Size    = 'md' | 'lg'

interface ButtonProps {
  variant?:   Variant
  size?:      Size
  href?:      string
  className?: string
  children:   ReactNode
  target?:    string
  rel?:       string
  onClick?:   () => void
}

const variants: Record<Variant, string> = {
  primary:
    'bg-mint text-white font-bold shadow-[0_4px_16px_rgba(108,92,231,0.30)] hover:bg-mint-dark hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(108,92,231,0.40)] active:translate-y-0',
  secondary:
    'bg-white text-body border border-edge hover:bg-elevated hover:border-mint/50 hover:-translate-y-0.5 shadow-[0_1px_4px_rgba(0,0,0,0.06)]',
  mint:
    'bg-transparent text-mint border border-mint/60 hover:bg-mint hover:text-canvas hover:-translate-y-0.5',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-[0.9rem]',
  lg: 'px-7 py-3.5 text-[0.98rem]',
}

export function Button({
  variant = 'primary',
  size    = 'md',
  href,
  className = '',
  children,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-[11px] font-semibold cursor-pointer transition-all duration-[220ms] font-sans'
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
