import { CartWrapper } from '@/StateManager/CartContext'
import Footer from './Componets/Footer'
import NavBar from './Componets/Header/NavBar'
import { siteName } from './META'
import './globals.css'
import { Inter, Jost } from 'next/font/google'
import {  UIProvider } from './UIProvider'

const inter = Inter({ subsets: ['latin'] })
const jost = Jost({ subsets: ['latin'] })

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

      <body className={jost.className}>
        <UIProvider>
<CartWrapper>
          <NavBar />
        {children}
        <Footer />
        </CartWrapper>
        </UIProvider>
        
        </body>
    </html>
  )
}
