import Link from 'next/link'
import React from 'react'
import './colors.css'

function Banner({ message, link, linkMessage, linkColor }) {

    return (
        <div className='center gap-0 text-sm'>
            <Link href={link}><p className={`${linkColor}`}>{linkMessage}</p></Link>
            <p className='text-white w-2'>:</p>
            <p className='text-white'>{message}</p>
        </div>
    )
}

export default Banner