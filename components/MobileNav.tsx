'use client'

import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { usePathname } from 'next/navigation'
import { Menu, XSquare } from 'lucide-react'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const pathname = usePathname()

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
        <Menu size={28} />
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform opacity-95 dark:opacity-[0.98] bg-white duration-300 ease-in-out dark:bg-zinc-900 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-5">
          <button className="mr-8 mt-7 h-8 w-8" aria-label="Toggle Menu" onClick={onToggleNav}>
            <XSquare size={28} />
          </button>
        </div>
        <div className="space-y-1 px-6 mr-4">
          {headerNavLinks.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={onToggleNav}
              className={`group flex p-3 w-full justify-start cursor-pointer text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 transition ${
                pathname === route.href
                  ? 'bg-gray-300 dark:bg-zinc-700/60 dark:text-green-500 p-2 rounded-md'
                  : ''
              }
              `}
            >
              <div className="flex items-center flex-1">{route.title}</div>
            </Link>
          ))}
        </div>
        <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 bg-transparent text-white p-3 w-60">
          <div className="text-center text-base">
            <div className="p-2 bg-gray-300 dark:bg-zinc-700/60 rounded-lg -ml-10">
              <p className="font-bold text-lg dark:text-white text-black">Prabhu Kiran Konda</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav
