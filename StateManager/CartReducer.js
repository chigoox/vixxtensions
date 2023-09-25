export const initialCartState = {
   total: 0,
   lineItems: []
};
export const CartReducer = (state, action) => {


   switch (action.type){
    case "SAVE_CART": {
         return action.value
      }
      case "ADD_TO_CART": {
        console.log(state.lineItems)
        console.log(action.value)
         return {
            ...state,
            lineItems: {...state.lineItems,  [action.value.priceID]:action.value},
         };
      }
      case "REMOVE_FROM_CART": {
         return {
            ...state,
            lineItems: {...state.lineItems, [action.value.priceID]:{...action.value, Qty: action.value.Qty + state.lineItems.priceID.Qty}},
         };
      }
       default:
        return state;
   }
};

