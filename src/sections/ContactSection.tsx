import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GradientLine } from '../components/GradientLine'

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-36 overflow-hidden"
      
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          right: '-5%',
          width: '50%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(90, 20, 200, 0.11) 0%, transparent 65%)',
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
          background: 'radial-gradient(ellipse, rgba(20, 50, 180, 0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-3xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-white/55 font-light mb-4"
        >
          Trabajemos juntos
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold uppercase text-white leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
        >
          Hablemos
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

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 font-light leading-relaxed mb-10 max-w-lg"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)' }}
        >
          ¿Tienes un proyecto en mente? Me encantaría escucharte. Escríbeme
          por correo o por WhatsApp y empecemos a construir algo increíble.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Email */}
          <a
            href="mailto:isaac.vmtop@gmail.com"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-all duration-200 text-sm font-light uppercase tracking-widest"
          >
            <Mail size={15} className="flex-shrink-0" />
            <span>isaac.vmtop@gmail.com</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/34622347456"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-medium uppercase tracking-widest transition-all duration-200 hover:opacity-90"
            style={{ background: '#25D366', color: '#fff' }}
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
