import { CanvasStore } from '@/store/canvas'

interface Collection {
  src: string
  alt: string
}

export function searchFilter(image: Collection[], input: string) {
  const filterValue = input?.toLowerCase()
  return image.filter((img) => img.alt.toLowerCase().includes(filterValue))
}

export function saveImage() {
  const link = document.createElement('a')
  link.download = 'gl_banner.png'
  link.href = CanvasStore.canvas!.toDataURL()
  link.click()
}
