'use client'
import React, { useEffect, useState } from 'react'
import ProductsList from './Componets/ProductsList'
import Link from 'next/link'
import { category } from '../META'
import { fetchProducts } from '../myCodes/Stripe'

const ShopSections = ({ category, name }) => {
    return (
        <div className='text-3xl overflow-x-scroll '>
            <Link href={`/Shop/${category}`} className='center relative font-extralight top-12 underline'>
                {name}
            </Link>
            <ProductsList category={category} limit={4} list />
        </div>
    )

}

const getData = async (set) => {
    category.forEach(async (category) => {
        const data = await fetchProducts(category.replace(/\s/g, ''))
        if (data[0]) set(o => ([...o, category]))

    });
}



function Shop() {
    const [categoryWithProducts, setCategoryWithProducts] = useState([])

    const filteredCategory = [...new Set(categoryWithProducts)]

    console.log(filteredCategory)

    useEffect(() => {
        (async () => {
            await getData(setCategoryWithProducts)
        })()

    }, [])



    return (
        <div className='flex min-h-screen flex-col '>
            {filteredCategory.map(category => {
                return (

                    <ShopSections key={category} category={category.replace(/\s/g, '')} name={category} />
                )
            })}



        </div>
    )
}


export default Shop