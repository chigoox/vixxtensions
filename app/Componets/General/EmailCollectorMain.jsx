'use client'
import React, { useEffect, useState } from 'react'
import EmailCollector from './EmailCollector';

function EmailCollectorMain() {
    const [openEmailCollect, setOpenEmailCollect] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setOpenEmailCollect(true)
        }, 6000);


    }, [])

    return (
        < EmailCollector isopen5={openEmailCollect} setOpen={setOpenEmailCollect} />
    )
}

export default EmailCollectorMain