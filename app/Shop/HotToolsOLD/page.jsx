import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import ProductsList from '../Componets/ProductsList'
import hotTools from '../../../public/Images/RawTools.jpeg'
import Image from 'next/image'
import ShopCategoryTitle from '../Componets/ShopCategoryTitle'
import { revalidatePath } from 'next/cache'


async function HotTools() {
    revalidatePath('/')



    return (
        <div className=' relative min-h-screen flex-col '>


            <ShopCategoryTitle title={'Hot Tools'} />
            <ProductsList category={'HotTools'} />

        </div>
    )
}

export default HotTools

const x = (


    <div className='h-40 mt-2 relative center gap-2 text-5xl font-light '>
        <EmblaCarousel
            text={'Hot Tools'}
            dim={true}
            noZoom={true}
            img1={hotTools}
            rounded={true} noArrow={true}
        />
        <h1 className='h-full mt-10'>Hot</h1>
        <Image height={0} width={0} objectFit='cover' className='border-pink-700 border-opacity-50 border-2 h-full w-16 rounded-full shadow-sm shadow-gray-900' src={hotTools} alt="" />
        <h1 className='h-full text-bottom items-end mb-10 flex'>Tools</h1>
    </div>
)