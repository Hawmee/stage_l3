import { createContext, useContext, useEffect, useState } from "react";

const chefSRBcontext = createContext({
    ohatra: '',
    setAdd_units: ()=>{},
    test: ()=>{},
})


export const chefSRBData = ()=>{
    return useContext(chefSRBcontext);
}


export const ChefSRBProvider = ({children}) =>{

    const [ohatra , setOhatra] = useState('ohatra')

    const [add , setAdd] = useState(true)

    const test = ()=>{
        console.log('huhu')
    }

    return(
        <chefSRBcontext.Provider value={{
            test ,
            ohatra ,
            add,
            setAdd
         }}>
            {children}
        </chefSRBcontext.Provider>
    )
}
