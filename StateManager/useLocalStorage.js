import React, { useEffect } from 'react'
import { useAUTHListener } from './AUTHListener';
import { addToDatabase } from '@/app/myCodes/Database';

function useLocalStorage(state, dispatch, initialCartState) {
  const _uid = useAUTHListener() 
  const uid = _uid ? _uid.uid : 'noUser'


     useEffect(() => {
    if (JSON.parse(localStorage.getItem("Cart"))) { 
      //checking if there already is a state in localstorage
      dispatch({
        type: "SAVE_CART",
        value: JSON.parse(localStorage.getItem("Cart")), 
        //if yes, update the current state with the stored one
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initialCartState) {
      localStorage.setItem("Cart", JSON.stringify(state));
      

        addToDatabase('User', uid, 'cart', { state })

      //create and/or set a new localstorage variable called "state"
    }
  }, [state]);
  return (
    []
    
  )
}

export default useLocalStorage