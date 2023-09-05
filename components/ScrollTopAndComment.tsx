'use client'

import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'
import ThemeSwitch from './ThemeSwitch'
import { ChevronsUp, MessagesSquare } from 'lucide-react'

const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }
  const handleScrollToComment = () => {
    document.getElementById('comment')?.scrollIntoView()
  }
  return (
    <div
      className={`fixed bottom-8 right-1 md:right-8 flex-col gap-3 z-20 ${
        show ? 'flex' : 'hidden'
      }`}
    >
      {siteMetadata.comments?.provider && (
        <button
          aria-label="Scroll To Comment"
          onClick={handleScrollToComment}
          className="p-2 text-black transition-all dark:text-white rounded-full bg-gray-200 dark:bg-zinc-700 animate-bounce"
        >
          <MessagesSquare className="hover:text-[#671bff] dark:hover:text-green-500" />
        </button>
      )}
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="p-2 text-black transition-all dark:text-white rounded-full bg-gray-200 dark:bg-zinc-700 animate-bounce"
      >
        <ChevronsUp className="hover:text-[#671bff] dark:hover:text-green-500" />
      </button>
      <div className="ml-[0.5em]">
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default ScrollTopAndComment
