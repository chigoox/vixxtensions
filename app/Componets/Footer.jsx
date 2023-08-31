import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { siteName } from '../META'
import Link from 'next/link'

function Footer() {
    return (
        <div className=' w-full bg-slate-100'>
            <div className='flex flex-wrap  justify-between'>
                <div className='p-2 fadeInRight    md:w-full lg:w-fit  '>
                    <Link href={"/"} className='my-1 font-bold text-2xl'>{siteName}</Link>

                </div>
                <div className='fadeInBottom  text-xs gap-y-5 gap-x-10  h-fit text-black  p-2 flex flex-wrap items-start'>

                    <div className='p-2  fadeInRight w-32 '>
                        <h1 className='text-2xl font-bold'>Company</h1>
                        <div className='h-12 '>
                            <div className='text-slate-600'>Contact</div>
                            <div className='text-slate-600'>About Store</div>

                            {

                                // <Link to={'/About'} className='block'>Contact</Link>
                                //<Link to={'/About'} className='block'>About Store</Link>
                            }
                        </div>
                    </div>
                    <div className='p-2  fadeInRight w-32 text-2xl font-bold'>

                        <h1>place holder</h1>
                    </div>
                    <div className='p-2  fadeInRight w-32 text-2xl font-bold'>
                        <h1>place holder</h1>
                    </div>
                    <div className='p-2  fadeInRight w-32 text-2xl font-bold'>
                        <h1>place holder</h1>
                    </div>




                </div>

            </div>

            <div className='m-auto  fadeInRight overflow-hidden w-fit'>
                <div className='p-2 h-fit center flex-col'>
                    <h1 className='m-1 font-bold text-2xl'>Newsletter</h1>
                    <h1 className='m-1 '>Be the first to hear
                        the latest news from {siteName}, and much more!
                    </h1>
                    <input className='w-[90%] m-auto text-black h-8 trans p-2 focus:scale-110 hover:scale-105' type="text" placeholder='Email' />
                    <h1>By subscribing you agree to our privacy policy</h1>
                    <button className='h-12 w-32 p-2 bg-gray-700 trans-slow hover:bg-black hover:scale-110 my-8'>Subscribe</button>
                </div>

            </div>
        </div>
    )
}

export default Footer


/* 


<h1 className='my-1 '>Need to reach me?</h1>
                    <h1 className='my-1 '>+555-555-5555</h1>
                    <h1 className='my-1 '>void.void@gmail.com</h1>
                    <div className="my-1  flex gap-4  items-center">
                        <button className="h-4 w-4 trans hover:scale-105 center"><AiFillTwitterSquare size={32} /></button>
                        <button className="h-4 w-4 trans hover:scale-105 center"><AiFillFacebook size={32} /></button>
                        <button className="h-4 w-4 trans hover:scale-105 center"><AiFillInstagram size={32} /></button>
                        <button className="h-4 w-4 trans hover:scale-105 center"><AiFillYoutube size={32} /></button>
                    </div>
*/