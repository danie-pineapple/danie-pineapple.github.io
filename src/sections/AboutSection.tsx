import { motion } from 'framer-motion'
import { GradientLine } from '../components/GradientLine'
import { useLanguage } from '../i18n/LanguageContext'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-32 overflow-hidden"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          right: '-5%',
          width: '40%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(138, 79, 216, 0.1) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-2xl">
        <div className="flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/55 font-light mb-3">
              {t.about.kicker}
            </p>
            <h2
              className="font-bold uppercase text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 6vw, 6rem)' }}
            >
              {t.about.heading1}<br />{t.about.heading2}
            </h2>
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ originX: 0 }}
            className="max-w-[180px]"
          >
            <GradientLine thickness={2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4 text-white/65 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.85rem, 1.3vw, 0.98rem)' }}
          >
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 pt-5 border-t border-white/10"
          >
            {t.about.stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-bold text-white text-xl md:text-2xl">{s.value}</span>
                <span className="text-white/45 text-xs font-light leading-tight">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
