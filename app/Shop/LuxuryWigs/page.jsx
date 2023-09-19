import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import Products from '../Componets/Products'
import luxWigs from '../../../public/Images/RawWig.jpeg'

function LuxWigs() {
    return (
        <div className=' relative min-h-screen flex-col '>
            <EmblaCarousel
                text={'Luxury Wigs'}
                dim={true}
                noZoom={true}
                img1={luxWigs}
                rounded={true} noArrow={true}
            />

            <Products category={'LuxuryWigs'} />

        </div>
    )
}

export default LuxWigs