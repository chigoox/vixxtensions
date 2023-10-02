'use client'
import { useRouter } from "next/navigation"
import { onAuthStateChanged } from "firebase/auth";
import app, { AUTH } from "@/Firebase";
import { useEffect, useState } from "react";
import { Button, Card } from "@nextui-org/react";
import AUTHListener from "@/StateManager/AUTHListener";
import { fetchDocument } from "@/app/myCodes/Database";
import { logOut } from "@/app/myCodes/Auth";





const fetchData = async () => {
    const data = await fetchDocument('Admin', 'Users')
    return data
}


export async function generateStaticParams() {
    const data = await fetchData()
    return (data.map(uid => ({ UID: uid })))
    //return [{ UID: '2wW1W8alk0c9RtR0M9mbHJ7mql33' }]
}




export default function ProtectedRoute({ params }) {
    const [user, setUser] = useState({})




    return (
        <div className="w- min-h-screen ">
            <AUTHListener protectedPage={true} set={setUser} />
            <h1 className="text-xl font-bold text-center">Welcome Back </h1>
            <h1 className="font-extrabold text-center">{user?.uid}</h1>
            <div className="center"><Button onPress={logOut} className="bg-black-800 text-white w-3/4">LogOut</Button></div>
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
