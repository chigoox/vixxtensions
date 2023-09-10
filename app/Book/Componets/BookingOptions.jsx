'use client'
import React, { useState } from 'react'
import { booking } from '../Meta'
import WigClassDetails from './WigClassDetails'
import WigConDetails from './WigConDetail'
import BookingInfo from './BookingInfo'

function BookingOptions() {
    const [booktype, setBooktype] = useState()
    console.log(booktype)
    const BookingButton = ({ type }) => {
        return (<button onClick={() => { setBooktype(type) }} className='h-64 w-32 hover:scale-110 scale-100  bg-black trans-slow'>

        </button>)
    }
    const bookInfo = () => {
        switch (booktype) {
            case 'Wig Class':
                console.log('here')
                return <WigClassDetails />
                break;
            case 'Bundle Construction':
                console.log('here2')

                return <WigConDetails />
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <div className='center hover:gap-4 gap-2 trans mb-4'>

                {booking.map((type) => (<BookingButton type={type} />))}

            </div>
            {<BookingInfo details={bookInfo()} />}
        </div>
    )
}

export default BookingOptions