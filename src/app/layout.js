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
    title: 'Bot Bazaar',
    description: 'Rediscover Automation',
    url: 'https://botbazaar.shop',
    siteName: 'Bot Bazaar',
    images: [
      {
        url: 'https://botbazaar.shop/800x600.png', 
        width: 800,
        height: 600,
      },
      {
        url: 'https://botbazaar.shop/1800x1600.png', 
        width: 1800,
        height: 1600,
        alt: 'Bot Bazaar Website',
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
