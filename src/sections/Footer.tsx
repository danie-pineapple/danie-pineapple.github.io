import { GradientLine } from '../components/GradientLine'
import { imgUrl } from '../utils/imgUrl'

export function Footer() {
  return (
    <footer
      className="px-4 sm:px-8 md:px-12 lg:px-20 pb-10"
      
    >
      <GradientLine thickness={1} className="opacity-40 mb-8" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={imgUrl('/images/logo.png')} alt="Isaac Ruiz" className="h-5 w-auto opacity-60" />
        <p className="text-white/35 text-xs font-light uppercase tracking-widest">
          © {new Date().getFullYear()} Isaac Ruiz — Todos los derechos reservados
        </p>
        <p className="text-white/35 text-xs font-light uppercase tracking-widest">
          Barcelona, España
        </p>
      </div>
    </footer>
  )
}
