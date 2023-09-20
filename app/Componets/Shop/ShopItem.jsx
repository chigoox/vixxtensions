import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'

function ShopItem({ shopItems, location = 'HotTools', onShopPage }) {
    console.log(shopItems)
    const { name, images, metadata } = shopItems ? shopItems : {}
    const { price } = metadata
    // const stars = Array.apply(null, Array(rating))

    return (
        <Link href={`/Shop/${location}/${name.replace(/\s/g, '')}`} className='h-[20rem] w-[11rem] max-h-[25rem] md:h-[25rem]  md:w-[20rem] m-auto my-2 shadow-sm shadow-gray-300  border border-gray-100 relative text-black font-thin rounded-lg overflow-hidden'>
            <Image fill src={images[0]} className='h-[60%] w-full object-cover' alt="" />
            <div className='h-[40%] md:h-[20%] bg-gray-50 absolute bottom-0  w-full flex items-center flex-col p-2'>
                <h1 className='md:text-xl text-sm border p-1 w-[95%] text-center max-h-12 max-w'>{name}</h1>
                <div className=' w-full center gap-1'>
                    <span className='font-light'>from</span><span className='text-xl font-bold'>{price}</span>

                </div>

            </div>

            {/*  <div className='w-28 h-8 absolute rounded-full flex justify-end items-center p-2 top-[70%] right-4 bg-black bg-opacity-75'>
                {stars.map((star) => {
                    return (
                        <AiFillStar size={14} color='yellow' />
                    )
                })}


            </div> */}

        </Link>
    )
}

export default ShopItem