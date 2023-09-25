import { useCartContext } from '@/StateManager/CartContext'
import { BellMinus, Minus, MinusIcon, Plus, PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
function ItemQTYButton({ state, setState, product }) {
    const { dispatch } = useCartContext()
    const [QTY, setQTY] = useState(product?.Qty ? product?.Qty : 0)
    const controlQTY = (action = 'add', count = 1, event) => {
        if (action == 'add') setQTY(prevState => prevState < 99 ? prevState + count : prevState)
        if (action == 'sub') setQTY(prevState => prevState > 0 ? prevState - count : prevState)
        if (action == 'set') setQTY(event.target.value)
        if (product) {
            const currentItemInfo = { images: product.images, name: product.name, price: product.price, variant: product.variant, priceID: product.priceID }
            if (action == 'add') dispatch({ type: "ADD_TO_CART", value: { ...currentItemInfo, Qty: 1 } })
            if (action == 'sub') dispatch({ type: "SUB_FROM_CART", value: { ...currentItemInfo, Qty: 1 } })
            if (action == 'set') dispatch({ type: "SET_CART", value: { ...currentItemInfo, Qty: event.target.value } })
        }

    }
    useEffect(() => {
        if (setState) setState(prev => ({ ...prev, Qty: QTY }))

    }, [QTY])

    return (
        <div className="center h-1/2 w-fit m-auto my-2">
            <button onClick={() => { controlQTY('sub') }} className="rounded-l h-8 w-8 bg-gray-300 center"><MinusIcon /> </button>
            <input max={2} maxLength={2} onChange={event => controlQTY('set', null, event)} value={product?.Qty ? product?.Qty : QTY} className="w-8 h-8 bg-gray-200 text-center" placeholder="0" type="number" name="" id="" />
            <button onClick={() => { controlQTY() }} className="rounded-r h-8 w-8 bg-gray-300 center"><PlusIcon /> </button>

        </div>
    )
}

export default ItemQTYButton