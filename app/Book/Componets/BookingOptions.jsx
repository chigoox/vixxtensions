'use client'
import React, { useState } from 'react'
import { booking } from '../Meta'
import WigClassDetails from './WigClassDetails'
import WigConDetails from './WigConDetail'
import BookingInfo from './BookingInfo'
import { Button, Card } from '@nextui-org/react'

function BookingOptions({ booktype, setBooktype }) {
    const BookingButton = ({ type }) => {
        return (<button onClick={() => { setBooktype(type) }} className='h-40 w-32 p-0 rounded relative overflow-hidden hover:scale-110 scale-100  bg-black trans-slow'>
            <h1 className='h-full  w-full  bg-opacity-30 bg-black absolute top-0 left-0 text-white center '>{type}</h1>
            <img className='h-full w-full object-cover' src={type == 'Wig Class' ? 'https://cdn-az.allevents.in/events5/banners/4dd01fa70d5103be4bca91d6daaba3609751beb504f4cafd83ddd6b80e27d636-rimg-w1200-h1500-gmir.jpg?v=1647288504' :
                type == 'Bundle Construction' && 'https://ae01.alicdn.com/kf/S835cc248a26b43b387ae982d1bbe9ec5j/Luvin-30-40-Inch-Loose-Deep-Wave-Bundles-Human-Hair-100-Brazilian-Remy-Hair-Curly-Water.png_.webp'

            } alt="" />
        </button>)
    }
    const bookInfo = () => {
        switch (booktype) {
            case 'Wig Class':
                return <WigClassDetails />
                break;
            case 'Bundle Construction':

                return <WigConDetails />
                break;
            default:
                break;
        }
    }
    return (
        <div className='relative'>
            <div className='center hover:gap-4 gap-2 trans mb-4'>

                {booking.map((type) => (<BookingButton type={type} />))}

            </div>
            {<BookingInfo details={bookInfo()} />}
        </div>
    )
}

export default BookingOptions