import EmblaCarousel from '@/app/Componets/HomePage/Carousel'
import React from 'react'
import Products from '../Componets/Products'


async function HotTools() {

    return (
        <div className=' relative min-h-screen flex-col '>
            <EmblaCarousel
                text={'Hot Tools'}
                dim={true}
                noZoom={true}
                img1={'https://images.unsplash.com/photo-1527799595389-46c4c3aa0df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80'}
                rounded={true} noArrow={true}
            />

            <Products category={'shirts'} />

        </div>
    )
}

export default HotTools