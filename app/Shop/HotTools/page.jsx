import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import ShopItem from '@/app/Componets/Shop/ShopItem'
import { bestseller } from '@/app/META'
import React from 'react'

function HotTools() {
    return (
        <div className='flex min-h-screen flex-col '>
            <EmblaCarousel img1={'https://www.divatress.com/cdn/shop/files/Diva_Outre_3_1_180x.png'} rounded={true} noArrow={true} />

            <div className=''>
                <h1 className='font-bold text-2xl text-center my-4'>Hot Tools</h1>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4'>
                    {bestseller.map(shopItems => (<ShopItem key={shopItems.title} shopItems={shopItems} />))}
                </div>
            </div>


        </div>
    )
}

export default HotTools