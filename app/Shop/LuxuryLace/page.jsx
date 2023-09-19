import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import Products from '../Componets/Products'
import luxBundles from '../../../public/Images/RawLace.jpeg'

function LuxLace() {
    return (
        <div className=' relative min-h-screen flex-col '>
            <EmblaCarousel
                text={'Luxury Lace'}
                dim={true}
                noZoom={true}
                img1={luxBundles}
                rounded={true} noArrow={true}
            />

            <Products category={'LuxuryLace'} />

        </div>
    )
}

export default LuxLace