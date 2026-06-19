import { GradientLine } from '../components/GradientLine'
import { imgUrl } from '../utils/imgUrl'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="px-4 sm:px-8 md:px-12 lg:px-20 pb-10">
      <GradientLine thickness={1} className="opacity-40 mb-8" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={imgUrl('/images/logo.png')} alt="Daniela Piña" className="h-6 w-auto opacity-60" />
        <p className="text-white/35 text-xs font-light uppercase tracking-widest">
          © {new Date().getFullYear()} Daniela Piña — {t.footer.rights}
        </p>
        <p className="text-white/35 text-xs font-light uppercase tracking-widest">
          {t.footer.location}
        </p>
      </div>
    </footer>
  )
}
