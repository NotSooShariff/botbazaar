import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-950 text-gray-400 py-8 px-4 md:px-6">
          <div
            className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/">
              <div className="flex items-center gap-2">
                <BotIcon className="h-6 w-6 text-[#55efc4]" />
                <span className="text-sm font-medium">Bot Bazaar Inc.</span> 
              </div>
            </Link>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-sm hover:text-[#55efc4] underline-offset-4" href="/terms-of-service">
                Terms & Conditions
              </Link>
              <Link className="text-sm hover:text-[#55efc4] underline-offset-4" href="/privacy-policy">
                Privacy Policy
              </Link>
            </nav>
            <p className="text-xs">© 2024 Bot Bazaar Inc. All rights reserved.</p>
          </div>
        </footer>
    </div>
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

export default Footer