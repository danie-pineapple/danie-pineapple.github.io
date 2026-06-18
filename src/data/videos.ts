// ============================================================
// CÓMO AGREGAR UN VIDEO O REEL:
// 1. Sube tu video a YouTube, Vimeo o Instagram
// 2. Copia el enlace de embed (no el enlace normal)
//    YouTube embed: https://www.youtube.com/embed/VIDEO_ID
//    Vimeo embed:   https://player.vimeo.com/video/VIDEO_ID
// 3. Agrega una entrada al array de abajo
// 4. Opcionalmente agrega una imagen de miniatura en:
//    public/images/videos/[nombre].jpg
// ============================================================

export type VideoPlatform = 'youtube' | 'vimeo' | 'instagram'

export interface Video {
  id: string
  title: string
  description?: string
  embedUrl: string           // URL de embed para reproducir en el sitio
  thumbnail?: string         // Ruta a imagen miniatura (opcional)
  platform: VideoPlatform
  year?: string
}

export const videos: Video[] = [
  // ── EJEMPLO — reemplaza con tus videos reales ──────────────
  // {
  //   id: 'reel-2025',
  //   title: 'Showreel 2025',
  //   description: 'Compilado de los mejores proyectos del año.',
  //   embedUrl: 'https://www.youtube.com/embed/TU_VIDEO_ID',
  //   thumbnail: '/images/videos/reel-2025.jpg',
  //   platform: 'youtube',
  //   year: '2025',
  // },
  // {
  //   id: 'proyecto-vmtop',
  //   title: 'VMTOP Campaign',
  //   description: 'Producción audiovisual para campaña digital.',
  //   embedUrl: 'https://player.vimeo.com/video/TU_VIDEO_ID',
  //   thumbnail: '/images/videos/vmtop.jpg',
  //   platform: 'vimeo',
  //   year: '2024',
  // },
]
