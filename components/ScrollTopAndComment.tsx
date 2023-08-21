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
    <div className={`fixed bottom-8 right-1 md:right-8 flex-col gap-3 ${show ? 'flex' : 'hidden'}`}>
      {siteMetadata.comments?.provider && (
        <button
          aria-label="Scroll To Comment"
          onClick={handleScrollToComment}
          className="p-2 text-black transition-all dark:text-white"
        >
          <MessagesSquare className="hover:text-[#671bff] animate-bounce hover:animate-pulse dark:hover:text-green-500" />
        </button>
      )}
      <button
        aria-label="Scroll To Top"
        onClick={handleScrollTop}
        className="p-2 text-black transition-all dark:text-white "
      >
        <ChevronsUp className="hover:text-[#671bff] animate-bounce hover:animate-pulse dark:hover:text-green-500" />
      </button>
      <div className="ml-[0.5em]">
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default ScrollTopAndComment
