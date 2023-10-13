'use client'
import React, { useEffect, useState } from 'react'
import EmailCollector from './EmailCollector';
import { useAUTHListener } from '@/StateManager/AUTHListener';

function EmailCollectorMain() {
    const [openEmailCollect, setOpenEmailCollect] = useState(false)
    const user = useAUTHListener()
    useEffect(() => {
        if (user?.email) {
            setTimeout(() => {
                setOpenEmailCollect(true)
            }, 6000);
        }


    }, [])

    return (
        < EmailCollector isopen5={openEmailCollect} setOpen={setOpenEmailCollect} />
    )
}

export default EmailCollectorMain