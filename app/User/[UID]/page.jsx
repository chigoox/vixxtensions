'use client'
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth";
import app, { AUTH } from "@/Firebase";
import { useEffect, useState } from "react";
import { Card } from "@nextui-org/react";





const fetchData = async () => {
    const data = await fetchUsers()
    return data
}


export async function generateStaticParams() {
    // const data = await fetchData()
    // return (data.map(uid => ({ UID: uid })))
    return [{ UID: '2wW1W8alk0c9RtR0M9mbHJ7mql33' }]
}




export default function ProtectedRoute() {
    const [user, setUser] = useState({})
    console.log(user)
    const { push } = useRouter()

    useEffect(() => {
        const auth = AUTH
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
                push('/')

            }
        });


    }, [])



    return (
        <div className="w- min-h-screen  border-2 border-red-300">
            <h1 className="text-xl font-bold text-center">Welcome Back {user.uid}</h1>
            <div className="flex md:flex-row flex-col">
                <Card className="h-96 md:w-96 w-full my-12 p-2" variant={'bordered'}>
                    <h1 className="text-3xl font-bold">Orders</h1>

                </Card>
                <Card className="h-96 md:w-96 w-full my-12 p-2" variant={'bordered'}>
                    <h1 className="text-3xl font-bold">Reservations</h1>

                </Card>

            </div>




        </div>
    )
}
