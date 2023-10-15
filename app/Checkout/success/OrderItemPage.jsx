'use client'
import React, { useEffect, useState } from 'react'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import { addToDatabase, fetchDocument, updateDatabaseItem } from '@/app/myCodes/Database'
import { useRouter } from "next/navigation"
import { useCartContext } from '@/StateManager/CartContext'
import { Button, Card } from '@nextui-org/react'
import IMG from '@/public/Images/luxlace.JPG'


function OrderItemPage({ orderID }) {
    const { state, dispatch } = useCartContext()
    const [data, setData] = useState()
    const { push } = useRouter()
    const user = useAUTHListener()
    const UID = user.uid ? user.uid : user.gid
    const [showExitButton, setShowExitButton] = useState(false)
    const [currentOrder, setCurrentOrder] = useState({})


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
            console.log(orderID)
            setTimeout(() => {
                setShowExitButton(true)
                dispatch({ type: "EMPTY_CART", value: null })
                setTimeout(push('/Shop'), 1000)
            }, 1500);

            updateDatabaseItem('Admin', 'Orders', 'orderID', orderID + 1)
        }

    }


    const run = async () => {
        await getData()
    }


    if (!data) run()

    const orderMap = Object.values(data?.cart?.state?.lineItems ? data?.cart?.state?.lineItems : {})

    useEffect(() => {
        if (data?.shipping && data?.cart && UID) ordered().then((d) => {
            console.log(d)
        }).catch((e) => {
            console.log(e.message)
        })


    }, [data])

    console.log(data)


    return (
        <div className=' center h-[40rem] relative text-white flex md:flex-row flex-col md:gap-0 gap-24 bg-black'>
            <div className='h-96 md:w-[50%] w-[90%] bg-black flex flex-col relative'>
                <h1 className='text-4xl text-white font-extrabold text-center'>Thank you for ordering</h1>
                <h1 className='text-sm font-light text-center text-white'>an email confirmation has been sent to {data?.shipping?.email || user?.email}</h1>

                <div className='h-20 w-full mt-10'>
                    <h1 className='text-2xl text-white'>Items ordered</h1>

                    <div className='grid grid-cols-2 p-2 h-32 border-y overflow-y-scroll hidescroll  md:grid-cols-3 gap-1 w-full'>
                        {orderMap.map((item) => {
                            return (
                                <div>
                                    <div className='bg-white m-auto text-black center border-2 w-12 h-12 overflow-hidden rounded-full relative'>
                                        <h1 className='absolute h-full w-full text-2xl center text-white bg-opacity-50 bg-black'>{item.Qty}</h1>
                                        <img src={item.images[0]} alt="" />
                                    </div>
                                    <h1 className='bg-opacity-25 text-xs text-center'>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                    <div className='center-col p-2'>
                        <h1>Total: {data?.cart?.state?.total}</h1>
                        {showExitButton &&
                            <Button onPress={() => { push('/Shop') }}>
                                Continue to store
                            </Button>}

                    </div>



                </div>
            </div>
            <div className='h-40 overflow-hidden'>
                <img className='object-cover rounded' src={IMG} alt="" />

            </div>

        </div>
    )
}

export default OrderItemPage