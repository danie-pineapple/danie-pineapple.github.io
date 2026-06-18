import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { GallerySection } from './sections/GallerySection'
import { VideoSection } from './sections/VideoSection'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { ContactSection } from './sections/ContactSection'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <div style={{ background: '#07060F', overflowX: 'hidden' }}>
      {/* ── Destellos de fondo fijos (siguen al hacer scroll) ── */}
      {/* Morado – esquina superior derecha */}
      <div
        className="pointer-events-none"
        style={{
          position: 'fixed',
          top: '-10%',
          right: '-8%',
          width: '52%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(120, 40, 220, 0.14) 0%, transparent 68%)',
          filter: 'blur(55px)',
          zIndex: 0,
        }}
      />
      {/* Turquesa – esquina inferior izquierda */}
      <div
        className="pointer-events-none"
        style={{
          position: 'fixed',
          bottom: '-8%',
          left: '-6%',
          width: '45%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(0, 210, 200, 0.07) 0%, transparent 68%)',
          filter: 'blur(70px)',
          zIndex: 0,
        }}
      />

      <Navbar />
      <HeroSection />
      <GallerySection />
      <VideoSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
