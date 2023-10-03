'use client'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardHeader, CardBody, Input } from "@nextui-org/react";
import React, { useState } from 'react'
import IMG from "public/Images/0A90A7F5-E6FC-421A-8A5D-9383ED7A1868.JPG";
import Image from "next/image";
import { siteName, siteTag } from "@/app/META";
import { addEmailToList } from "@/app/myCodes/DatabaseUtils";


export const collectAndSendEmail = (email) => {
    addEmailToList(email)
    //function to send email code
    if (setOpen) setOpen(false)

}

function EmailCollector({ isopen, setOpen }) {
    const [email, setEmail] = useState()
    console.log(email)


    return (
        <Modal
            className="z-[999999]"
            isOpen={isopen}
            placement={'auto'}
            onOpenChange={'onOpenChange'}
            size={'2xl'}
            classNames={'h-fit'}
        >
            <ModalContent className="h-[30rem] md:h-[35rem] ">
                {(onClose) => (
                    <>
                        <ModalBody className="relative flex z-50 ">
                            <div className="self-end h-auto  center ">
                                <div className=" absolute center-col p-2 gap-4 w-1/2 h-auto right-0 top-0 text-center">
                                    <div>
                                        <h1 className=" text-5xl font-bold">{siteName}</h1>
                                        <h1 className="font-light text-xl">{siteTag}</h1>
                                    </div>

                                    <h1 className="font-semibold text-2xl text-center">Become a Luxury Insider</h1>
                                    <h1 className="font-extrabold text-3xl md:text-5xl text-center">10% OFF</h1>
                                    <h1 className="text-sm font-light ">Your first purchase. Plus receive exclusive access to promotions and product launches</h1>

                                    <Input
                                        onValueChange={(text) => setEmail(text)}
                                        className="text-center"
                                        placeholder=""
                                        placement={'inside'}
                                        label={'Enter email for 10% off'}


                                    />
                                    <div className="center-col">
                                        <Button className="bg-black-900 text-white" onPress={() => { collectAndSendEmail(email) }}>
                                            SignUp
                                        </Button>
                                        <Button onPress={() => {
                                            setOpen(false)
                                        }} color="danger" variant="light" >
                                            No Thanks
                                        </Button>
                                    </div>
                                </div>

                            </div>


                        </ModalBody>
                        <ModalFooter className="mb-12">

                        </ModalFooter>
                        <div className="h-full top-0 absolute w-1/2 overflow-hidden">
                            <Image fill objectFit="cover" src={IMG} />
                        </div>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default EmailCollector