import Image from 'next/image'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'

function ShopItem({ shopItems }) {
    console.log(shopItems)
    const { name, images, metadata } = shopItems ? shopItems : {}
    const { salePrice } = metadata
    // const stars = Array.apply(null, Array(rating))

    return (
        <Link href={`/Shop/HotTools/${name}`} className='h-[30rem] md:h-[25rem]  md:w-[20rem] m-auto my-2 w-80 bg-black relative text-white font-thin rounded-2xl overflow-hidden'>
            <Image fill src={images[0]} className='h-[80%] w-full object-cover' alt="" />
            <div className='h-[20%] bg-black absolute bottom-0  w-full center-col'>
                <h1 className='text-2xl'>{name}</h1>
                <div className=' w-20'>
                    <span className='font-thin'>from</span><span className='text-xl'> ${salePrice}</span>

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