import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className="mx-auto max-w-6xl px-3 md:px-4 xl:px-0">{children}</section>
}
