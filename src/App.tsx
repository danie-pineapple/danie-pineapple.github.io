import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { WorkSection } from './sections/WorkSection'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div style={{ background: '#07060F', overflowX: 'hidden' }}>
      {/* ── Destellos de fondo fijos (siguen al hacer scroll) ── */}
      {/* Indigo – esquina superior derecha */}
      <div
        className="pointer-events-none"
        style={{
          position: 'fixed',
          top: '-10%',
          right: '-8%',
          width: '52%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(68, 83, 232, 0.13) 0%, transparent 68%)',
          filter: 'blur(55px)',
          zIndex: 0,
        }}
      />
      {/* Coral – esquina inferior izquierda */}
      <div
        className="pointer-events-none"
        style={{
          position: 'fixed',
          bottom: '-8%',
          left: '-6%',
          width: '45%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(242, 120, 74, 0.08) 0%, transparent 68%)',
          filter: 'blur(70px)',
          zIndex: 0,
        }}
      />

      <Navbar />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
