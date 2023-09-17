'use client'
import React, { useState } from 'react'
//import { useRouter } from 'next/navigation'

import { NavigationEvents } from "@/app/Componets/NavigationEvents"
import { AiFillMoneyCollect } from 'react-icons/ai'



export function generateStaticParams() {
  return [{ Item: 'wig1' }, { Item: 'wig2' }, { Item: 'wig3' }, { Item: 'wig4' }]
}

export default function LuxHotToolItemPage({ params }) {
  const [route, setRoute] = useState([])
  console.log(route)

  const { id } = params
  console.log(id)

  const galary = [1, 1, 1, 1]
  const price = 275
  const type = ['16in straight', '18in straight', '19in straight', '16in wavy', '18in wavy', '19in wavy']

  //const router = useRouter();
  //const ShopItemData = router.query;

  return (
    <main className="flex min-h-screen flex-col ">
      <NavigationEvents setRoute={setRoute} />
      <div className='flex md:flex-row flex-col gap-2'>
        <div className='border md:h-[40rem] md:w-1/2'>
          <div className='border-black border-2 h-96 w-96 m-auto'>
            <h1>pictures go here</h1>
          </div>
          <div className='m-auto center gap-2 w-96 mt-2'>
            {galary.map(item => (<div className='h-24 w-24 border-black border m-auto'>
              <h1>pictures go here</h1>
            </div>))}
          </div>

        </div>


        <div className='border h-fit md:w-1/2 p-2'>
          <h1 className='text-2xl md:text-6xl font-bold'>The Name Of the Wig</h1>
          <span className='font-thin'>from</span>
          <span className=' font-light'> ${price}.00</span>
          <div className='center gap-2'>
            <h1>or 4 interest-free payments of $ {price / 4} with</h1>
            <AiFillMoneyCollect size={32} />
          </div>
          <div className='center gap-2'>
            <h1>or 4 interest-free payments of $ {price / 4} with</h1>
            <AiFillMoneyCollect size={32} />
          </div>
          <div className='center flex-wrap md:w-3/4 m-auto mt-2 gap-2'>
            {type.map(type => (<button className='h-12 m-auto w-16 bg-black-800 text-white'>{type}</button>))}

          </div>
          <div className='mt-2 '>
            <div className='border-black border gap-4 items-center h-12 flex md:flex-row flex-col'>
              <input type="number" className='w-20 font-bold h-9 p-2 border border-slate-300' />
              <button className='h-12 w-48 bg-gray-500'>ADD TO CART</button>
            </div>
          </div>
        </div>

      </div>


    </main>
  )
}

