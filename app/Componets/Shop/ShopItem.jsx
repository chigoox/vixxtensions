import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'

function ShopItem({ shopItems }) {
    const { title, img, price, salePrice, rating } = shopItems
    const stars = Array.apply(null, Array(rating))

    return (
        <Link href={`/Shop/HotTools/${title}`} className='h-[30rem] md:h-[25rem]  md:w-[20rem] m-auto my-2 w-80 bg-black relative text-white font-thin rounded-2xl overflow-hidden'>
            <img src={img} className='h-[80%] w-full object-cover' alt="" />
            <div className='h-[20%]  w-full center-col'>
                <h1 className='text-2xl'>{title}</h1>
                <div className='center w-20  flex-wrap'>
                    <h1>from</h1><h1 className='line-through'>${price}</h1>
                    {salePrice && <h1>${salePrice}</h1>}
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