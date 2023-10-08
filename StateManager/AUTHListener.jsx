'use client'
import app, { AUTH } from '@/Firebase'
import { useGuest, useSignInGuest } from '@/app/Hooks/useGuest'
import { logOut } from '@/app/myCodes/Auth'
import { addToDatabase } from '@/app/myCodes/Database'
import { addEmailToList, addUIDToList } from '@/app/myCodes/DatabaseUtils'
import { getRand } from '@/app/myCodes/Util'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
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
    const auth = getAuth(app)
    const GID = useGuest()






    useEffect(() => {
        const auth = AUTH
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (set) set(user)
                if (add) addUIDToList(user.uid)
                if (add) addEmailToList(user.email)
                setUser(user)
            } else {
                // User is signed out
                if (set) set()
                if (protectedPage) push('/')
                //initNoUser()

                setUser({ gid: GID })

            }
        });
    }, [])
    return user

}

export default AUTHListener