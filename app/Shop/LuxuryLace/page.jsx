import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import ProductsList from '../Componets/ProductsList'
import luxBundles from '../../../public/Images/RawLace.jpeg'
import ShopCategoryTitle from '../Componets/ShopCategoryTitle'

function LuxLace() {
    return (
        <div className=' relative min-h-screen flex-col '>


            <ShopCategoryTitle title={'Luxury Lace'} />
            <ProductsList category={'LuxuryLace'} />

        </div>
    )
}

export default LuxLace