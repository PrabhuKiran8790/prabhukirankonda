import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 mt-1 text-sm md:text-base font-bold uppercase text-blue-600 dark:text-sky-500 hover:text-zinc-900 hover:underline underline-offset-4 hover:decoration-wavy dark:hover:text-green-500"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
