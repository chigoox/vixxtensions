'use client'
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react"


function Admin() {
    return (
        <div className="bg-black p-2  md:p-4">
            <Card className="bg-black-800 w-[90%] md:w-[60%] mx-auto">
                <CardHeader className="bg-rose-500 text-white text-center font-extrabold">
                    <h1>Product Data</h1>
                </CardHeader>

                <CardBody>

                </CardBody>
                <CardFooter>

                </CardFooter>
            </Card>
        </div>
    )
}

export default Admin