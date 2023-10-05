'use client'
import React, { useEffect, useState } from 'react'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { addToDatabase, fetchDocument, updateDatabaseItem } from '@/app/myCodes/Database'
import { getDate } from 'date-fns'
import { useRouter } from "next/navigation"
import { useCartContext } from '@/StateManager/CartContext'


function OrderItemPage({ orderID }) {
    const { state, dispatch } = useCartContext()
    const [data, setData] = useState({})
    const { push } = useRouter()

    const getData = async () => {
        const UID = !uid ? 'No User' : uid
        const { ShippingInfo } = await fetchDocument('User', uid)
        const { cart } = await fetchDocument('User', UID)
        setData({ shipping: ShippingInfo, cart: cart })
        dispatch({ type: "EMPTY_CART", value: null })

    }
    const { uid } = useAUTHListener()
    const ordered = async () => {

        await addToDatabase('User', uid, 'orders', { [`Vi-${orderID}`]: { shippingInfo: data?.shipping ? data?.shipping : '', order: data?.cart ? data?.cart : '' } })
        await addToDatabase('Admin', 'Manage', 'orders', { [`Vi-${orderID}`]: { shippingInfo: data?.shipping ? data?.shipping : '', order: data?.cart ? data?.cart : '' } })
        const { orders } = await fetchDocument('User', uid)
        if (Object.keys(orders).includes(`Vi-${orderID}`)) {
            push('/Shop')
            updateDatabaseItem('Admin', 'Orders', 'orderID', orderID + 1)
        }

    }


    const run = async () => {
        await getData()


    }
    run()
    useEffect(() => {

        if (data.shipping && data.cart) ordered()


    }, [data])


    return (
        <div>OrderItemPage</div>
    )
}

export default OrderItemPage