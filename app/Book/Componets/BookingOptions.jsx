'use client'
import React, { useState } from 'react'
import { booking } from '../Meta'
import WigClassDetails from './WigClassDetails'
import WigConDetails from './WigConDetail'
import BookingInfo from './BookingInfo'

function BookingOptions({ booktype, setBooktype }) {
    const BookingButton = ({ type }) => {
        return (<button onClick={() => { setBooktype(type) }} className='h-72 w-52 rounded overflow-hidden hover:scale-110 scale-100  bg-black trans-slow'>
            <h1 className='h-full text-center  text-2xl w-full bg-opacity-30 bg-black absolute top-0 left-0 text-white center '>{type}</h1>
            <img className='h-full  object-cover' src={type == 'Wig Class' ? 'https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-1/274869409_806837076916854_8730864348928003988_n.jpg?stp=dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=754033&_nc_ohc=7uL6zUxuKeEAX8KQYCA&_nc_ht=scontent-lga3-2.xx&oh=00_AfAsH8UwZbo23zHSQ5s0MYEwtI5brb1t4ILBKwmHvpE6kQ&oe=6502E7B2' :
                type == 'Bundle Construction' && 'https://ae01.alicdn.com/kf/S835cc248a26b43b387ae982d1bbe9ec5j/Luvin-30-40-Inch-Loose-Deep-Wave-Bundles-Human-Hair-100-Brazilian-Remy-Hair-Curly-Water.png_.webp'

            } alt="" />
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
        <div className='relative'>
            <div className='center hover:gap-4 gap-2 trans mb-4'>

                {booking.map((type) => (<BookingButton type={type} />))}

            </div>
            {<BookingInfo details={bookInfo()} />}
        </div>
    )
}

export default BookingOptions