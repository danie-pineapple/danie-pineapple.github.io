import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { GradientLine } from '../components/GradientLine'
import { imgUrl } from '../utils/imgUrl'
import { useLanguage } from '../i18n/LanguageContext'

const MOTION_URL = 'https://danie-pineapple.github.io/motion/'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative lg:min-h-screen flex flex-col overflow-hidden"
    >
      <div className="absolute pointer-events-none" style={{ top: '30%', left: '55%', width: '40%', height: '50%', background: 'radial-gradient(ellipse, rgba(68, 83, 232, 0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="flex-1 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-0 px-6 md:px-12 lg:px-16 pt-28 pb-12">

        {/* ── Left: Text ── */}
        <div className="flex-shrink-0 z-10 lg:w-[46%] w-full">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xs sm:text-sm uppercase tracking-[0.3em] text-neutral-500 font-light mb-4"
          >
            {t.hero.kicker}
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 90, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold uppercase leading-none tracking-tight text-neutral-900"
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
              className="font-bold uppercase leading-none tracking-tight text-neutral-900"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 8.5rem)' }}
            >
              {t.hero.titleLine2}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-2 text-neutral-700 font-medium uppercase tracking-wide"
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
            className="mt-4 text-neutral-500 font-light leading-relaxed max-w-sm"
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
            <a href="#work" className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900 font-light text-xs uppercase tracking-widest transition-colors duration-200 group">
              <span>{t.hero.ctaWork}</span>
              <ArrowDown size={13} className="group-hover:translate-y-1 transition-transform duration-200" />
            </a>
            <span className="w-px h-3 bg-neutral-300" />
            <a href="#contact" className="text-neutral-500 hover:text-neutral-800 font-light text-xs uppercase tracking-widest transition-colors duration-200">
              {t.hero.ctaContact}
            </a>
          </motion.div>

          {/* ── Enlace a la página de Motion Designs ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8"
          >
            <a
              href={MOTION_URL}
              className="group inline-flex rounded-full p-px transition-shadow duration-300 hover:shadow-[0_12px_30px_-12px_rgba(138,79,216,0.55)]"
              style={{ background: 'linear-gradient(90deg, #4453E8 0%, #8A4FD8 50%, #F2784A 100%)' }}
            >
              <span className="inline-flex items-center gap-3 rounded-full bg-white group-hover:bg-neutral-900 pl-5 pr-2 py-2 transition-colors duration-300">
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-light text-neutral-400 group-hover:text-neutral-400">
                    {t.hero.ctaMotionKicker}
                  </span>
                  <span className="text-sm uppercase tracking-widest font-medium text-neutral-900 group-hover:text-white transition-colors duration-300">
                    {t.hero.ctaMotion}
                  </span>
                </span>
                <span className="w-8 h-8 rounded-full bg-neutral-900 group-hover:bg-white flex items-center justify-center transition-colors duration-300">
                  <ArrowUpRight size={15} className="text-white group-hover:text-neutral-900 transition-all duration-300 group-hover:rotate-45" />
                </span>
              </span>
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
        <span className="text-neutral-400 text-xs uppercase tracking-widest font-light">
          © {new Date().getFullYear()} Daniela Piña
        </span>
        <span className="text-neutral-400 text-xs uppercase tracking-widest font-light">
          {t.hero.location}
        </span>
      </motion.div>
    </section>
  )
}
