import ShopItem from '@/app/Shop/Componets/ShopItem';
import Stripe from 'stripe'

export const ProductsList = async ({ category, limit, list }) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.products.search({
        limit: limit ? limit : 25,
        query: `active:\'true\' AND metadata[\'category\']:\'${category}\'`,
    });
    return (
        <div className='mt-12'>
            <div className={` ${list ? 'flex overflow-x-scroll gap-2 p-2 justify-start items-start  hidescroll border-black   w-full' : 'grid grid-flow-row grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '} w-full m-auto`}>
                {prices.data.map(product => {
                    return (
                        <ShopItem key={product} location={category} shopItems={product} />

                    )
                })}
            </div>
        </div>
    )
}

export default ProductsList