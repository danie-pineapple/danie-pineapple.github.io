import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Photo } from '../data/collections'

interface LightboxProps {
  photos: Photo[]
  initialIndex: number
  onClose: () => void
}

export function Lightbox({ photos, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex)

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setIndex((i) => (i + 1) % photos.length)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-sm font-light tracking-widest">
        {index + 1} / {photos.length}
      </div>

      {/* Close */}
      <button
        className="absolute top-4 right-5 text-white/60 hover:text-white transition-colors p-2"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X size={24} />
      </button>

      {/* Prev */}
      {photos.length > 1 && (
        <button
          className="absolute left-3 md:left-6 text-white/50 hover:text-white transition-colors p-3 z-10"
          onClick={(e) => { e.stopPropagation(); prev() }}
          aria-label="Anterior"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={photos[index].src}
          src={photos[index].src}
          alt={photos[index].alt}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22 }}
          className="max-h-[88vh] max-w-[88vw] object-contain rounded-lg select-none"
          onClick={(e) => e.stopPropagation()}
          draggable={false}
        />
      </AnimatePresence>

      {/* Next */}
      {photos.length > 1 && (
        <button
          className="absolute right-3 md:right-6 text-white/50 hover:text-white transition-colors p-3 z-10"
          onClick={(e) => { e.stopPropagation(); next() }}
          aria-label="Siguiente"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Caption */}
      {photos[index].alt && (
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest uppercase text-center w-full px-8">
          {photos[index].alt}
        </p>
      )}
    </motion.div>
  )
}
