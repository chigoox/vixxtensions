import { filterObject } from "@/app/myCodes/Util";

export const initialCartState = {
   lineItems: []
};
export const CartReducer = (state, action) => {

    switch (action.type){
        case "SAVE_CART": {
            return action.value
      }
      case "ADD_TO_CART": {
          const stateQTY = state?.lineItems[action.value.priceID]?.Qty ? state?.lineItems[action.value.priceID].Qty : 0
          const actionQTY = action?.value?.Qty 
         return {
            ...state,
            lineItems: {...state.lineItems,  [action.value.priceID]:{...action.value, Qty: Number(actionQTY) + Number(stateQTY)}},
         };
      }
      case "SUB_FROM_CART": {
          const stateQTY = state?.lineItems[action.value.priceID]?.Qty ? state?.lineItems[action.value.priceID].Qty : 0
          const actionQTY = action?.value?.Qty 
         return {
            ...state,
            lineItems: {...state.lineItems,  [action.value.priceID]:{...action.value, Qty: (stateQTY - actionQTY < 0) ? 0 : stateQTY - actionQTY  }},
         };
      }
      case "SET_CART": {
          const stateQTY = state?.lineItems[action.value.priceID]?.Qty ? state?.lineItems[action.value.priceID].Qty : 0
          const actionQTY = action?.value?.Qty 
         return {
            ...state,
            lineItems: {...state.lineItems,  [action.value.priceID]:{...action.value, Qty: actionQTY  }},
         };
      }
      case "REMOVE_FROM_CART": {
         return {
            ...state,
            lineItems: filterObject(state.lineItems, items => {console.log(items); return(items != action.value)}),
         };
      }
      case "EMPTY_CART": {
         return {
            ...state,
            lineItems: {},
         };
      }
       default:
        return state;
   }
};

