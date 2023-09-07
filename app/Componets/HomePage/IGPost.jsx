'use client'
import React from 'react'

function IGPost({ post }) {
    const { mediaUrl, mediaType } = post


    return (
        <div className='rounded-[1rem]  shadow-md shadow-gray-700 group bg-black m-auto overflow-hidden  h-36 w-36 '>
            {mediaType == 'VIDEO' && <video onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} className='video h-full w-full trans object-cover group-hover:scale-110' src={mediaUrl} alt="" />}
            {mediaType == 'IMAGE' && <img className='h-full w-full trans-slow object-cover group-hover:scale-110' src={mediaUrl} alt="" />}
        </div>
    )
}

export default IGPost