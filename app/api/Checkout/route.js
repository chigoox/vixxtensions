import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { siteName } from "@/app/META";
import { isDev } from "@/app/myCodes/Util";



export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let {priceId} = data
    const session = await stripe.checkout.sessions.create({
        line_items: [{price:priceId, quantity: 1}],
      mode: 'payment',
      success_url: `http://${ !isDev() ? siteName + '.netlify.app':'localhost:3000'}/success`,
      cancel_url: `http://${ !isDev() ? siteName + '.netlify.app':'localhost:3000'}/canceled`,
    })

    return NextResponse.json(session.url)
}



/*  line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ], */