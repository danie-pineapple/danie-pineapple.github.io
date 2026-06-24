import { motion } from 'framer-motion'
import { Mail, Instagram, Linkedin } from 'lucide-react'
import { GradientLine } from '../components/GradientLine'
import { useLanguage } from '../i18n/LanguageContext'

const CONTACT_EMAIL = 'daniefpina.22@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/danie_pineapple?igsh=bjRjcm1wd2ExcmZq&utm_source=qr'
const LINKEDIN_URL = 'https://www.linkedin.com/in/daniela-piña-513b75316'
const WHATSAPP_URL = 'https://wa.me/34603404986'
const PHONE_DISPLAY = '+34 603 40 49 86'

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-36 overflow-hidden bg-neutral-50"
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
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label={t.contact.emailLabel}
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-500 transition-all duration-200 text-sm font-light uppercase tracking-widest"
          >
            <Mail size={15} className="flex-shrink-0" />
            <span>{CONTACT_EMAIL}</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-500 transition-all duration-200 text-sm font-light uppercase tracking-widest"
          >
            <WhatsAppIcon size={15} />
            <span>{PHONE_DISPLAY}</span>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-500 transition-all duration-200 text-sm font-light uppercase tracking-widest"
          >
            <Instagram size={15} className="flex-shrink-0" />
            <span>Instagram</span>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:border-neutral-500 transition-all duration-200 text-sm font-light uppercase tracking-widest"
          >
            <Linkedin size={15} className="flex-shrink-0" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
