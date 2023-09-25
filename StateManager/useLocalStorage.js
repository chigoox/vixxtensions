import React, { useEffect } from 'react'

function useLocalStorage(state, dispatch, initialCartState) {
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
      //create and/or set a new localstorage variable called "state"
    }
  }, [state]);
  return (
    []
    
  )
}

export default useLocalStorage