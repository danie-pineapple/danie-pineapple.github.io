import { motion } from 'framer-motion'
import { services } from '../data/services'
import { GradientLine } from '../components/GradientLine'

export function ServicesSection() {
  return (
    <section
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-32 overflow-hidden"
      style={{ background: '#0A0918' }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%',
          left: '50%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(60, 20, 160, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
          ¿En qué puedo ayudarte?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold uppercase text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
        >
          Servicios
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ originX: 0 }}
          className="mt-3 max-w-[160px]"
        >
          <GradientLine thickness={2} />
        </motion.div>
      </div>

      {/* Service list */}
      <div className="relative z-10 max-w-4xl">
        {services.map((svc, i) => (
          <motion.div
            key={svc.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex items-start gap-5 md:gap-8 py-7 md:py-9 border-b border-white/8 group"
          >
            {/* Number */}
            <span
              className="font-bold text-white/15 group-hover:text-white/25 transition-colors duration-300 flex-shrink-0 leading-none select-none"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
            >
              {svc.num}
            </span>

            {/* Name + desc */}
            <div className="flex flex-col gap-1.5 pt-0.5">
              <span
                className="font-bold uppercase text-white tracking-tight leading-none"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.6rem)' }}
              >
                {svc.name}
              </span>
              <p
                className="text-white/55 font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)' }}
              >
                {svc.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
