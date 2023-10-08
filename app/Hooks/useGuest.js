'use client'
import app from "@/Firebase"
import { getAuth, signInAnonymously } from "firebase/auth"
import { useEffect, useState } from "react"
import { getRand, getRandTN } from "../myCodes/Util"
import { fetchDocument } from "../myCodes/Database"




 export const useGuest = () => {
     const [GID, setGID] = useState(getRandTN(17))

     const checkGID = async () => { 
    await fetchDocument('User', GID)
    .then((data) => {
        if(data == undefined){
            localStorage.setItem("GuestID", JSON.stringify(GID));
            

        }
    })
           
    }


   useEffect(()=>{
    if (JSON.parse(localStorage.getItem("GuestID"))) { 
        
    } else{
     checkGID()
    }
   }, []) 

    return JSON.parse(localStorage.getItem("GuestID"))
}

