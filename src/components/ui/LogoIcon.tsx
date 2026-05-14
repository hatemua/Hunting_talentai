export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 56"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Outer radar arc */}
      <path d="M5,38 A21,21 0 1,0 43,38" stroke="#8A9EC0" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Inner radar arc */}
      <path d="M11,34 A14,14 0 1,0 37,34" stroke="#8A9EC0" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Location pin */}
      <path d="M24,50 Q11,40 11,27 A13,13 0 0,1 37,27 Q37,40 24,50 Z" fill="#6C5CE7"/>
      {/* Head circle */}
      <circle cx="24" cy="25" r="5" fill="white" opacity="0.88"/>
    </svg>
  )
}
