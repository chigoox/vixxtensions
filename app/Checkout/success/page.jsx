
import app, { AUTH } from '@/Firebase'
import { addToDatabase, fetchDocument } from '@/app/myCodes/Database'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
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