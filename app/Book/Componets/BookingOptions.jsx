import React from 'react'
import { booking } from '../Meta'

function BookingOptions() {
    const BookingButton = () => {
        return (<button className='h-64 w-32 hover:scale-110 scale-100  bg-black trans-slow'>

        </button>)
    }
    return (
        <div className='center hover:gap-4 gap-2 trans'>

            {booking.map(i => (<BookingButton />))}

        </div>
    )
}

export default BookingOptions