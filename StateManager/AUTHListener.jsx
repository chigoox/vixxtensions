'use client'
import { AUTH } from '@/Firebase'
import { addToDatabase } from '@/app/myCodes/Database'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

function AUTHListener({ add = false, set }) {
    const { push } = useRouter()

    useEffect(() => {
        const auth = AUTH
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (set) set(user)
                if (add) addToDatabase('Admin', 'Users', 'uid', [user.uid])
            } else {
                // User is signed out
                push('/')

            }
        });


    }, [])
    return (
        <></>
    )
}

export default AUTHListener