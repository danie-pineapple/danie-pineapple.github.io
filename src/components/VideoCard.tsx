import { useEffect, useRef, useState } from 'react'
import { Volume2 } from 'lucide-react'
import { ProjectClip } from '../data/projects'

interface VideoCardProps {
  clip: ProjectClip
  title: string
  spanClassName: string
  onOpen: () => void
}

export function VideoCard({ clip, title, spanClassName, onOpen }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.45 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (inView) {
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }, [inView])

  return (
    <div
      ref={containerRef}
      onClick={onOpen}
      className={`video-card group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-100 ${spanClassName}`}
    >
      <video
        ref={videoRef}
        src={clip.src}
        poster={clip.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/0 group-hover:from-black/85 transition-colors duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-end justify-between gap-2">
        <span className="text-white text-xs sm:text-sm font-medium leading-tight">{title}</span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Volume2 size={14} className="text-white" />
        </span>
      </div>
    </div>
  )
}
