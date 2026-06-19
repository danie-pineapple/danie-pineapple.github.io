import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { ProjectClip } from '../data/projects'

interface VideoModalProps {
  clip: ProjectClip
  title: string
  description: string
  onClose: () => void
}

export function VideoModal({ clip, title, description, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isVertical = clip.orientation === 'vertical'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-2 z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-4 max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={clip.src}
          poster={clip.poster}
          controls
          autoPlay
          playsInline
          className={`rounded-xl bg-black ${
            isVertical ? 'max-h-[78vh] w-auto' : 'max-w-[90vw] lg:max-w-4xl w-full'
          }`}
          style={isVertical ? { aspectRatio: '9 / 16' } : { aspectRatio: '16 / 9' }}
        />
        <div className="text-center max-w-md px-4">
          <p className="text-white text-sm font-medium uppercase tracking-wide">{title}</p>
          {description && (
            <p className="text-white/50 text-xs font-light mt-1 leading-relaxed">{description}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
