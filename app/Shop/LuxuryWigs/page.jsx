import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import ProductsList from '../Componets/ProductsList'
import luxWigs from '../../../public/Images/RawWig.jpeg'
import ShopCategoryTitle from '../Componets/ShopCategoryTitle'

function LuxWigs() {
    return (
        <div className=' relative min-h-screen flex-col '>
            <ShopCategoryTitle title={'Luxury Wigs'} />
            <ProductsList category={'LuxuryWigs'} />

        </div>
    )
}

export default LuxWigs