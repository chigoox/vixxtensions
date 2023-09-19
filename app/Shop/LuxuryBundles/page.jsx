import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import Products from '../Componets/Products'
import luxBundles from '../../../public/Images/RawBundles.jpeg'

function LuxBundles() {
    return (
        <div className=' relative min-h-screen flex-col '>
            <EmblaCarousel
                text={'Luxury Bundles'}
                dim={true}
                noZoom={true}
                img1={luxBundles}
                rounded={true} noArrow={true}
            />

            <Products category={'hoodies'} />

        </div>
    )
}

export default LuxBundles