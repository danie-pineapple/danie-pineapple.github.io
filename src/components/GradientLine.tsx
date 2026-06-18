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
        background: 'linear-gradient(90deg, #2563EB 0%, #06B6D4 33%, #10B981 66%, #F59E0B 100%)',
      }}
    />
  )
}
