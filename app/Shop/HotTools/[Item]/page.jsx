'use client'
import Product from '../../Componets/Product'
import { usePathname } from 'next/navigation'



export default function LuxBundleItemPage({ }) {

  const path = usePathname().replace(`/Shop/HotTools/`, '')

  const fetchData = async () => {
    const data = await fetchProducts('HotTools')
    return data
  }




  const params = { Item: path }

  return (
    <div>
      < Product forThis={params} category={'HotTools'} />
    </div>
  )

}




