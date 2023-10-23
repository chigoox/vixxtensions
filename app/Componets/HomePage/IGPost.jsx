'use client'
import React from 'react'

function IGPost({ post }) {
    const { mediaUrl, mediaType, permalink } = post

    return (
        <a target="_blank" href={permalink} className='rounded-[1rem] shadow-md shadow-gray-700 group bg-black m-auto overflow-hidden  h-36 w-36'>
            {mediaType == 'VIDEO' && <video muted playsInline autoPlay onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} className='video rounded-[1rem] h-full w-full trans object-cover group-hover:scale-110' src={mediaUrl} alt="" />}
            {(mediaType == 'IMAGE' || mediaType == 'CAROUSEL_ALBUM') && <img alt='' className='h-full w-full trans-slow object-cover group-hover:scale-110 rounded-[1rem]' src={mediaUrl} />}
        </a >
    )
}

export default IGPost