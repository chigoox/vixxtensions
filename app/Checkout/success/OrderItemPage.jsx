'use client'
import React, { useEffect, useState } from 'react'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { addToDatabase, fetchDocument } from '@/app/myCodes/Database'
import { getDate } from 'date-fns'


function OrderItemPage({ orderID }) {
    const [data, setData] = useState({})
    const getData = async () => {
        const { ShippingInfo } = await fetchDocument('User', uid)
        const { cart } = await fetchDocument('User', uid)
        console.log(ShippingInfo, cart)
        setData({ shippingInfo: ShippingInfo, cart: cart })

    }
    const { uid } = useAUTHListener()
    console.log(uid)
    const ordered = () => {
        addToDatabase('User', uid, 'orders', { [`Vi-${orderID}`]: { shippingInfo: data?.shipping, order: data?.cart } })
        addToDatabase('Admin', 'Manage', 'orders', { [`Vi-${orderID}`]: { shippingInfo: data?.shipping, order: data?.cart } })

    }


    useEffect(() => {
        const run = async () => {
            await getData().then(() => {
                ordered()
            })

        }
        run()



    }, [])


    return (
        <div>OrderItemPage</div>
    )
}

export default OrderItemPage