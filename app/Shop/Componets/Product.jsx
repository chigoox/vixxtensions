'use client'

import React, { useEffect, useState } from 'react'
import { AiFillMoneyCollect } from 'react-icons/ai'
import EmblaCarouselThumb from '@/app/Componets/HomePage/CarouselThumb'
import { Red_Hat_Text } from 'next/font/google'
import { fetchPricesFor } from '@/app/myCodes/Stripe'
import ItemQTYButton from '@/app/Shop/Componets/ItemQTYButton'
import { Select, SelectItem, Skeleton } from "@nextui-org/react";
import { useCartContext } from '@/StateManager/CartContext'

const font1 = Red_Hat_Text({ subsets: ['latin'] })

const fetchData = async (name) => {
    const data = await fetchPricesFor(name)
    return data
}

const Product = ({ forThis, itemData }) => {
    const { Item } = forThis
    const nameOfRouteWithOutSpace = Item
    const { state, dispatch } = useCartContext()



    const thisProduct = itemData?.map(item => {
        if (item.name.replace(/\s/g, '') == nameOfRouteWithOutSpace) return item
    }).filter(Boolean)[0]

    const price = Number(thisProduct?.metadata?.price.replace('$', ''))
    const name = thisProduct?.name
    const slides = thisProduct?.images
    const desc = thisProduct?.description
    const feats = thisProduct?.features

    const [prices, setPrices] = useState({})
    const [itemToCheckOut, setItemToCheckOut] = useState({ priceID: 0, Qty: 0, images: [] })
    const addToCart = () => {
        if (itemToCheckOut.priceID && itemToCheckOut.Qty > 0) dispatch({ type: "ADD_TO_CART", value: itemToCheckOut })
    }

    const variants = Object.values(prices).map(i => {
        return i
    })
    useEffect(() => {
        const getData = async () => {
            setPrices(await fetchData(Item))
        }
        getData()


    }, [])

    useEffect(() => {
        setItemToCheckOut(prev => ({ ...prev, price: price, name: name, images: slides }))
    }, [thisProduct])




    return (
        <main className="flex min-h-screen flex-col ">

            <div>

                <div className='flex md:flex-row flex-col gap-2'>
                    <Skeleton className='h-auto' isLoaded={thisProduct}>
                        <EmblaCarouselThumb options={{}} slides={slides} />
                    </Skeleton>



                    <div className='h-fit md:w-1/2 p-2 pt-8'>
                        <h1 className='text-3xl md:text-6xl font-bold'>{name}</h1>
                        <span className='font-thin'>from</span>
                        <span className=' font-light text-2xl'><Skeleton isLoaded={price} className='w-fit'>${price}.00</Skeleton></span>
                        <div className='flex mt-2 gap-2'>
                            <h1 className='font-thin text-sm md:text-base'>or 4 interest-free payments of <span className=' font-normal'>${price / 4}</span> with</h1>
                            <AiFillMoneyCollect size={32} />
                        </div>
                        <div className='flex gap-2'>
                            <h1 className='font-thin text-sm md:text-base'>or 4 interest-free payments of <span className=' font-normal'>${price / 4}</span> with</h1>
                            <AiFillMoneyCollect size={32} />
                        </div>
                        <div className='center flex-wrap md:w-3/4 m-auto mt-2 gap-2'>
                            {/* {prices && variants.map(variant => (<button key={variant.id} className='h-12 m-auto w-32 bg-black-800 text-white'>{variant.nickname}</button>))} */}
                            <Select
                                onChange={({ target }) => { setItemToCheckOut(prev => ({ ...prev, priceID: target.value.split(',', 2)[0], variant: target.value.split(',', 2)[1] })) }}
                                labelPlacement={'outside'}
                                label="Select Variant"
                                className="max-w-xs my-8"
                            >
                                {variants.map((variant) => (
                                    <SelectItem key={[variant.id, variant.nickname]} name={variant.nickname}>
                                        {`${variant.nickname} - ${variant.metadata.price}`}
                                    </SelectItem>
                                ))}
                            </Select>

                        </div>
                        <div className='mt-2 '>
                            <h1 className='text-center md:text-left font-light'>Quntity</h1>
                            <div className=' gap-4 items-center  flex md:flex-row flex-col'>
                                <ItemQTYButton state={itemToCheckOut} setState={setItemToCheckOut} />
                                <button onClick={addToCart} className='h-12 w-48 bg-gray-500'>ADD TO CART</button>
                            </div>
                        </div>

                        <div className={font1.className}>
                            <h1 className='text-2xl font-extralight text-white bg-black-800'>Description</h1>
                            <Skeleton className='w-fit' isLoaded={desc}>
                                <h1>{desc}</h1>
                                <h1>{feats}</h1>
                            </Skeleton>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Product



/*  const slides = [
     'https://images.unsplash.com/photo-1694875464499-334d2dc113a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80',
     'https://images.unsplash.com/photo-1694901555616-d7b2b33e6406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
     'https://images.unsplash.com/photo-1692698921100-e31dc7453d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
     'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
 ] */


