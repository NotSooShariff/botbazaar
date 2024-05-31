import { Inter } from "next/font/google";
import { Syne } from 'next/font/google'
import { Comfortaa } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
})
  
export const metadata = {
  title: "Bot Bazaar",
  description: "Rediscover Automation",
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  );
}
