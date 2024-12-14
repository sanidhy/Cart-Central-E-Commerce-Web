import { ADD_TO_CART,REMOVE_FROM_CART,UPDATE_CART_QUANTITY,CLEAR_CART } from "../actionsType";


export const addToCart=(item)=>({
    type:ADD_TO_CART,
    payload:item
});


export const removeFromCart=(itemID)=>({
    type:REMOVE_FROM_CART,
    payload:itemID
});


export const update_cart_quantity=(itemID,quantity)=>({
    type: UPDATE_CART_QUANTITY,
    payload:{itemID,quantity}
});



export const clear_cart=()=>({
    type:CLEAR_CART,
});