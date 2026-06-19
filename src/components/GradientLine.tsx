interface GradientLineProps {
  className?: string
  thickness?: number
}

export function GradientLine({ className = '', thickness = 2 }: GradientLineProps) {
  return (
    <div
      className={`w-full rounded-full ${className}`}
      style={{
        height: thickness,
        background: 'linear-gradient(90deg, #4453E8 0%, #8A4FD8 50%, #F2784A 100%)',
      }}
    />
  )
}
