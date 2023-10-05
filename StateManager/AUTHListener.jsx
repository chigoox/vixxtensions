'use client'
import { AUTH } from '@/Firebase'
import { addToDatabase } from '@/app/myCodes/Database'
import { addEmailToList, addUIDToList } from '@/app/myCodes/DatabaseUtils'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'


function AUTHListener({ add = false, set, protectedPage }) {
    const { push } = useRouter()

    useEffect(() => {
        const auth = AUTH
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (set) set(user)
                if (add) addUIDToList(user.uid)
                if (add) addEmailToList(user.email)
            } else {
                // User is signed out
                if (set) set()
                if (protectedPage) push('/')
            }
        });
    }, [])
    return (
        <></>
    )
}

export function useAUTHListener(add = false, set, protectedPage) {
    const { push } = useRouter()
    const [user, setUser] = useState({})

    useEffect(() => {
        const auth = AUTH
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (set) set(user)
                if (add) addUIDToList(user.uid)
                if (add) addEmailToList(user.email)
                setUser(user)
                return user
            } else {
                // User is signed out
                if (set) set()
                if (protectedPage) push('/')
                setUser('noUser')
                return { uid: 'noUser' }

            }
        });
    }, [])
    return user

}

export default AUTHListener