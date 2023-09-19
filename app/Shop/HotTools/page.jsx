import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import Products from '../Componets/Products'
import hotTools from '../../../public/Images/RawTools.jpeg'


async function HotTools() {

    return (
        <div className=' relative min-h-screen flex-col '>
            <EmblaCarousel
                text={'Hot Tools'}
                dim={true}
                noZoom={true}
                img1={hotTools}
                rounded={true} noArrow={true}
            />

            <Products category={'HotTools'} />

        </div>
    )
}

export default HotTools