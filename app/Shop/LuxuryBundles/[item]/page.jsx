'use client'
import Product from '../../Componets/Product'
import { usePathname } from 'next/navigation'



export default function LuxBundleItemPage() {

  const path = usePathname().replace(`/Shop/LuxuryBundles/`, '')



  //x


  const params = { Item: path }

  return (
    <div>
      < Product forThis={params} category={'LuxuryBundles'} />
    </div>
  )

}




