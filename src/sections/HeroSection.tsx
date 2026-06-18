import { motion } from 'framer-motion'
import { GradientLine } from '../components/GradientLine'
import { ArrowDown } from 'lucide-react'
import { imgUrl } from '../utils/imgUrl'

// 3 fotos del hero — cambia las rutas para personalizar
const HERO_PHOTOS = [
  { src: imgUrl('/images/collections/retratos/09.png'), height: '62%' },
  { src: imgUrl('/images/collections/retratos/03.png'), height: '90%' },
  { src: imgUrl('/images/collections/retratos/05.png'), height: '74%' },
]

export function HeroSection() {
  return (
    <section
      className="relative lg:min-h-screen flex flex-col overflow-hidden"
      
    >
      {/* Destello sutil extra solo en el centro del hero */}
      <div className="absolute pointer-events-none" style={{ top: '38%', left: '32%', width: '30%', height: '40%', background: 'radial-gradient(ellipse, rgba(80, 20, 140, 0.05) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-0 px-6 md:px-12 lg:px-16 pt-28 pb-12">

        {/* ── Left: Text ── */}
        <div className="flex-shrink-0 z-10 lg:w-[42%] w-full">

          {/* Name as label */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60 font-light mb-4"
          >
            Isaac Ruiz · Barcelona
          </motion.p>

          {/* Main title: CONTENT CREATOR */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold uppercase leading-none tracking-tight text-white"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 8.5rem)' }}
            >
              CONTENT
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold uppercase leading-none tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 7.5vw, 8.5rem)',
                WebkitTextStroke: '1.5px rgba(255,255,255,0.28)',
                color: 'transparent',
              }}
            >
              CREATOR
            </motion.h1>
          </div>

          {/* Gradient line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.52, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="mt-5 max-w-[190px] sm:max-w-[230px]"
          >
            <GradientLine thickness={2} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.6 }}
            className="mt-4 text-white/55 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.92rem)' }}
          >
            Diseñador visual y productor audiovisual
            <br />
            mexicano, basado en Barcelona, España.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.6 }}
            className="mt-7 flex items-center gap-6"
          >
            <a href="#fotografia" className="flex items-center gap-2 text-white/80 hover:text-white font-light text-xs uppercase tracking-widest transition-colors duration-200 group">
              <span>Ver Trabajo</span>
              <ArrowDown size={13} className="group-hover:translate-y-1 transition-transform duration-200" />
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="#contacto" className="text-white/50 hover:text-white/80 font-light text-xs uppercase tracking-widest transition-colors duration-200">
              Contacto
            </a>
          </motion.div>
        </div>

        {/* ── Right: 3-photo strip, fills space with staggered heights ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden lg:block z-10 w-full lg:flex-1 lg:pl-8 lg:h-[78vh]"
          style={{ maxHeight: '760px' }}
        >
          <div
            className="w-full h-full flex items-end"
            style={{ gap: '10px' }}
          >
            {HERO_PHOTOS.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 overflow-hidden rounded-xl lg:rounded-2xl"
                style={{ height: photo.height }}
              >
                <img
                  src={photo.src}
                  alt={`Retrato ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 px-6 md:px-12 lg:px-16 pb-7 flex items-center justify-between"
      >
        <span className="text-white/35 text-xs uppercase tracking-widest font-light">
          © {new Date().getFullYear()} Isaac Ruiz
        </span>
        <span className="text-white/35 text-xs uppercase tracking-widest font-light">
          Barcelona, España
        </span>
      </motion.div>
    </section>
  )
}

