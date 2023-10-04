'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function canceled() {
    const { push } = useRouter()
    push('/')
    return (
        <div>canceled</div>
    )
}

export default canceled