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
    const mockOrders = [
        { name: 'test', price: 125, qty: 4 },
        { name: 'tes2', price: 153, qty: 1 },
        { name: 'tes3', price: 500, qty: 9 },
        { name: 'tes3', price: 500, qty: 9 },
        { name: 'tes3', price: 500, qty: 9 },


    ]
    const OrderItem = () => {
        return (
            <div className="h-12 w-12 bg-black-800">

            </div>
        )
    }



    return (
        <div className="w- min-h-screen ">
            <AUTHListener protectedPage={true} set={setUser} />
            <h1 className="text-xl font-bold text-center">Welcome Back </h1>
            <h1 className="font-extrabold text-center">{user?.uid}</h1>
            <div className="center"><Button onPress={logOut} className="bg-black-800 text-white w-3/4">LogOut</Button></div>
            <div className="flex md:flex-row flex-col p-2">
                <Card className="h-auto  md:w-96 w-full my-12 p-2" variant={'bordered'}>
                    <Card className="text-3xl  font-bold text-center bg-black mb-4 text-white p-2">Orders</Card>
                    <div className="w-full h-full gird gap-4 grid-cols-4 grid-rows-2">
                        {mockOrders.map(order => <OrderItem />)}
                    </div>

                </Card>
                <Card className="h-96 md:w-96 w-full my-12 p-2" variant={'bordered'}>
                    <h1 className="text-3xl font-bold">Reservations</h1>

                </Card>

            </div>




        </div>
    )
}
