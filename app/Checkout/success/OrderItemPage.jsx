'use client'
import React, { useEffect, useState } from 'react'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { addToDatabase, fetchDocument } from '@/app/myCodes/Database'
import { getDate } from 'date-fns'
import { useRouter } from "next/navigation"


function OrderItemPage({ orderID }) {
    const [data, setData] = useState({})
    const { push } = useRouter()

    const getData = async () => {
        const { ShippingInfo } = await fetchDocument('User', uid)
        const { cart } = await fetchDocument('User', uid)
        console.log(ShippingInfo, cart)
        setData({ shipping: ShippingInfo, cart: cart })

    }
    const { uid } = useAUTHListener()
    const ordered = async () => {
        console.log(uid)
        try {
            await addToDatabase('User', uid, 'orders', { [`Vi-${orderID}`]: { shippingInfo: data?.shipping ? data?.shipping : '', order: data?.cart ? data?.cart : '' } })
            await addToDatabase('Admin', 'Manage', 'orders', { [`Vi-${orderID}`]: { shippingInfo: data?.shipping ? data?.shipping : '', order: data?.cart ? data?.cart : '' } })
            const { orders } = await fetchDocument('User', uid)
            if (orders) push('/')
        } catch (error) {
            console.log(error.message)
        }
    }


    const run = async () => {
        await getData().then(() => {
            setTimeout(() => {
                ordered()
            }, 15000);

        })


    }
    run()

    return (
        <div>OrderItemPage</div>
    )
}

export default OrderItemPage