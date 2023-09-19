'use client'
import React, { useEffect, useState } from 'react'
import { NavigationEvents } from "@/app/Componets/NavigationEvents"
import { AiFillMoneyCollect } from 'react-icons/ai'
import EmblaCarouselThumb from '@/app/Componets/HomePage/CarouselThumb'
import { Red_Hat_Text } from 'next/font/google'
import { fetchProducts } from '@/app/myCodes/Stripe'

const fetchData = async () => {
  const data = await fetchProducts('HotTools')
  return data
}


export async function generateStaticParams() {
  const data = await fetchData()

  return (data.map(d => ({ Item: d.name.replace(/\s/g, '') })))

  // return [{ Item: 'wig1' }, { Item: 'wig2' }, { Item: 'wig3' }, { Item: 'wig4' }]
}
const font1 = Red_Hat_Text({ subsets: ['latin'] })




export default function LuxHotToolItemPage({ params }) {
  const [route, setRoute] = useState([])
  const [products, setProducts] = useState({})
  const { id } = params
  const galary = [1, 1, 1, 1]
  const price = 275
  const type = ['16in straight', '18in straight', '19in straight', '16in wavy', '18in wavy', '19in wavy']
  const slides = [
    'https://images.unsplash.com/photo-1694875464499-334d2dc113a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80',
    'https://images.unsplash.com/photo-1694901555616-d7b2b33e6406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
    'https://images.unsplash.com/photo-1692698921100-e31dc7453d4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
  ]





  return (
    <main className="flex min-h-screen flex-col ">

      <div>
        <NavigationEvents setRoute={setRoute} />
        <div className='flex md:flex-row flex-col gap-2'>
          <EmblaCarouselThumb options={{}} slides={slides} />



          <div className='h-fit md:w-1/2 p-2 pt-8'>
            <h1 className='text-3xl md:text-6xl font-bold'>The Name Of the Wig</h1>
            <span className='font-thin'>from</span>
            <span className=' font-light text-2xl'> ${price}.00</span>
            <div className='flex mt-2 gap-2'>
              <h1 className='font-thin text-sm md:text-base'>or 4 interest-free payments of <span className=' font-normal'>${price / 4}</span> with</h1>
              <AiFillMoneyCollect size={32} />
            </div>
            <div className='flex gap-2'>
              <h1 className='font-thin text-sm md:text-base'>or 4 interest-free payments of <span className=' font-normal'>${price / 4}</span> with</h1>
              <AiFillMoneyCollect size={32} />
            </div>
            <div className='center flex-wrap md:w-3/4 m-auto mt-2 gap-2'>
              {type.map(type => (<button key={type} className='h-12 m-auto w-16 bg-black-800 text-white'>{type}</button>))}

            </div>
            <div className='mt-2 '>
              <h1 className='text-center md:text-left font-light'>Quntity</h1>
              <div className=' gap-4 items-center  flex md:flex-row flex-col'>
                <input type="number" className='w-20 font-bold h-9 p-2 border text-center items-center border-slate-300' />
                <button className='h-12 w-48 bg-gray-500'>ADD TO CART</button>
              </div>
            </div>

            <div className={font1.className}>
              <h1 className='text-2xl font-extralight text-white bg-black-800'>Description</h1>
              <h1 className='p-2'>
                Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor.
                Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient
                montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis
                enim.
              </h1>
              <h1 className='mt-4 p-2'>
                Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget,
                arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium.
                Integer tincidunt. Cras dapibus. Vivamus elementum
                semper nisi. Aenean vulputate eleifend tellus.
              </h1>


            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

