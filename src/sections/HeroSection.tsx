import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { GradientLine } from '../components/GradientLine'
import { imgUrl } from '../utils/imgUrl'
import { useLanguage } from '../i18n/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative lg:min-h-screen flex flex-col overflow-hidden"
    >
      <div className="absolute pointer-events-none" style={{ top: '30%', left: '55%', width: '40%', height: '50%', background: 'radial-gradient(ellipse, rgba(68, 83, 232, 0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="flex-1 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-0 px-6 md:px-12 lg:px-16 pt-28 pb-12">

        {/* ── Left: Text ── */}
        <div className="flex-shrink-0 z-10 lg:w-[46%] w-full">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60 font-light mb-4"
          >
            {t.hero.kicker}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold uppercase leading-none tracking-tight text-white"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 8.5rem)' }}
            >
              {t.hero.titleLine1}
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
              {t.hero.titleLine2}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-2 text-white/75 font-medium uppercase tracking-wide"
            style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.3rem)' }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.52, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="mt-5 max-w-[190px] sm:max-w-[230px]"
          >
            <GradientLine thickness={2} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.6 }}
            className="mt-4 text-white/55 font-light leading-relaxed max-w-sm"
            style={{ fontSize: 'clamp(0.8rem, 1.2vw, 0.92rem)' }}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.6 }}
            className="mt-7 flex items-center gap-6"
          >
            <a href="#work" className="flex items-center gap-2 text-white/80 hover:text-white font-light text-xs uppercase tracking-widest transition-colors duration-200 group">
              <span>{t.hero.ctaWork}</span>
              <ArrowDown size={13} className="group-hover:translate-y-1 transition-transform duration-200" />
            </a>
            <span className="w-px h-3 bg-white/20" />
            <a href="#contact" className="text-white/50 hover:text-white/80 font-light text-xs uppercase tracking-widest transition-colors duration-200">
              {t.hero.ctaContact}
            </a>
          </motion.div>
        </div>

        {/* ── Right: 3D pineapple stage ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="z-10 w-full lg:flex-1 flex items-center justify-center"
        >
          <div
            id="pineapple-stage"
            className="relative w-[68vw] max-w-[420px] aspect-square lg:w-full lg:max-w-[520px]"
          >
            <div
              id="pineapple-fallback"
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-700"
            >
              <img
                src={imgUrl('/images/logo.png')}
                alt="Daniela Piña — 3D logo"
                className="pineapple-fallback-icon w-[55%] h-auto select-none"
                draggable={false}
              />
            </div>
            <canvas
              id="pineapple-canvas"
              className="absolute inset-0 w-full h-full transition-opacity duration-700"
              style={{ opacity: 0 }}
            />
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
          © {new Date().getFullYear()} Daniela Piña
        </span>
        <span className="text-white/35 text-xs uppercase tracking-widest font-light">
          {t.hero.location}
        </span>
      </motion.div>
    </section>
  )
}
