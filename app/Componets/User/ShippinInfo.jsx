'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react'
import React, { useState } from 'react'

function ShippinInfo() {
    const [shippingInfo, setShippingInfo] = useState({})

    const updateShippingInfo = async ({ target }) => {
        console.log(target)
        setShippingInfo(oldState => ({ ...oldState, [target.name]: target.value }))
    }


    const updateDatabase = (() => {
        addToDatabase('User', user?.uid, 'ShippingInfo', shippingInfo)
    })
    return (
        <div className="center-col h-auto">
            <Card className="w-3/4  h-full bg-black center-col">
                <CardHeader className="font-bold text-white bg-black-800 mb-4"><h1 className="text-center w-full">Shipping Info</h1></CardHeader>
                <CardBody className="center-col gap-2 text-black">
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
                        name="Address"
                        label={'Address'}

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