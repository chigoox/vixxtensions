const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { item, cart } = req.body;
};

 const redirectURL =   process.env.NODE_ENV === 'development'  ? 'http://localhost:3000' : 'https://stripe-checkout-next-js-demo.vercel.app';


const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: cart,
  mode: 'payment',
  success_url: redirectURL + '?status=success',
  cancel_url: redirectURL + '?status=cancel',
  metadata: {
    images: '',//item.image,
  },
});

res.json({ id: session.id });