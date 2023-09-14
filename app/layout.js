import Footer from './Componets/Footer'
import NavBar from './Componets/Header/NavBar'
import { siteName } from './META'
import './globals.css'
import { Inter } from 'next/font/google'
import {useScrollPosition} from 'next'
import Script from 'next/script'

export const revalidate = 0;
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: siteName,
  description: 'Luxury Raw Hair',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='public/Images/371104266_1371705300076286_136258277339424492_n.jpeg' />
        
      </head>

      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
