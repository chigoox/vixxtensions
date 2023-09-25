import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  let data = await request.json();
const {name} = data
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.prices.search({
        limit: 25,
        query: `active:\'true\' AND metadata[\'for\']:\'${name}\'`,
    });
    const pricesall = await stripe.prices.list({
        limit: 25,
    });
console.log(pricesall.data)
    return NextResponse.json(prices.data.reverse())
}

