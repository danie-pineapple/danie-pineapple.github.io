import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { videos } from '../data/videos'
import { GradientLine } from '../components/GradientLine'

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section
      id="video"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-32 overflow-hidden"
      
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '5%',
          left: '-5%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse, rgba(30, 50, 200, 0.07) 0%, transparent 70%)',
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
          Producción audiovisual
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold uppercase text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
        >
          Video & Reels
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

      {/* Grid or empty state */}
      <div className="relative z-10">
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 aspect-video"
                onClick={() => setActiveVideo(video.embedUrl)}
              >
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5" />
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={20} className="text-white fill-white translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-medium text-sm">{video.title}</p>
                  {video.year && <p className="text-white/55 text-xs font-light mt-0.5">{video.year}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border border-white/8 rounded-3xl p-16 md:p-24 text-center"
          >
            <div className="w-16 h-16 rounded-full border border-white/15 flex items-center justify-center mx-auto mb-6">
              <Play size={22} className="text-white/40 translate-x-0.5" />
            </div>
            <p className="text-white/45 text-sm uppercase tracking-widest font-light mb-2">
              Próximamente
            </p>
            <p className="text-white/25 text-xs font-light max-w-xs mx-auto">
              Agrega tus videos editando{' '}
              <code className="text-white/35">src/data/videos.ts</code>
            </p>
          </motion.div>
        )}
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors p-2"
              onClick={() => setActiveVideo(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
