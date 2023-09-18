import Image from 'next/image'
import React from 'react'
import VixBooking1 from '../../../public/Images/VixBooking1.jpeg'

const WigClassDetails = () => {
    return (
        <div className='overflow-hidden fadeIn'>
            <img className='h-[40rem] rounded shadow-md shadow-black' src={'https://cdn-s.acuityscheduling.com/upload-d0716d9c7deec2b678f85f750afd3b08.png'} />
            <Image className='h-[40rem] object-cover rounded shadow-md shadow-black' src={VixBooking1} />
        </div>
    )
}

export default WigClassDetails 