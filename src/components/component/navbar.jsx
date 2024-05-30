import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <BotIcon className="h-6 w-6 text-[#55efc4]" />
          <span className="sr-only">Bot Bazaar Inc.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-[#55efc4] underline-offset-4"
            href="/#features">
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#55efc4] underline-offset-4"
            href="/#projects">
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:text-[#55efc4] underline-offset-4"
            href="/support">
            Contact
          </Link>
        </nav>
      </header>
  )
}

function BotIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>)
    );
  }  

export default Navbar

