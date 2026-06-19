import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { imgUrl } from '../utils/imgUrl'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageToggle } from './LanguageToggle'

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 md:py-5">
          <a href="#hero" aria-label="Daniela Piña">
            <img
              src={imgUrl('/images/logo.png')}
              alt="Daniela Piña"
              className="h-7 md:h-8 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base font-light uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <LanguageToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="text-neutral-900 p-1"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ background: '#FFFFFF' }}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <img src={imgUrl('/images/logo.png')} alt="Daniela Piña" className="h-7 w-auto" />
              <button onClick={() => setMenuOpen(false)} className="text-neutral-900 p-1">
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-3xl font-black uppercase tracking-widest text-neutral-900"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
