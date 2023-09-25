import { bestseller } from "@/app/META"
import { checkout } from "@/app/myCodes/Stripe"
import Image from "next/image"
import { useCartContext } from "@/StateManager/CartContext";
import ItemQTYButton from "../../Shop/Componets/ItemQTYButton";


function Cart({ showCart }) {

    const { state, dispatch } = useCartContext()
    const { lineItems } = state
    const checkOutItems = Object.values(lineItems).map(item => ({ price: item.priceId, quantity: item.Qty }))
    const RemoveFromCart = (itemRemove) => {
        dispatch({ type: "REMOVE_FROM_CART", value: itemRemove })
    }

    return (
        <div className={`fixed z-[99999] overflow-hidden md:top-10  trans right-0 ${showCart ? 'w-[50vw] p-2' : 'w-[0] P-0'} h-[100vh] bg-black`}>
            <h1 className="text-white text-center text-2xl font-bold">Cart</h1>
            <div className=" h-[80%] mb-4 m-auto  hidescroll overflow-y-scroll py-2 start-col gap-1">
                {Object.values(lineItems).map(item => {
                    return (
                        <div key={item.priceId} className="h-52 md:h-48  flex-shrink-0 border-b-2 text-white relative">
                            <div className="evenly gap-2 relative h-1/2 top-4 ">
                                <div className={'w-1/2 h-full  rounded-3xl relative overflow-hidden'}>
                                    <Image fill src={item.images ? item.images[0] : ''} alt="" />

                                </div>
                                <div className="p-1  w-1/2">
                                    <h1 className="md:text-lg">{item.name?.substr(0, 20)}{item?.name?.length > 20 ? '...' : ''}</h1>
                                    <h1 className="font-light text-xs h-4 overflow-hidden">{item?.variant}</h1>
                                    <h1 className="font-bold">{String(item?.price).includes('$') ? '' : '$'}{item?.price}</h1>
                                </div>


                            </div>
                            <button onClick={() => { RemoveFromCart(item) }} className="h-6 rounded-t-md  w-full center bottom-0  absolute">
                                <h1 className="font-semibold w-24 w rounded-t  text-red-500 bg-gray-600">X</h1>
                            </button>
                            <ItemQTYButton product={item} />
                        </div>
                    )
                })}

            </div>

            <div className="center">
                <button onClick={(e) => { checkout(e, checkOutItems) }} className="w-3/4 h-12 bg-white rounded hover:text-lg trans">
                    <h1>CheckOut</h1>
                </button>

            </div>

        </div>
    )
}

export default Cart