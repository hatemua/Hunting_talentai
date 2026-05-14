import { ReactNode } from 'react'
import { Badge } from './Badge'

interface SectionHeadingProps {
  eyebrow?:  ReactNode
  title:     ReactNode
  lead?:     ReactNode
  center?:   boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <Badge variant="section" className={`mb-4 ${center ? 'justify-center' : ''}`}>
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-display font-semibold text-body tracking-tight leading-[1.15]
                     text-[clamp(1.8rem,3.5vw,2.8rem)] mb-4">
        {title}
      </h2>
      {lead && (
        <p className="text-dim text-[1.05rem] leading-relaxed max-w-[720px]">
          {lead}
        </p>
      )}
    </div>
  )
}
