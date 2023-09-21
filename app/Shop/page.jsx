'use client'
import React from 'react'

import Product from './Componets/Product'
import { useGetItemData } from './Hooks/useGetItemData'

function Shop({ params }) {
    const itemData = useGetItemData('Hot Tools')

    return (
        <div className='flex min-h-screen flex-col border'>

            shop
        </div>
    )
}


export default Shop