import { Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader, Switch, Checkbox, CheckboxGroup } from "@nextui-org/react";

import React, { useState } from 'react'

function WigConOptions() {
    const array = [{ name: '26-30 inch hair color', price: 20 }, { name: 'Burgundy ( 3 bundles and a frontal / closure ) ONLY UP TO 26 INCH HAIR' }]
    console.log(array)
    const ConOption = ({ option, addons }) => {

        const [isSelected, setIsSelected] = useState(false)
        const [selected, setSelected] = useState("login");

        return (<div className="flex flex-col justify-center items-center w-full">
            <Card className="max-w-full w-[340px] md:w-full h-auto">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                    >
                        <Tab key={option} title={option}>
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                                        {option}
                                    </Switch>
                                    <p className="text-small text-default-500">Selected: {isSelected ? "true" : "false"}</p>
                                    <h1 className="p-2">This service comes with customization (plucking and bleaching of knots) and also adjustable elastic bands.
                                        ANY UNIT ABOVE 3 BUNDLES IS AN EXTRA FEE. Refer to my add-ons below .</h1>
                                </div>
                            </form>
                        </Tab>
                        <Tab key="addons" title="addons">
                            <form className="gap-4 ">
                                <CheckboxGroup
                                    label="Select addons"
                                    orientation="horizontal"
                                    color="secondary"
                                >
                                    {addons.map((addon) => { return (<Checkbox key={addon.name} value={addon.name}>{addon.name}</Checkbox>) })}


                                </CheckboxGroup>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>)
    }
    return (
        <div className="center-col gap-2">

            <ConOption option={'Custom Froxntal wig'} addons={array} />
            <ConOption option={'Custom Froxntal wig'} addons={array} />

















        </div>
    )
}

export default WigConOptions