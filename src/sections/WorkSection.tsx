import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, ProjectClip } from '../data/projects'
import { GradientLine } from '../components/GradientLine'
import { VideoCard } from '../components/VideoCard'
import { VideoModal } from '../components/VideoModal'
import { FeaturedReel } from '../components/FeaturedReel'
import { useLanguage } from '../i18n/LanguageContext'

interface FlatCard {
  key: string
  title: string
  description: string
  clip: ProjectClip
}

export function WorkSection() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState<FlatCard | null>(null)

  const cards: FlatCard[] = projects.flatMap((p) =>
    p.clips.map((clip, i) => ({
      key: `${p.id}-${i}`,
      title: p.clips.length > 1 ? `${p.title} ${i + 1}/${p.clips.length}` : p.title,
      description: p.description[lang],
      clip,
    }))
  )

  return (
    <section
      id="work"
      className="relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-32 overflow-hidden"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: '5%',
          right: '-8%',
          width: '40%',
          height: '45%',
          background: 'radial-gradient(ellipse, rgba(242, 120, 74, 0.06) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '0%',
          left: '-8%',
          width: '35%',
          height: '40%',
          background: 'radial-gradient(ellipse, rgba(68, 83, 232, 0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-10 mb-10 md:mb-14">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-neutral-500 font-light mb-3"
        >
          {t.work.kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold uppercase text-neutral-900 leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
        >
          {t.work.heading}
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

      <FeaturedReel />

      {cards.length > 0 ? (
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[150px] sm:auto-rows-[180px] lg:auto-rows-[210px]">
          {cards.map((card) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '60px' }}
              transition={{ duration: 0.5 }}
              className={card.clip.orientation === 'vertical' ? 'row-span-2' : 'col-span-2'}
            >
              <VideoCard
                clip={card.clip}
                title={card.title}
                spanClassName="h-full"
                onOpen={() => setActive(card)}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-neutral-400 text-sm uppercase tracking-widest">
          {t.work.empty}
        </div>
      )}

      <AnimatePresence>
        {active && (
          <VideoModal
            clip={active.clip}
            title={active.title}
            description={active.description}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
