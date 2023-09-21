import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import ProductsList from '../Componets/ProductsList'
import luxBundles from '../../../public/Images/RawBundles.jpeg'
import ShopCategoryTitle from '../Componets/ShopCategoryTitle'

function LuxBundles() {
    return (
        <div className=' relative min-h-screen flex-col '>


            <ShopCategoryTitle title={'Luxury Bundles'} />
            <ProductsList category={'LuxuryBundles'} />

        </div>
    )
}

export default LuxBundles