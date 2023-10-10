import { Button, Card, CardFooter, Image } from '@nextui-org/react'
import { Ship, ShipIcon } from 'lucide-react'
import React from 'react'
import WigConOptions from './WigConOptions'

const WigConDetails = () => {
    return (
        <div className='h-fit'>
            <h1 className='text-sm text-center'>Booking a wig construction service with vihair.</h1>
            <h1 className='text-sm text-center'>PLEASE READ CAREFULLY!</h1>
            <h1 className=' bg-red-500 text-sm text-black text-center'>BOOKING A SLOT IS RESERVING A WIG APPOINTMENT.</h1>
            <h1 className='text-4xl text-center mt-12  p-2 font-extrabold'>WIG MEASUREMENTS</h1>
            <h1 className='p-2 text-center text-sm font-light'>Here is a measurement chart below . You will use a tape measure to measure your head sizeMy wig order form will state what measurement are needed for my services</h1>
            <Card className='center-col w-[90%] m-auto shadow-md shadow-gray-300'>
                <Image src={'https://cdn-s.acuityscheduling.com/upload-7524548f72f6611ed5be581509d50fc5.jpg'} alt={''} className='object-cover relative' />
            </Card>
            <div className='center gap-2 mt-12 mb-2 p-2'>
                <div>
                    <h1 className='text-4xl md:text-3xl lg:text-5xl font-extrabold w-1/2'>SHIPPING</h1>

                </div>
                <Card className='w-1/2 bg-black text-white p-2 shadow-md shadow-gray-300'>
                    <h1 className='text-center font-bold'>AFTER BOOKING YOU MUST SHIP YOUR HAIR TO MY P.O BOX Within 7 days. Please be sure to use the same name you used to book my service on your shipping information . If you are shipping hair straight from a company please send me the description of your hair and what company it is coming from.</h1>
                </Card>
            </div>
            <h1 className='text-center font-semibold text-sm my-2'>STANDARD SHIPPING FEE IS $10</h1>
            <h1 className='bg-red-500 text-black text-center font-bold w-fit m-auto rounded p-1 text-sm mt-2'>PLEASE DO NOT SHIP ANY USED HAIR OR USED LACE</h1>
            <div className='center p-2 gap-2 mt-2'>
                <Card className='p-2 shadow-md shadow-gray-300 bg-black w-1/2 text-white font-extrabold'>
                    <h1>P.O Box information</h1>
                    <h1>ViHair</h1>
                    <h1>PO BOX 119</h1>
                    <h1>49 W MOUNT PLEASANT AVE</h1>
                    <h1>LIVINGSTON, NJ 07039</h1>
                </Card>
                <div className='w-20'>
                    <h1 className='text-2xl md:text-3xl font-extrabold'>SHIPPING INFO</h1>
                </div>
            </div>

            <div className='text-center font'>
                <h1>TURN AROUND TIME</h1>
                <h1 className='font-light'>14-28 days( Business days).</h1>
                <div className='flex  flex-col md:flex-row justify-center items-center gap-2 p-2 bg-black h-auto mx-2 rounded-xl' >
                    <Card className='w-3/4 h-40 md:w-1/2 p-2 font-extrabold'>
                        <h1>HAIR MUST BE APPROVED BY ME BEFORE IT IS COLORED.</h1>
                        <h1 className='bg-black m-auto w-fit p-1 rounded shadow shadow-gray-500 text-red-700'>Deposits are required upon booking.</h1>

                    </Card>
                    <Card className='w-3/4 md:w-1/2  font-extrabold'>
                        <h1 className='p-2'>THE REMAINING BALANCE WILL BE PAID THROUGH ZELLE AFTER YOUR WIG IS FINISHED AND IS READY TO BE SHIPPED BACK OFF.</h1>
                        <CardFooter className='bg-red-500'>
                            <h1>IMPORTANT: PLEASE, WHILE BOOKING ENTER THE PROPER INFORMATION. NO CHANGES CAN BE MADE.</h1>

                        </CardFooter>
                    </Card>
                </div>

            </div>

            <Button className='w-full rounded-none mt-2'>

            </Button>

            <WigConOptions />


        </div>
    )
}

export default WigConDetails