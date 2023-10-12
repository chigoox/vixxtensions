import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";



export async function POST (request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let data = await request.json();
    let {productData, PriceData} = data
    
    const {productName, productDesc,  price, img, productFeat, isNew, isBestSelling, category} = productData
    //const priceINFO = Object.values(PriceData)
    
    console.log(productData)
    
    
    const product = await stripe.products.create({
         name: productName, //string
         description: productDesc,  //string
         metadata: {
            category:category,
            price:price,
            isnew:isNew,
            isBestSelling:isBestSelling,
         }, //object
        images: img, //array
        features: productFeat, //array
    });

    priceINFO.forEach(async (data, index) => {

        if (index !=0){
            const {priceName, amount} = data
            await stripe.prices.create({
        product: product.id,    
        metadata: {
            price:amount,
            for:data.for

        },
        nickname: priceName,
        currency: 'USD',
        unit_amount: priceAmount * 100,
        })
        }
    })

    

    return NextResponse.json(product)
}



/*  line_items: [
            {
                price: priceId,
                quantity: 1
            }
        ], */