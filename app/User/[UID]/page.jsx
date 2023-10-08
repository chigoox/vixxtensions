'use client'
import { onAuthStateChanged } from "firebase/auth";
import app, { AUTH } from "@/Firebase";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import AUTHListener from "@/StateManager/AUTHListener";
import { addToDatabase, fetchDocument } from "@/app/myCodes/Database";
import { logOut } from "@/app/myCodes/Auth";
import { Input } from "@nextui-org/react";
import ShippinInfo from "@/app/Componets/User/ShippinInfo";




const fetchData = async () => {
    const data = await fetchDocument('Admin', 'Users')
    return data
}


export async function generateStaticParams() {
    const data = await fetchData()
    return (data.map(uid => ({ UID: uid })))
}


const getUID = (user) => {
    console.log(user.uid ? user.uid : user.gid)
    return user.uid ? user.uid : user.gid
}


export default function ProtectedRoute({ params }) {
    const [user, setUser] = useState({})
    const [userData, setUserData] = useState()
    //  const fetchUserData = async () => {
    //    const data = await fetchDocument('User', getUID(user))
    //  return data
    //}
    console.log(userData)

    !userData?.orders ? fetchDocument('User', getUID(user)).then((data) => {
        if (data) setUserData(data)
    }) : null


    const mockReservations = [
        { name: 'bob john', time: '11:00am', type: 'wig class' },
        { name: 'cindy block', time: '12:30pm', type: 'wig class' },
        { name: 'rol roice', time: '5:00pm', type: 'wig construction' },
        { name: 'cool jack', time: '2:00pm', type: 'wig construction' },
        { name: 'const let', time: '3:00pm', type: 'wig class' },


    ]


    useEffect(() => {


    }, [user])


    const menu = ['Orders', 'Reservations', 'Update Shipping Info']
    const OrderItem = ({ orderInfo }) => {
        const { order, shippingInfo, id } = orderInfo
        console.log(Object.values(order?.state?.lineItems ? order?.state?.lineItems : {}))
        return (
            <Card shadow="md" variant={'bordered'} className="h-32 w-full m-auto bg-black center-col">
                <CardBody className="bg-white center-col">{[1, 2, 3]}</CardBody>
                <CardFooter className={'text-white text-xs bg-black-800 bg-opacity-25 p-2'}>ID: {id} QTY: {'qty'} Total: ${'total'}</CardFooter>
            </Card>
        )
    }

    const ReservationItem = ({ reservationInfo }) => {
        const { name, time, type } = reservationInfo
        return (
            <Card shadow="md" variant={'bordered'} className="h-16 w-full text-white m-auto bg-black-900 first:bg-gray-100 first:text-black">
                <div className="center-col h-fit  w-72 m-auto ">
                    <h1>{time}</h1>
                    <h1>{type}</h1>
                </div>
            </Card>
        )
    }

    return (
        <div className="w- min-h-screen ">
            <AUTHListener protectedPage={true} set={setUser} />
            <h1 className="text-xl font-bold text-center">Welcome Back </h1>
            <h1 className="font-extrabold text-center">{user?.displayName}</h1>
            <div className="center"><Button onPress={logOut} className="bg-black-800 text-white w-3/4">LogOut</Button></div>

            <div className="flex md:flex-row flex-col w-full border justify-center gap-4 p-2">
                <Card className="h-auto  md:w-96 w-full my-12" variant={'bordered'}>
                    <CardHeader className="text-3xl  font-bold text-center bg-black mb-4 text-white p-2">Orders</CardHeader>
                    <CardBody className="w-full overflow-y-scroll hidescroll h-full grid grid-cols-2  p-2 gap-2 items-center justify-center">
                        {Object.values(userData?.orders ? userData?.orders : {}).map((order) => <OrderItem orderInfo={order} />)}
                    </CardBody>
                </Card>
                <Card className="h-auto md:w-96 w-full my-12" variant={'bordered'}>
                    <CardHeader className="text-3xl  font-bold text-center bg-black mb-4 text-white p-2">Reservations</CardHeader>
                    <CardBody className="w-full overflow-y-scroll hidescroll h-full grid grid-cols-1  p-2 gap-2 items-center justify-center">
                        {mockReservations.map(reservation => <ReservationItem reservationInfo={reservation} />)}
                    </CardBody>

                </Card>
            </div>

            <ShippinInfo user={user} />




        </div>
    )
}
