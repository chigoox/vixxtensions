'use client'
import { addToDatabase } from '@/app/myCodes/Database'
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import { Uploader } from '../General/Uploader'

function ShippinInfo({ user, forCheckOut, event }) {
    const [shippingInfo, setShippingInfo] = useState({})
    const [showTerms, setShowTerms] = useState(false)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const updateShippingInfo = async ({ target }) => {
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
                    <Uploader setProductData={setShippingInfo} limit={1} folderName={'IDs'} />
                    <div className='flex  text-xm text-rose-700 w-auto h-auto font-extrabold'>
                        <Button className='bg-rose-700 h-20' onClick={() => { setShowTerms(!showTerms) }}>By uploading your ID you agree to our terms and conditions (click to see terms)</Button>

                    </div>


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

            <Modal isOpen={showTerms} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Terms & Conditions</ModalHeader>
                            <ModalBody>
                                <p>
                                    All orders will take 2-4 business days to be processed.
                                    All orders are shipped through USPS STANDARD SHIPPING which is 5-7 business days.
                                    If you accidentally entered the wrong shipping address, contact vihairwigs@outlook.com
                                    for a change of address. Vihair LLC is not reponsible for any lost items due to a wrong
                                    shipping address.
                                    Thank you .
                                </p>
                                <h1 className='text-xl font-extrabold' >Return Policy</h1>
                                <h1>
                                    All sales are FINAL and there are no refunds Exchanges.
                                    A Refund and Exchange will be only acceptable when we are at
                                    fault with a costumer’s order . If you have any questions concerning
                                    your order Email Vihairwigs@outlook.com.
                                </h1>

                                <h1>GOVERNMENT PHOTO ID IS REQUIRED FOR ALL ORDERS .</h1>
                            </ModalBody>
                            <ModalFooter>

                                <Button color="primary" className='bottom-8 right-5 relative' onPress={() => { setShowTerms(false) }}>
                                    Agree by uploading ID
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ShippinInfo