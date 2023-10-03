'use client'
import React, { useEffect, useState } from 'react'
import EmailCollector from './EmailCollector';

function Email() {
    const [openEmailCollect, setOpenEmailCollect] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setOpenEmailCollect(true)
        }, 10000);


    }, [])

    return (
        < EmailCollector isopen={openEmailCollect} setOpen={setOpenEmailCollect} />
    )
}

export default Email