import { useLanguage } from '../i18n/LanguageContext'

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={`inline-flex items-center rounded-full border border-black/10 p-0.5 text-[11px] uppercase tracking-widest font-light select-none ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full transition-colors duration-200 ${
          lang === 'en' ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-neutral-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('es')}
        className={`px-2.5 py-1 rounded-full transition-colors duration-200 ${
          lang === 'es' ? 'bg-neutral-900 text-white' : 'text-neutral-400 hover:text-neutral-700'
        }`}
      >
        ES
      </button>
    </div>
  )
}
