'use client'
import { createContext, useContext, useMemo, useReducer, useState } from "react";
import { CartReducer, initialCartState } from "./CartReducer";
import useLocalStorage from "./useLocalStorage";
import { AUTH } from "@/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const CartContext = createContext()

export const CartWrapper = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, initialCartState);
    const [user, setUser] = useState({})

    const contextValue = useMemo(() => {
        return { state, dispatch };
    }, [state, dispatch]);

    useLocalStorage(state, dispatch, initialCartState)
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext);
}