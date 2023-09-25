import { bestseller } from "@/app/META"
import { checkout } from "@/app/myCodes/Stripe"
import Image from "next/image"
import { useCartContext } from "@/StateManager/CartContext";
import ItemQTYButton from "./Componets/ItemQTYButton";


function Cart({ showCart }) {

    const { state, dispatch } = useCartContext()
    const { lineItems } = state


    return (
        <div className={`fixed z-[99999] overflow-hidden md:top-10  trans right-0 ${showCart ? 'w-[50vw] p-2' : 'w-[0] P-0'} h-[100vh] bg-black`}>
            <h1 className="text-white text-center text-2xl font-bold">Cart</h1>
            <div className=" h-[80%] mb-4 m-auto  hidescroll overflow-y-scroll py-2 start-col gap-1">
                {lineItems.map(item => {
                    return (
                        <div className="h-40  flex-shrink-0 border-b-2 text-white">
                            <div className="evenly relative h-1/2 overflow-hidden ">
                                <Image height={0} width={0} src={item.images[0]} className={'w-1/2 h-full  rounded-2xl'} alt="" />
                                <div className="p-1">
                                    <h1 className="text-lg">{item.name}</h1>
                                    <h1 className="font-light text-xs">item variant</h1>
                                    <h1 className="font-bold">{String(item?.metadata?.salePrice).includes('$') ? '' : '$'}{item.metadata.salePrice}</h1>
                                </div>


                            </div>
                            <ItemQTYButton />
                        </div>
                    )
                })}

            </div>

            <div className="center">
                <button onClick={(e) => { checkout(e, lineItems) }} className="w-3/4 h-12 bg-white rounded hover:text-lg trans">
                    <h1>CheckOut</h1>
                </button>

            </div>

        </div>
    )
}

export default Cart