import React from 'react'
import ProductsList from '../Componets/ProductsList'
import ShopCategoryTitle from '../Componets/ShopCategoryTitle'
import { revalidatePath } from 'next/cache'

function LuxWigs() {
    revalidatePath('/')

    return (
        <div className=' relative min-h-screen flex-col '>
            <ShopCategoryTitle title={'Luxury Wigs'} />
            <ProductsList category={'LuxuryWigs'} />

        </div>
    )
}

export default LuxWigs