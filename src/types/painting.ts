type PaintingType = {
  src: StaticImageData
  alt: string
  title: string
  id: string
  width: string | number
  height: string | number
  quality: string | number
  loading?: 'lazy' | 'eager' | undefined
  priority?: boolean
}

export default PaintingType
