import { fetchProducts } from '@/app/myCodes/Stripe'

const fetchData = async () => {
  const data = await fetchProducts('LuxuryBundles')
  return data
}


export async function generateStaticParams() {
  const data = await fetchData()

  return (data.map(d => ({ Item: d.name.replace(/\s/g, '') })))

  // return [{ Item: 'wig1' }, { Item: 'wig2' }, { Item: 'wig3' }, { Item: 'wig4' }]
}
export default function LuxBundleItemPage() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">




    </main>
  )
}

