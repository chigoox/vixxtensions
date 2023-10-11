import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";



export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let {productData, PriceData} = data

    const {productName, productDesc, productMeta, productPrice, productImg, productFeat} = productData
    
    
    const product = await stripe.products.create({
         name: productName, //string
         description: productDesc,  //string
         metadata: productMeta, //object
        images: productImg, //array
        features: productFeat, //array
    });

    PriceData.forEach(async ({priceName, priceMeta, priceAmount}) => {
        await stripe.prices.create({
        product: product.id,    
        metadata: priceMeta,
        nickname: priceName,
        currency: 'USD',
        unit_amount: priceAmount * 100,
        })
    })

    

    return NextResponse.json(product)
}



/*  line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ], */