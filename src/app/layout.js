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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  );
}
