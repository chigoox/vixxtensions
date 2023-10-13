import React from 'react'
import ProductsList from './Componets/ProductsList'
import Link from 'next/link'
import { revalidatePath } from 'next/cache'

const ShopSections = ({ category, name }) => {
    return (
        <div className='text-3xl overflow-x-scroll '>
            <Link href={`/Shop/${category}`} className='center relative font-extralight top-12 underline'>{name}</Link>
            <ProductsList category={category} limit={4} list />
        </div>
    )

}


function Shop({ params }) {

    revalidatePath('/')

    return (
        <div className='flex min-h-screen flex-col '>


            <ShopSections category={'LuxuryBundles'} name={'Luxury Bundles'} />
            <ShopSections category={'LuxuryLace'} name={'Luxury Lace'} />
            <ShopSections category={'LuxuryWigs'} name={'Luxury Wigs'} />
            <ShopSections category={'HotTools'} name={'Hot Tools'} />

        </div>
    )
}


export default Shop