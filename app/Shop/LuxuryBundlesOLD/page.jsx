import React from 'react'
import ProductsList from '../Componets/ProductsList'
import ShopCategoryTitle from '../Componets/ShopCategoryTitle'
import { revalidatePath } from 'next/cache'

function LuxBundles() {
    revalidatePath('/')

    return (
        <div className=' relative min-h-screen flex-col '>


            <ShopCategoryTitle title={'Luxury Bundles'} />
            <ProductsList category={'LuxuryBundles'} />

        </div>
    )
}

export default LuxBundles