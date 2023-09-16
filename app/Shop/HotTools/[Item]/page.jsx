'use client'
import React, { useState } from 'react'
//import { useRouter } from 'next/navigation'

import { NavigationEvents } from "@/app/Componets/NavigationEvents"



export function generateStaticParams() {
  return [{ Item: 'wig1' }, { Item: 'wig2' }, { Item: 'wig3' }, { Item: 'wig4' }]
}

export default function LuxHotToolItemPage({ params }) {
  const [route, setRoute] = useState([])
  console.log(route)

  const { id } = params
  console.log(id)

  //const router = useRouter();
  //const ShopItemData = router.query;

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavigationEvents setRoute={setRoute} />
      <div className='flex md:flex-row flex-col gap-2'>
        <div className='border h-12 w-1/2'>

        </div>
        <div className='border h-12 w-1/2'>

        </div>

      </div>

    </main>
  )
}

