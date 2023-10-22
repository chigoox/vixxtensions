'use client'
import React from 'react'
import ProductsList from './Componets/ProductsList'
import Link from 'next/link'
import { category } from '../META'

const ShopSections = ({ category, name }) => {
    return (
        <div className='text-3xl overflow-x-scroll '>
            <Link href={`/Shop/${category}`} className='center relative font-extralight top-12 underline'>{name}</Link>
            <ProductsList category={category} limit={4} list />
        </div>
    )

}


function Shop() {


    return (
        <div className='flex min-h-screen flex-col '>
            {category.map(category => {
                return (

                    <ShopSections category={category.replace(/\s/g, '')} name={category} />
                )
            })}



        </div>
    )
}


export default Shop