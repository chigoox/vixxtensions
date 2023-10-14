'use client'
import { addToDatabase } from '@/app/myCodes/Database'
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { Uploader } from '../General/Uploader'

function ShippinInfo({ user, forCheckOut, event }) {
    const [shippingInfo, setShippingInfo] = useState({})

    const updateShippingInfo = async ({ target }) => {
        console.log(target)
        setShippingInfo(oldState => ({ ...oldState, [target.name]: target.value }))
    }


    const updateDatabase = (() => {
        if (forCheckOut && Object.keys(shippingInfo).reduce((a, c) => a + 'email firstName lastName address zipcode phone'.includes(c), 0) >= 6
        ) {
            addToDatabase('User', user?.uid ? user?.uid : user?.gid, 'ShippingInfo', shippingInfo)
            forCheckOut(shippingInfo, event)
        }

    })
    return (
        <div className="center-col w-full h-auto z-[9999]">
            <Card className={`${forCheckOut ? 'w-full' : 'w=3/4'}  h-full bg-black center-col`}>
                <CardHeader className="font-bold text-white bg-black-800 mb-4">
                    <h1 className="text-center w-full">Add shipping Info</h1>
                </CardHeader>
                <CardBody className="center-col gap-2 text-black">


                    <h1 className='text-white'>Upload ID Please</h1>
                    <Uploader setProductData={setShippingInfo} limit={1} />


                    <Input type="text"
                        onChange={updateShippingInfo}
                        placements={'inside'}
                        variant="flat"
                        name="email"
                        label={'Address'}
                        className="w-64 m-auto"
                    />
                    <Input type="text"
                        onChange={updateShippingInfo}
                        placements={'inside'}
                        variant="flat"
                        name="firstName"
                        label={'First Name'}
                        className="w-64 m-auto"
                    />
                    <Input type="text"
                        onChange={updateShippingInfo}
                        placements={'inside'}
                        variant="flat"
                        name="lastName"
                        label={'Last Name'}
                        className="w-64 m-auto"
                    />
                    <Input type="text"
                        onChange={updateShippingInfo}
                        placements={'inside'}
                        variant="flat"
                        name="address"
                        label={'Address'}
                        className="w-64 m-auto"
                    />
                    <Input type="text"
                        onChange={updateShippingInfo}
                        placements={'inside'}
                        variant="flat"
                        name="apt"
                        label={'APT'}
                        className="w-64 m-auto"
                    />
                    <Input type="number"
                        onChange={updateShippingInfo}
                        placements={'inside'}
                        variant="flat"
                        name="zipcode"
                        label={'Zip Code'}
                        className="w-64 m-auto"
                    />
                    <Input type="number"
                        onChange={updateShippingInfo}
                        placements={'inside'}
                        variant="flat"
                        name="phone"
                        label={'Phone'}
                        className="w-64 m-auto"
                    />
                </CardBody>
                <CardFooter><Button className="w-3/4 m-auto" onPress={updateDatabase}>Update</Button></CardFooter>
            </Card>
        </div>
    )
}

export default ShippinInfo