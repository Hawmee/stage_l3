import React, { useState } from "react";
import Units from "./Units";
import ChefSRBLayout from "../../../Layouts/ChefSRBLayout";
import AddUnits from "./AddUnits";
import { ChefSRBProvider } from "../../../context/ChefSRBcontext";

function Index() {
    const [newItem, setNewItem] = useState(false);

    const open_close_Add = () => {
        setNewItem(!newItem);
        console.log(newItem);
    };

    return (
        <>
            <ChefSRBLayout>
                <Units open_close_new={open_close_Add} />
            </ChefSRBLayout>
            <AddUnits newItem={newItem} open_close_new={open_close_Add} />
        </>
    );
}

export default Index;
