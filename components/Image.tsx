import NextImage, { ImageProps } from 'next/image'

function Image({ ...rest }: ImageProps) {
  return <NextImage {...rest} />
}

export default Image
