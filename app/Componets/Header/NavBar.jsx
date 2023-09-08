import Link from 'next/link'
import React from 'react'
import Banner from './Componets/Banner'
import { Jost } from 'next/font/google'
import { AiOutlineSearch } from 'react-icons/ai'

const jost = Jost({
    weight: '400',
    subsets: ['latin'],
})

function NavBar() {

    return (
        <div className='h-22 bg-black w-full  overflow-hidden'>
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
                    <h1 className={`text-center  font-bold text-3xl `}>ViXxtensions</h1>
                    <h1 className='text-center text-xs'>Luxury Raw Hair</h1>
                </div>
                <h1 className='h-0 md:relative absolute top-0 w-0 md:w-fit md:h-7 text-sm md:text-xs text-gray-500 overflow-hidden'>1-800-5istheGOAT</h1>
            </div>
            <nav className='fixed trans top-0 w-full evenly  bg-white group scale-y-0 md:scale-[1]  h-8 z-[99999]'>
                <Link className='' href={'/'}>Home</Link>
                <Link href={'/Shop/HotTools'}>Shop</Link>
                <Link href={'/Book'}>Book</Link>

            </nav>
        </div>

    )
}

export default NavBar

/* 

routes

shop/Luxury wigs , Luxury bundles , luxury lace , hot tools 
book/book appointments, book a class

*/

