export const initialCartState = {
   total: 0,
   lineItems: []
};
export const CartReducer = (state, action) => {
   switch (action.type){
      case "ADD_TO_CART": {
         return {
            ...state,
            total: action.value + state.total,
         };
      }
       default:
        return state;
   }
};

