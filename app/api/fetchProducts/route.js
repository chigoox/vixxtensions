import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  let data = await request.json();
const {category} = data
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.products.search({
        limit: 25,
        query: `active:\'true\' AND metadata[\'category\']:\'${category}\'`,
    });

    return NextResponse.json(prices.data.reverse())
}

