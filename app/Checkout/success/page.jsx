
import { fetchDocument } from '@/app/myCodes/Database'
import React from 'react'
import OrderItemPage from './OrderItemPage'

async function success() {

    const { orderID } = await fetchDocument('Admin', 'Orders')





    return (
        <div>
            <OrderItemPage orderID={orderID} />
        </div>
    )
}

export default success