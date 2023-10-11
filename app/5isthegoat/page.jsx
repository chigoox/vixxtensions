'use client'
import { Card, CardBody, CardFooter, CardHeader, Input, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { Uploader } from "../Componets/General/Uploader"






function Admin() {
    const [productData, setProductData] = useState()
    console.log(productData)
    const updateData = (event, setter) => {
        const { target } = event
        setter(oldState => ({ ...oldState, [target?.name]: target?.value }))
    }






    return (
        <div className="bg-black p-2  md:p-4">

            <Card className="bg-black-800 w-[90%] md:w-[60%] mx-auto">
                <CardHeader className="bg-rose-500 text-white  font-extrabold">
                    <h1 className="text-center text-xl w-full">Product Data</h1>
                </CardHeader>

                <CardBody>
                    <Input type="text"
                        onChange={(event) => { updateData(event, setProductData) }}
                        placements={'inside'}
                        variant="flat"
                        name={'productName'}
                        label={'Product name'}
                        className="w-64 m-auto"
                    />
                    <Textarea
                        className="text-white"
                        variant="underlined"
                        label="description"
                        name="productDesc"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        value={productData?.desc}
                        onChange={(event) => { updateData(event, setProductData) }}
                    />

                    <div className="border p-2 my-4 center-col gap-2">
                        <h1 className="text-white font-extrabold">Metadata</h1>
                        <Input type="text"
                            onChange={(event) => { updateData(event, setProductData) }}
                            placements={'inside'}
                            variant="flat"
                            name={'category'}
                            label={'Category'}
                            className="w-64 m-auto"
                        />
                        <Input type="text"
                            onChange={(event) => { updateData(event, setProductData) }}
                            placements={'inside'}
                            variant="flat"
                            name={'price'}
                            label={'Price'}
                            className="w-64 m-auto"
                        />

                    </div>

                    <Textarea
                        className="text-white"
                        variant="underlined"
                        label="Features"
                        name="productFeat"
                        labelPlacement="outside"
                        placeholder="Enter features"
                        value={productData?.desc}
                        onChange={(event) => { updateData(event, setProductData) }}
                    />

                    <Uploader />
                </CardBody>
                <CardFooter>

                </CardFooter>
            </Card>
        </div>
    )
}

export default Admin


/* 

        metadata: priceMeta,
        nickname: priceName,
        unit_amount: priceAmount * 100,


*/