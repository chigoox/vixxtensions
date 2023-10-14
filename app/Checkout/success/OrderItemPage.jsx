'use client'
import React, { useEffect, useState } from 'react'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { addToDatabase, fetchDocument, updateDatabaseItem } from '@/app/myCodes/Database'
import { useRouter } from "next/navigation"
import { useCartContext } from '@/StateManager/CartContext'
import { Card } from '@nextui-org/react'


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
            }, 1500);

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
        <div className='text-4xl center relative font-extrabold center bg-black'>
            <div className='h-96 w-[50%] bg-black flex flex-col item  justify-between'>
                <h1 className='text-white'>Order Successful!</h1>

                <div className='border h-20 w-full'>
                    <h1 className='text-2xl text-white'>items ordered</h1>

                </div>
            </div>
            <img className='object-cover w-1/2 h-full rounded' src="https://megalook.com/cdn/shop/files/1_f44b18dc-da97-4db9-af1c-00d5a04efc5d.jpg?v=1689905711" alt="" />


        </div>
    )
}

export default OrderItemPage