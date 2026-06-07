import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-signal text-void hover:bg-charcoal-50 active:scale-[0.98]',
  secondary:
    'border border-charcoal-500/50 text-signal hover:bg-charcoal-700/50 active:scale-[0.98]',
  ghost:
    'text-muted hover:text-signal hover:bg-charcoal-700/40 active:scale-[0.98]',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
