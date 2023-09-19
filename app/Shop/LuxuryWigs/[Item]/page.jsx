import { fetchProducts } from '@/app/myCodes/Stripe'
import Product from '../../Componets/Product'

const fetchData = async () => {
  const data = await fetchProducts('LuxuryWigs')
  return data
}


export async function generateStaticParams() {
  const data = await fetchData()

  return (data.map(d => ({ Item: d.name.replace(/\s/g, '') })))

  // return [{ Item: 'wig1' }, { Item: 'wig2' }, { Item: 'wig3' }, { Item: 'wig4' }]
}

export default function LuxWigItemPage({ param }) {

  return (
    <div className="flex min-h-screen flex-col items-center justify-evenly">

      <Product forThis={param} />


    </div>
  )
}

