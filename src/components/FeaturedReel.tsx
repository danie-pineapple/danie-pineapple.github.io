import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Film, Volume2 } from 'lucide-react'
import { imgUrl } from '../utils/imgUrl'
import { useLanguage } from '../i18n/LanguageContext'
import { VideoModal } from './VideoModal'
import { Orientation } from '../data/projects'

// ============================================================
// VIDEO PRINCIPAL ("Showreel") — destacado al inicio de WORK
// Para activarlo, coloca el archivo de video en:
//   public/videos/principal/reel.mp4
// y (opcional, recomendado) un poster/portada en:
//   public/posters/principal/reel.jpg
// El componente detecta automáticamente si es vertical u
// horizontal — no hace falta configurar nada más. Mientras el
// archivo no exista, se muestra un aviso de "próximamente".
// ============================================================

const REEL_SRC = imgUrl('/videos/principal/reel.mp4')
const REEL_POSTER = imgUrl('/posters/principal/reel.jpg')

export function FeaturedReel() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const [missing, setMissing] = useState(false)
  const [orientation, setOrientation] = useState<Orientation>('horizontal')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const v = videoRef.current
    if (!v || missing) return
    if (inView) {
      v.play().catch(() => {})
    } else {
      v.pause()
    }
  }, [inView, missing])

  if (missing) {
    return (
      <div className="relative z-10 mb-10 md:mb-14 rounded-2xl border border-neutral-200 bg-neutral-50 flex flex-col items-center justify-center gap-4 text-center py-16 md:py-24 px-6">
        <div className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center">
          <Film size={20} className="text-neutral-400" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-light mb-2">
            {t.work.reelLabel}
          </p>
          <p className="text-neutral-500 text-sm font-light">{t.work.reelComing}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '60px' }}
        transition={{ duration: 0.6 }}
        onClick={() => setOpen(true)}
        className="relative z-10 mb-10 md:mb-14 group cursor-pointer overflow-hidden rounded-2xl bg-neutral-100"
        style={
          orientation === 'vertical'
            ? { aspectRatio: '9 / 16', maxHeight: '80vh', width: 'min(440px, 100%)', margin: '0 auto' }
            : { aspectRatio: '16 / 9', width: '100%' }
        }
      >
        <span className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/90 font-light bg-black/35 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {t.work.reelLabel}
        </span>

        <video
          ref={videoRef}
          src={REEL_SRC}
          poster={REEL_POSTER}
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedMetadata={(e) => {
            const v = e.currentTarget
            setOrientation(v.videoHeight > v.videoWidth ? 'vertical' : 'horizontal')
          }}
          onError={() => setMissing(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 group-hover:from-black/80 transition-colors duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex items-end justify-end">
          <span className="flex-shrink-0 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Volume2 size={15} className="text-white" />
          </span>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <VideoModal
            clip={{ src: REEL_SRC, poster: REEL_POSTER, orientation }}
            title={t.work.reelLabel}
            description=""
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
