'use client'
import React from 'react'
import ProductsList from '../Componets/ProductsList'
import ShopCategoryTitle from '../Componets/ShopCategoryTitle'
import { usePathname } from 'next/navigation'
import { categoryLinks } from '@/app/META'


function CategoryPage() {

    const path = usePathname().match(/\Shop\/(.*)/)[1]


    const validatePath = (path) => {
        let validPath = 'Page does not exist!'
        categoryLinks.forEach((value, index) => {
            if (value == path) {
                validPath = value
            }

        })

        return validPath
    }

    const categoryName = validatePath(path)

    return (
        <div className=' relative min-h-screen flex-col '>


            <ShopCategoryTitle title={categoryName} />
            <ProductsList category={categoryName} />

        </div>
    )
}

export default CategoryPage
