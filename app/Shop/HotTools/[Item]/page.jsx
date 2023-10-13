'use client'
import { fetchProducts } from '@/app/myCodes/Stripe'
import Product from '../../Componets/Product'

const fetchData = async () => {
  const data = await fetchProducts('HotTools')
  return data
}


export async function generateStaticParams() {
  let data;
  if (data) {

  } else {
    data = await fetchData()
  }

  return (data.map(d => ({ Item: d.name.replace(/\s/g, '') })))

  //return [{ Item: 'Vihair480degreesFlatIron' }, { Item: 'wig2' }, { Item: 'wig3' }, { Item: 'wig4' }]
}




export default function LuxHotToolItemPage({ params }) {

  return (
    <div>
      <Product forThis={params} category={'HotTools'} />
    </div>
  )
}

