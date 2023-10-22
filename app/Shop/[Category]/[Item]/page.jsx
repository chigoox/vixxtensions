'use client'
import { usePathname } from 'next/navigation'
import Product from '../../Componets/Product'



export default function ItemPage({ }) {

    const productCategory = usePathname().replace(`/Shop/`, '').replace(/\/(.*)/, '')
    const productPathName = usePathname().replace(`/Shop/${productCategory}/`, '')
    console.log(productPathName, productCategory)





    const fetchData = async () => {
        const data = await fetchProducts('HotTools')
        return data
    }






    return (
        <div>
            < Product product={productPathName} category={productCategory} />
        </div>
    )

}




