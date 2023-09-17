'use client'
import Link from 'next/link'
import React, { Suspense, useState } from 'react'
import Banner from './Componets/Banner'
import { Jost } from 'next/font/google'
import { AiOutlineSearch } from 'react-icons/ai'
import MenuButton from '../General/MobileMenuButton'
import { Navigation, NavigationEvents } from "../NavigationEvents";
import { category, siteName } from '@/app/META'

const jost = Jost({
    weight: '400',
    subsets: ['latin'],
})

function NavBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
        return (!showMobileMenu)
    }
    const [navRoute, setNavRoute] = useState([])


    return (
        <div className='h-22 bg-black w-full  overflow-hidden'>
            <Suspense>
                <NavigationEvents setRoute={setNavRoute} />
            </Suspense>
            <div className=' mt-8 relative h-8'>
                <div className=' h-8 center ' >
                    <Banner message={'New sale'} linkColor={'red'} link={'/'} linkMessage={'show Now'} />
                </div>
                <div className='w-[25%] absolute right-0  h-8'>
                    <div className=' m-auto h-8 w-24'></div>
                </div>

            </div>
            <div className='between  bg-white  p-2'>

                <div className='relative center scale-[.60] md:scale-100 bg-slate-200 text-gray-500 p-1'>
                    <div className=''><AiOutlineSearch size={24} /></div>
                    <input placeholder='Search' className='p-2 h-7 w-32  md:w-52 focus:outline-none  bg-slate-200' type="text" />
                </div>
                <div className={jost.className}>
                    <h1 className={`text-center  font-bold text-3xl `}>{siteName}</h1>
                    <h1 className='text-center text-xs'>Luxury Raw Hair</h1>
                </div>
                <h1 className='h-0 md:relative absolute top-0 w-0 md:w-fit md:h-7 text-sm md:text-xs text-gray-500 overflow-hidden'>1-800-5istheGOAT</h1>
            </div>
            <nav className={`fixed  trans md:top-0 -bottom-2 items-center md:justify-evenly justify-center w-full flex md:flex-row  gap-4 md:gap-0 ${showMobileMenu ? 'h-16 scale-100' : 'h-0 p-0'} rounded-t-2xl md:rounded-none  bg-black-900 text-white md:text-black md:bg-white group   md:h-8 z-[99999]`}>
                <button onClick={toggleMobileMenu} className={`absolute -top-[3.7rem] bg-black rounded-full h-12 w-12 center p-2`}>
                    <MenuButton menuOpen={showMobileMenu} />
                </button>
                <Link className='' href={'/'}>Home</Link>
                <Link href={'/Shop'}>Shop</Link>
                <Link href={'/Book'}>Book</Link>

            </nav>
            {navRoute[0]?.includes('Shop') && <div className='bg-white '>
                <div className='h-20 w-3/4 evenly gap-2 text-black font-light text-center m-auto bg-white'>
                    {category.map(item => (<Link key={item} href={item.includes('Hot') ? `/Shop/HotTools` : `/Shop/${item.replace(/\s/g, '')}`}>
                        <div className='h-12 w-20  rounded'>
                            <h1 className=''>{item.includes('Hot') ? 'Tools & Acces...' : item}</h1>
                        </div></Link>))}
                </div>
            </div>}
        </div>

    )
}

export default NavBar

/* 

routes

shop/Luxury wigs , Luxury bundles , luxury lace , hot tools 
book/book appointments, book a class

*/

