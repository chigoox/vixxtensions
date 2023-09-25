import React, { useState } from 'react'
import { Drop } from "@nextui-org/react";
function ItemQTYButton() {
    const [QTY, setQTY] = useState(0)
    const controlQTY = (action = 'add', count = 1, event) => {
        if (action == 'add') setQTY(prevState => prevState < 99 ? prevState + count : prevState)
        if (action == 'sub') setQTY(prevState => prevState > 0 ? prevState - count : prevState)
        if (action == 'set') setQTY(event.target.value)

    }
    return (
        <div className="center h-1/2 w-fit m-auto my-2">
            <button onClick={() => { controlQTY('sub') }} className="rounded-l h-8 w-8 bg-gray-300"> </button>
            <input max={2} maxLength={2} onChange={event => controlQTY('set', null, event)} value={QTY} className="w-8 h-8 bg-gray-200 text-center" placeholder="0" type="number" name="" id="" />
            <button onClick={() => { controlQTY() }} className="rounded-r h-8 w-8 bg-gray-300"></button>

        </div>
    )
}

export default ItemQTYButton