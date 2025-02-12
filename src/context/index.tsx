"use client"
import { createContext, useContext,useState } from "react"


const AppContext= createContext<any>(undefined)



export function AppWrapper({children,value1,value2,value3}:{
    children:React.ReactNode,
    value1:any
    value2:any
    value3:any
    
}){
    
    let [user,setUser]=useState(null)


    return <AppContext.Provider value={{user,setUser}} >
        {children}
    </AppContext.Provider>
}
export function useAppContext(){
    return useContext(AppContext)

}