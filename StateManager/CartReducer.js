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
         return {
            ...state,
            lineItems: [...state.lineItems, action.value],
         };
      }
       default:
        return state;
   }
};

