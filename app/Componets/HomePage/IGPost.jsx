'use client'
import { Card } from '@nextui-org/react'
import React from 'react'

function IGPost({ post }) {
    const { mediaUrl, mediaType } = post


    return (
        <Card className=' shadow-gray-700 group bg-black m-auto overflow-hidden  h-36 w-36 '>
            {mediaType == 'VIDEO' && <video muted playsInline autoPlay onMouseOver={e => e.target.play()} onMouseOut={e => e.target.pause()} className='video rounded-[1rem] h-full w-full trans object-cover group-hover:scale-110' src={mediaUrl} alt="" />}
            {mediaType == 'IMAGE' && <img className='h-full w-full trans-slow object-cover group-hover:scale-110 rounded-[1rem]' src={mediaUrl} alt="" />}
        </Card>
    )
}

export default IGPost