import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { collections, Photo } from '../data/collections'
import { Lightbox } from '../components/Lightbox'
import { GradientLine } from '../components/GradientLine'

type FilteredPhoto = Photo & { collectionName: string }

export function GallerySection() {
  const [activeId, setActiveId] = useState<string>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredPhotos: FilteredPhoto[] =
    activeId === 'all'
      ? collections.flatMap((c) =>
          c.photos.map((p) => ({ ...p, collectionName: c.name }))
        )
      : (collections.find((c) => c.id === activeId)?.photos ?? []).map((p) => ({
          ...p,
          collectionName: collections.find((c) => c.id === activeId)?.name ?? '',
        }))

  return (
    <section
      id="fotografia"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-32 overflow-hidden"
      
    >
      {/* Glow accent for this section */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '-5%',
          width: '35%',
          height: '40%',
          background: 'radial-gradient(ellipse, rgba(80, 20, 180, 0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Header */}
      <div className="relative z-10 mb-10 md:mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-white/55 font-light mb-3"
        >
          Portafolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold uppercase text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
        >
          Fotografía
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ originX: 0 }}
          className="mt-3 max-w-[180px]"
        >
          <GradientLine thickness={2} />
        </motion.div>
      </div>

      {/* Collection tabs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-10 flex items-center gap-2 mb-10 md:mb-12 overflow-x-auto pb-1 scrollbar-none"
      >
        <TabButton
          label="Todos"
          active={activeId === 'all'}
          count={collections.reduce((acc, c) => acc + c.photos.length, 0)}
          onClick={() => setActiveId('all')}
        />
        {collections.map((c) => (
          <TabButton
            key={c.id}
            label={c.name}
            active={activeId === c.id}
            count={c.photos.length}
            onClick={() => setActiveId(c.id)}
          />
        ))}
      </motion.div>

      {/* Masonry grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {/* Mobile: 2 columnas desfasadas */}
          <div className="lg:hidden grid grid-cols-2 gap-2 items-start">
            {/* Columna izquierda — fotos pares */}
            <div className="flex flex-col gap-2">
              {filteredPhotos
                .map((photo, i) => ({ photo, i }))
                .filter(({ i }) => i % 2 === 0)
                .map(({ photo, i }) => (
                  <GalleryCard key={photo.src} photo={photo} index={i} onClick={() => setLightboxIndex(i)} delay={Math.min(i * 0.04, 0.4)} />
                ))}
            </div>
            {/* Columna derecha — fotos impares, desplazadas hacia abajo */}
            <div className="flex flex-col gap-2 mt-10">
              {filteredPhotos
                .map((photo, i) => ({ photo, i }))
                .filter(({ i }) => i % 2 === 1)
                .map(({ photo, i }) => (
                  <GalleryCard key={photo.src} photo={photo} index={i} onClick={() => setLightboxIndex(i)} delay={Math.min(i * 0.04, 0.4)} />
                ))}
            </div>
          </div>

          {/* Desktop: masonry 3 columnas */}
          <div className="hidden lg:block columns-3 gap-2">
            {filteredPhotos.map((photo, i) => (
              <GalleryCard key={photo.src} photo={photo} index={i} onClick={() => setLightboxIndex(i)} delay={Math.min(i * 0.04, 0.4)} masonry />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {filteredPhotos.length === 0 && (
        <div className="text-center py-24 text-white/35 text-sm uppercase tracking-widest">
          Próximamente
        </div>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={filteredPhotos}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

interface GalleryCardProps {
  photo: FilteredPhoto
  index: number
  delay: number
  onClick: () => void
  masonry?: boolean
}

function GalleryCard({ photo, delay, onClick, masonry }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`group relative cursor-pointer overflow-hidden rounded-xl ${masonry ? 'break-inside-avoid mb-2' : ''}`}
      onClick={onClick}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-4">
        <span className="text-white/0 group-hover:text-white/80 text-xs uppercase tracking-widest font-light transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {photo.collectionName}
        </span>
      </div>
    </motion.div>
  )
}

interface TabButtonProps {
  label: string
  active: boolean
  count: number
  onClick: () => void
}

function TabButton({ label, active, count, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-widest font-light transition-all duration-200 border ${
        active
          ? 'bg-white text-[#07060F] border-white'
          : 'bg-transparent text-white/55 border-white/15 hover:text-white/80 hover:border-white/30'
      }`}
    >
      {label}
      <span className={`text-[10px] ${active ? 'text-black/50' : 'text-white/30'}`}>
        {count}
      </span>
    </button>
  )
}
