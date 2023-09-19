import ShopItem from '@/app/Componets/Shop/ShopItem';
import Stripe from 'stripe'

export const Products = async ({ category }) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.products.search({
        limit: 25,
        query: `active:\'true\' AND metadata[\'category\']:\'${category}\'`,
    });
    return (
        <div className=''>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4'>
                {prices.data.map(product => {
                    return (
                        <ShopItem key={product} shopItems={product} />

                    )
                })}
            </div>
        </div>
    )
}

export default Products