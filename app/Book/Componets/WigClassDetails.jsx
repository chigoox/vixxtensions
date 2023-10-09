import Image from 'next/image'
import React from 'react'
import VixBooking1 from '../../../public/Images/VixBooking1.jpeg'

const WigClassDetails = () => {
    return (
        <div className=' fadeIn center-col h-auto'>
            <Image alt='' height={0} width={1080} className='h-[40rem] w-full rounded shadow-md shadow-black object-cover' src={'https://cdn-s.acuityscheduling.com/upload-d0716d9c7deec2b678f85f750afd3b08.png'} />
            <Image alt='' height={0} width={0} className='h-[40rem] w-full object-cover rounded shadow-md shadow-black ' src={VixBooking1} />
        </div>
    )
}

export default WigClassDetails 