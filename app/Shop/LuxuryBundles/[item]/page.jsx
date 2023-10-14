'use client'

import { fetchProducts } from '@/app/myCodes/Stripe'
import Product from '../../Componets/Product'
import { useGetItemData } from '@/app/Hooks/useGetItemData'

const fetchData = async () => {
  const data = await fetchProducts('LuxuryBundles')
  return data
}


export async function generateStaticParams() {
  const data = await fetchData()

  return (data.map(d => ({ Item: d.name.replace(/\s/g, '') })))

  // return [{ Item: 'wig1' }, { Item: 'wig2' }, { Item: 'wig3' }, { Item: 'wig4' }]
}



export default function LuxBundleItemPage({ params }) {
  console.log(params)

  const itemData = useGetItemData(fetchData)

  return (
    <div>
      <Product forThis={params} itemData={itemData} />
    </div>
  )
}

