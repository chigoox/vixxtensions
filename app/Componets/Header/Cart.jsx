import { bestseller } from "@/app/META"
import { checkout } from "@/app/myCodes/Stripe"
import Image from "next/image"
import { useCartContext } from "@/StateManager/CartContext";
import ItemQTYButton from "../../Shop/Componets/ItemQTYButton";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import { useAUTHListener } from "@/StateManager/AUTHListener";
import { fetchDocument } from "@/app/myCodes/Database";
import { useState } from "react";
import ShippinInfo from "../User/ShippinInfo";
import { Card } from "@nextui-org/react";


function Cart({ showCart }) {

    const { state, dispatch } = useCartContext()
    const { lineItems } = state
    const user = useAUTHListener()
    const [event, setEvent] = useState()

    const checkOutItems = Object.values(lineItems).map(item => ({ price: item.priceID, quantity: item.Qty }))
    const RemoveFromCart = (itemRemove) => {
        dispatch({ type: "REMOVE_FROM_CART", value: itemRemove })
    }

    const [getShippingWindow, setGetShippingWindow] = useState(false)
    const toggleGetShippingInfo = () => {

    }

    const getShippingInfo = (shippinginfo) => {
        checkout(event, checkOutItems)
    }

    const checkShippingInfo = async (_event) => {
        await fetchDocument('User', user?.uid ? user?.uid : user?.gid)
            .then((data) => {
                if (data?.ShippingInfo) {
                    checkout(_event, checkOutItems)
                } else {
                    setEvent(_event)
                    setGetShippingWindow(true)


                }
            })
    }

    return (
        <div className={`fixed z-[99999]  md:top-8 top-0 trans right-0 ${showCart ? 'w-[50vw] p-2' : 'w-[0] P-0'} h-[100vh] bg-black`}>
            {getShippingWindow && <div className="absolute w-auto z-50 -left-40 ">
                <ShippinInfo user={user} forCheckOut={getShippingInfo} />
            </div>}
            <div className="center gap-2">
                <h1 className="text-white text-center text-2xl font-bold">Cart</h1>
                <button onClick={() => { dispatch({ type: "EMPTY_CART", value: null }) }}><Trash2Icon color="red" /></button>

            </div>
            <div className=" h-[80%] mb-4 m-auto  hidescroll overflow-y-scroll py-2 start-col gap-1">
                {Object.values(lineItems).map(item => {
                    return (
                        <div key={item.priceId} className="h-52 md:h-48  flex-shrink-0 border-b-2 text-white relative">
                            <div className="evenly gap-2 relative h-1/2 top-4 ">
                                <Card shadow="true" className={'w-24 h-full relative overflow-hidden'}>
                                    <Image fill src={item.images ? item.images[0] : ''} alt="" />

                                </Card>
                                <div className="p-1  w-1/2">
                                    <h1 className="md:text-lg">{item.name?.substr(0, 20)}{item?.name?.length > 20 ? '...' : ''}</h1>
                                    <h1 className="font-light text-xs h-4 overflow-hidden">{item?.variant}</h1>
                                    <h1 className="font-bold">{String(item?.price).includes('$') ? '' : '$'}{item?.price}</h1>
                                </div>


                            </div>
                            <button onClick={() => { RemoveFromCart(item) }} className="h-6 rounded-t-md  w-full center bottom-0  absolute">
                                <div className="font-semibold w-24 w rounded-t center text-red-500 bg-gray-600"><Trash2Icon /></div>
                            </button>
                            <div className={'text-black my-8'}>
                                <ItemQTYButton product={item} />
                            </div>
                        </div>
                    )
                })}

            </div >

            <div className="center">
                <button onClick={(event) => {


                    checkShippingInfo(event)

                }} className="w-3/4 h-12 bg-white rounded hover:text-lg trans">
                    <h1>CheckOut</h1>
                </button>

            </div>

        </div >
    )
}

export default Cart