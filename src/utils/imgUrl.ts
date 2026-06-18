/// <reference types="vite/client" />

/**
 * Prefija la ruta de imagen con la base URL de Vite.
 * En desarrollo: '/'  → '/images/...'
 * En producción: '/isaac-ruiz-portafolio/' → '/isaac-ruiz-portafolio/images/...'
 */
export function imgUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const clean = path.startsWith('/') ? path.slice(1) : path
  return `${base}${clean}`
}
