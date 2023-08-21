'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between shadow-md p-5 mt-3 bg-zinc-800 dark:bg-zinc-800 transition-colors duration-100 rounded-lg backdrop-blur-3xl bg-clip-padding backdrop-filter bg-opacity-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`hidden sm:block text-black dark:text-gray-100 hover:p-2 hover:bg-gray-400/50 hover:font-extrabold hover:dark:bg-zinc-700 hover:rounded-md ${
                pathname.startsWith(link.href)
                  ? 'p-2 bg-gray-400/50 font-extrabold text-base dark:bg-zinc-700 rounded-md'
                  : 'text-lg font-medium'
              }`}
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
