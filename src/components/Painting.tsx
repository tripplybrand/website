import Image from 'next/image'
import PaintingType from '../types/painting'

const Painting = ({
  src,
  alt,
  title,
  width,
  height,
  quality,
  priority,
}: Omit<PaintingType, 'id'>) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        placeholder={'blur'}
      />
      <h3 className="text-xs md:text-sm font-light text-black italic">
        <cite>{title}</cite>
      </h3>
    </>
  )
}

export default Painting
