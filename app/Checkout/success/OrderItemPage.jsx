'use client'
import React, { useEffect, useState } from 'react'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { addToDatabase, fetchDocument, updateDatabaseItem } from '@/app/myCodes/Database'
import { useRouter } from "next/navigation"
import { useCartContext } from '@/StateManager/CartContext'


function OrderItemPage({ orderID }) {
    const { state, dispatch } = useCartContext()
    const [data, setData] = useState({})
    const { push } = useRouter()
    const user = useAUTHListener()
    const UID = user.uid ? user.uid : user.gid


    const getData = async () => {

        const orderInfo = UID ? await fetchDocument('User', UID) : null
        if (orderInfo) setData({ shipping: orderInfo?.ShippingInfo, cart: orderInfo?.cart ? orderInfo?.cart : state.lineItems })

    }
    const addArray = (array) => {
        const mainArray = Array.isArray(array) ? array : Object.values(array ? array : {})
        const sum = mainArray.reduce((partialSum, a) => partialSum + a, 0)
        return sum
    }
    const [arrayQTY, setArrayQTY] = useState()
    const [arrayPrice, setArrayPrice] = useState()
    const [arrayImages, setArrayImages] = useState()
    const getArrayToAddQTY = () => {
        Object.values(data?.cart ? data?.cart : {}).map((order) => {
            const total = Object.values(order.lineItems ? order.lineItems : {}).map((orderInfo) => {
                return orderInfo.Qty
            })
            setArrayQTY(total)

        })
    }
    const getArrayToAddPrice = () => {
        Object.values(data?.cart ? data?.cart : {}).map((order) => {
            const total = Object.values(order.lineItems ? order.lineItems : {}).map((orderInfo) => {
                console.log(orderInfo.price)
                return orderInfo.price
            })
            setArrayPrice(total)

        })
    }

    const getArrayToAddImages = () => {
        Object.values(data?.cart ? data?.cart : {}).map((order) => {
            const total = Object.values(order.lineItems ? order.lineItems : {}).map((orderInfo) => {
                console.log(orderInfo.price)
                return orderInfo.images[0]
            })
            setArrayImages(total)

        })
    }

    if (!arrayQTY) getArrayToAddQTY()
    if (!arrayPrice) getArrayToAddPrice()
    if (!arrayImages) getArrayToAddImages()
    const orderQTY = addArray(arrayQTY)
    const orderPrice = addArray(arrayPrice)
    const ordered = async () => {
        await addToDatabase('User', UID, 'orders', {
            [`Vi-${orderID}`]: {
                shippingInfo: data?.shipping ? data?.shipping : '',
                order: data?.cart.state, id: `Vi-${orderID}`,
                qty: orderQTY,
                total: orderPrice,
                images: arrayImages
            }
        })



        await addToDatabase('Admin', 'Manage', 'orders', {
            [`Vi-${orderID}`]: {
                shippingInfo: data?.shipping ? data?.shipping : '',
                order: data?.cart.state,
                id: `Vi-${orderID}`,
                qty: orderQTY,
                total: orderPrice,
                images: arrayImages
            }
        })

        const { orders } = UID ? await fetchDocument('User', UID) : { orders: {} }
        if (Object.keys(orders).includes(`Vi-${orderID}`)) {
            setTimeout(() => {
                dispatch({ type: "EMPTY_CART", value: null })
            }, 2000);
            push('/Shop')
            updateDatabaseItem('Admin', 'Orders', 'orderID', orderID + 1)
        }

    }


    const run = async () => {
        await getData()
    }
    run()
    useEffect(() => {
        if (data.shipping && data.cart && UID) ordered().then((d) => {
            console.log(d)
        }).catch((e) => {
            console.log(e.message)
        })


    }, [data])


    return (
        <div>OrderItemPage</div>
    )
}

export default OrderItemPage