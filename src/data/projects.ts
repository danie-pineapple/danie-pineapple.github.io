// ============================================================
// PROYECTOS — galería de "Work"
// Cada proyecto puede tener uno o varios clips (vertical u
// horizontal). Los nombres y descripciones de abajo son
// PLACEHOLDERS inferidos de los nombres de archivo — edítalos
// con el nombre real, cliente y contexto de cada pieza.
//
// CÓMO AGREGAR UN PROYECTO NUEVO:
// 1. Copia el video a public/videos/horizontal/ o /vertical/
// 2. Genera un poster (frame de portada) con el mismo nombre
//    en public/posters/horizontal/ o /vertical/ (.jpg)
// 3. Agrega un bloque al array de abajo
// ============================================================
import { imgUrl } from '../utils/imgUrl'

export type Orientation = 'vertical' | 'horizontal'

export interface ProjectClip {
  src: string
  poster: string
  orientation: Orientation
}

export interface Project {
  id: string
  title: string
  year?: string
  description: { en: string; es: string }
  clips: ProjectClip[]
}

function clip(orientation: Orientation, filename: string): ProjectClip {
  const folder = orientation === 'vertical' ? 'vertical' : 'horizontal'
  const base = filename.replace(/\.mp4$/, '')
  return {
    src: imgUrl(`/videos/${folder}/${filename}`),
    poster: imgUrl(`/posters/${folder}/${base}.jpg`),
    orientation,
  }
}

export const projects: Project[] = [
  {
    id: 'azula',
    title: 'Azula — Character Animation',
    year: '2025',
    description: {
      en: 'Character animation study: attack cycle and idle pose, focused on weight, timing and personality.',
      es: 'Estudio de animación de personaje: ciclo de ataque y pose idle, con foco en peso, timing y personalidad.',
    },
    clips: [clip('horizontal', 'azula_atack_02_1_baja.mp4'), clip('horizontal', 'idle_pose_azula_03_baja.mp4')],
  },
  {
    id: 'dino-walkcycle',
    title: 'Dino Walkcycle',
    year: '2025',
    description: {
      en: 'Rigging and walk-cycle animation study for a quadruped character.',
      es: 'Estudio de rigging y ciclo de caminado para un personaje cuadrúpedo.',
    },
    clips: [clip('horizontal', 'dino_walkcycle_00_1.mp4')],
  },
  {
    id: 'lipsync',
    title: 'Lip Sync Study',
    year: '2025',
    description: {
      en: 'Facial animation and lip-sync test, matching phonetics to expression and timing.',
      es: 'Prueba de animación facial y lip-sync, ajustando fonética, expresión y timing.',
    },
    clips: [clip('horizontal', 'lipsing_24_3_baja.mp4')],
  },
  {
    id: 'cinematic-lighting',
    title: 'Cinematic Lighting',
    year: '2025',
    description: {
      en: 'Lighting and rendering study exploring mood and atmosphere in a 3D scene.',
      es: 'Estudio de iluminación y render explorando atmósfera y mood en una escena 3D.',
    },
    clips: [clip('horizontal', 'cinematic_project_ilum_01_baja.mp4')],
  },
  {
    id: 'vertical-takes',
    title: 'Vertical Takes Reel',
    year: '2025',
    description: {
      en: 'Short-form vertical reel, edited for social formats.',
      es: 'Reel vertical de formato corto, editado para redes sociales.',
    },
    clips: [clip('vertical', 'takes_00_au.mp4')],
  },
]
