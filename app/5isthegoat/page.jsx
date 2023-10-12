'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, CheckboxGroup, Input, Textarea } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { Uploader } from "../Componets/General/Uploader"
import { createArray } from "../myCodes/Util"
import { InputNumber } from "antd"
import { createProduct } from "../myCodes/Stripe"






function Admin() {
    const [priceIDCount, setPriceIDCount] = useState(1)
    const [productData, setProductData] = useState()
    const [priceData, setPriceData] = useState({ for: productData?.productName?.replace(/\s/g, '') })

    //test
    console('')
    const updateProduct = (event, setter) => {
        const { target } = event
        setter(oldState => ({ ...oldState, [target?.name]: target?.value }))
    }
    const updatePrice = (event, setter, index) => {
        const { target } = event
        setter(oldState => ({ ...oldState, ['price' + index]: { ...oldState['price' + index], [target?.name]: (index == 0 && productData?.price && target?.name == 'amount') ? productData.price : target.value } }))
    }

    if (priceIDCount < 1) setPriceIDCount(1)
    if (priceIDCount > 4) setPriceIDCount(100)

    const create = () => {
        createProduct(productData, priceData)
    }




    useEffect(() => { setPriceData(old => ({ ...old, for: productData?.productName?.replace(/\s/g, '') })) }, [productData?.productName])

    return (
        <div className="bg-black p-2  md:p-4">

            <Card className="bg-black-800 w-[90%] md:w-[60%] mx-auto">
                <CardHeader className="bg-rose-500 text-white  font-extrabold">
                    <h1 className="text-center text-xl w-full">Product Data</h1>
                </CardHeader>

                <CardBody>
                    <Input type="text"
                        onChange={(event) => { updateProduct(event, setProductData) }}
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
                        onChange={(event) => { updateProduct(event, setProductData) }}
                    />

                    <div className="border p-2 my-4 center-col gap-2">
                        <h1 className="text-white font-extrabold">Metadata</h1>
                        <Input type="text"
                            onChange={(event) => { updateProduct(event, setProductData) }}
                            placements={'inside'}
                            variant="flat"
                            name={'category'}
                            label={'Category'}
                            className="w-64 m-auto"
                        />
                        <Input type="number"
                            onChange={(event) => { updateProduct(event, setProductData) }}
                            placements={'inside'}
                            variant="flat"
                            name={'price'}
                            label={'Price'}
                            className="w-64 m-auto"
                        />

                        <CheckboxGroup
                            lable='select options'
                            className="text-white"
                            value={productData?.checkbox}
                            onValueChange={(value) => { setProductData((old) => { return ({ ...old, isNew: value.includes('isNew') ? true : false, isBestSelling: value.includes('isBestSelling') ? true : false, checkbox: value }) }) }}
                        >
                            <Checkbox value={'isNew'} >       <h1 className="text-white">isNew</h1></Checkbox>
                            <Checkbox value={'isBestSelling'}><h1 className="text-white">isBestSelling</h1></Checkbox>
                        </CheckboxGroup>

                    </div>

                    <Textarea
                        className="text-white"
                        variant="underlined"
                        label="Features"
                        name="productFeat"
                        labelPlacement="outside"
                        placeholder="Enter features seperate by commas"
                        value={productData?.desc}
                        onChange={(event) => { updateProduct(event, setProductData) }}
                    />
                    <h1 className="text-red-500 text-center font-extrabold text-2xl">Images</h1>
                    <Uploader setProductData={setProductData} />

                    <h1 className="text-white text-center font-extrabold text-4xl my-4">Price Data</h1>
                    <div className="border-2 w-full h-1"></div>
                    <Input
                        type="number"
                        className="w-10 min-w-0 p-0 m-auto my-4 text-center"
                        onValueChange={setPriceIDCount}
                        value={priceIDCount}

                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-2">
                        {createArray(priceIDCount).map((_priceData, index) => {



                            return (
                                <Card key={index} className="w-60 h-60 scale-100 md:scale-75 lg:scale-75 m-auto bg-gray-300">
                                    <CardHeader className="bg-red-500">

                                    </CardHeader>
                                    <CardBody>
                                        <Input type="text"
                                            onChange={(event) => { updatePrice(event, setPriceData, index) }}
                                            placements={'inside'}
                                            variant="flat"
                                            name={`priceName`}
                                            label={'Price Name'}
                                            className=" m-auto"
                                        />
                                        <Input type="number"
                                            onChange={(event) => { updatePrice(event, setPriceData, index) }}
                                            placements={'inside'}
                                            variant="flat"
                                            name={'amount'}
                                            label={'Price amount'}
                                            className=" m-auto"
                                            value={(index == 0 && productData?.price) ? productData?.price : _priceData['price0']}
                                        />
                                    </CardBody>
                                    <CardFooter>

                                    </CardFooter>

                                </Card>
                            )
                        })}
                    </div>





                </CardBody>
                <CardFooter className="center bg-rose-500">
                    <Button onPress={create} className="h-14 w-3/4 font-extrabold text-2xl" >
                        Create Product
                    </Button>
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