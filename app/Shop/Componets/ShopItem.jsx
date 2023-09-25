'use client'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'
import { Grandstander, Dosis } from 'next/font/google'
import { Skeleton } from "@nextui-org/react";
const font = Grandstander({ subsets: ['latin'], weight: ['400'] })
const font2 = Dosis({ subsets: ['latin'], weight: ['400'] })


function ShopItem({ shopItems, location = 'HotTools', onShopPage }) {
    const { name, images, metadata } = shopItems ? shopItems : {}
    const { price } = metadata
    // const stars = Array.apply(null, Array(rating))
    return (
        <Link href={`/Shop/${location}/${name.replace(/\s/g, '')}`} className='h-[20rem] flex-shrink-0  w-[11rem] md:h-[33rem]  md:w-[20rem]  my-2 shadow-sm shadow-gray-300  border border-gray-100 relative text-black rounded-lg overflow-hidden'>
            <Skeleton isLoaded={name} className='w-full h-full'>
                <Image fill height={0} width={0} src={images[0]} className='h-[70%] w-full object-cover' alt="" />
                <div className='h-[30%] md:h-[20%] bg-gray-50 bg-opacity-75 absolute bottom-0  w-full flex items-center flex-col p-2'>

                    <div className={'font.className'}>
                        <h1 className='md:text-xl text-sm   p-1 w-[95%] text-center max-h-10 overflow-hidden md:max-h-16 max-w'>{name.substr(0, 50)}{name.length > 50 ? '...' : ''}</h1>
                    </div>
                    <div className=' w-full center gap-1'>
                        <span className='font-extralight text-sm'>from</span><span className='text-2xl font-semibold'><h1 className={font2.className}><Skeleton isLoaded={price} className='rounded'>{price}</Skeleton></h1></span>
                    </div>

                </div>

                {/*  <div className='w-28 h-8 absolute rounded-full flex justify-end items-center p-2 top-[70%] right-4 bg-black bg-opacity-75'>
                {stars.map((star) => {
                    return (
                        <AiFillStar size={14} color='yellow' />
                    )
                })}


            </div> */}

            </Skeleton>
        </Link>
    )
}

export default ShopItem