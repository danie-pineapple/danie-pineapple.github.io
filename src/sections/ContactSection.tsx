import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GradientLine } from '../components/GradientLine'
import { useLanguage } from '../i18n/LanguageContext'

// TODO: reemplaza con el email real de Daniela
const CONTACT_EMAIL = 'hola@danielapina.com'

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-36 overflow-hidden"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '-5%',
          width: '50%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(242, 120, 74, 0.07) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          left: '-5%',
          width: '35%',
          height: '50%',
          background: 'radial-gradient(ellipse, rgba(68, 83, 232, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-light mb-4"
        >
          {t.contact.kicker}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold uppercase text-neutral-900 leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
        >
          {t.contact.heading}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ originX: 0 }}
          className="max-w-[160px] mb-8"
        >
          <GradientLine thickness={2} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-600 font-light leading-relaxed mb-10 max-w-lg"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}
        >
          {t.contact.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-500 transition-all duration-200 text-sm font-light uppercase tracking-widest"
          >
            <Mail size={15} className="flex-shrink-0" />
            <span>{CONTACT_EMAIL}</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
