'use client'
import Product from '../../Componets/Product'
import { usePathname } from 'next/navigation'



export default function LuxBundleItemPage({ }) {

  const path = usePathname().replace(`/Shop/LuxuryWigsOLD/`, '')

  const fetchData = async () => {
    const data = await fetchProducts('LuxuryWigs')
    return data
  }




  const params = { Item: path }

  return (
    <div>
      < Product forThis={params} category={'LuxuryWigs'} />
    </div>
  )

}




