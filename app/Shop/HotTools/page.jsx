import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import ShopItem from '@/app/Componets/Shop/ShopItem'
import { bestseller } from '@/app/META'
import { tr } from 'date-fns/locale'
import React from 'react'

function HotTools() {
    return (
        <div className=' relative min-h-screen flex-col '>
            <EmblaCarousel
                text={'Hot Tools'}
                dim={true}
                noZoom={true}
                img1={'https://images.unsplash.com/photo-1527799595389-46c4c3aa0df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80'} rounded={true} noArrow={true} />

            <div className=''>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4'>
                    {bestseller.map(shopItems => (<ShopItem key={shopItems.title} shopItems={shopItems} />))}
                </div>
            </div>


        </div>
    )
}

export default HotTools