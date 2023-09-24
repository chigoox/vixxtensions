'use client'
import Link from 'next/link'
import React, { Suspense, useState } from 'react'
import Banner from './Componets/Banner'
import { Jost } from 'next/font/google'
import { AiOutlineClose, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import MenuButton from '../General/MobileMenuButton'
import { Navigation, NavigationEvents } from "../NavigationEvents";
import { category, siteName } from '@/app/META'
import Image from 'next/image'
import { BedSingle } from 'lucide-react'
import Cart from './Cart'

const jost = Jost({
    weight: '400',
    subsets: ['latin'],
})

function NavBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
        return (!showMobileMenu)
    }
    const toggleCart = () => {
        setShowCart(!showCart)
        return (!showCart)
    }
    const [navRoute, setNavRoute] = useState([])





    return (
        <div className='h-22 bg-black w-full  overflow-hidden'>
            <Cart showCart={showCart} />
            <Suspense>
                <NavigationEvents setRoute={setNavRoute} />
            </Suspense>
            <div className='mt-0 md:mt-8 relative '>
                <div className=' h-10 center ' >
                    <Banner message={'New sale'} linkColor={'red'} link={'/'} linkMessage={'show Now'} />
                </div>
                <div className='w-[25%] absolute right-0  h-8'>
                    <div className=' m-auto h-8 w-24'></div>
                </div>

            </div >
            <div className='center h-20 overflow-hidden bg-white relative m-auto'>

                <div className={jost.className}>

                    <div className={' h-full bg-black bg-opacity-25 w-full top-0 center absolute right-0'}>
                        <h1 className={`text-center text-white font-bold text-3xl `}>{siteName}</h1>
                    </div>
                    <div className=''>
                        <iframe className='w-[100vw] aspect-video video ytplayer'
                            src="https://www.youtube.com/embed/83h5XA6LYa4?autoplay=1&mute=1&controls=0&loop=1playlist=83h5XA6LYa4">
                        </iframe>
                    </div>
                    {/* <Image height={30} width={2000} src={'https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg?w=2000'} alt={''} /> */}


                </div>
            </div>
            <nav className={`fixed  trans md:top-0 -bottom-2 items-center md:justify-evenly justify-center w-full flex md:flex-row  gap-4 md:gap-0 ${showMobileMenu ? 'h-16 scale-100 ' : showCart ? '' : 'h-0 p-0 '} ${showCart ? 'h-16 scale-100 w-[50%] left-[50%] ' : 'w-[100%] left-[0%] '} border rounded-t-2xl md:rounded-none  bg-black-900 text-white md:text-black md:bg-white group   md:h-8 z-[99999]`}>
                {!showCart && <button onClick={toggleMobileMenu} className={`absolute -top-[3.7rem] bg-black rounded-full h-12 w-12 center p-2 ${showCart ? '' : ''}`}>
                    <MenuButton menuOpen={showMobileMenu} />
                </button>}

                <button onClick={toggleCart} className={`trans bg-black rounded-full p-2 center  gap-4 absolute flex -top-[3.7rem] ${showCart ? 'right-[88%]' : 'right-[2%]'}`}>
                    {!showCart ? <AiOutlineShoppingCart size={32} /> : <AiOutlineClose size={32} />}
                </button>

                <Link className='' href={'/'}>Home</Link>
                <Link href={'/Shop'}>Shop</Link>
                <Link href={'/Book'}>Book</Link>


            </nav>
            {
                navRoute[0]?.toUpperCase()?.includes('SHOP') && <div className='bg-white '>
                    <div className='h-20 w-3/4 evenly gap-2 text-black font-light text-center m-auto bg-white'>
                        {category.map(item => (<Link key={item} href={item.includes('Hot') ? `/Shop/HotTools` : `/Shop/${item.replace(/\s/g, '')}`}>
                            <div className='h-12 w-20  rounded'>
                                <h1 className=''>{item.includes('Hot') ? 'Tools & Acces...' : item}</h1>
                            </div></Link>))}
                    </div>
                </div>
            }
        </div >

    )
}

export default NavBar

/* 

routes

shop/Luxury wigs , Luxury bundles , luxury lace , hot tools 
book/book appointments, book a class

*/

