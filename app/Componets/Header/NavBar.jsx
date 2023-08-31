import Link from 'next/link'
import React from 'react'
import Banner from './Componets/Banner'


function NavBar() {

    return (
        <div className='h-16 bg-black w-full'>
            <div className='center relative h-12'>
                <div className='w-full h-8' >
                    <Banner message={'New sale'} linkColor={'red'} link={'/'} linkMessage={'show Now'} />
                </div>
                <div className='w-[25%] absolute right-0  h-8'>
                    <div className=' m-auto h-8 w-24'></div>
                </div>

            </div>
            <nav className='fixed w-full flex items-center bg-white  h-8 justify-evenly'>
                <Link href={'/'}>Home</Link>
                <Link href={'/Shop/HotTools'}>Shop</Link>
                <Link href={'/Book/HotTools'}>Book</Link>

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

