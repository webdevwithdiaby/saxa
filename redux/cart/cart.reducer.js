import {CartActionsTypes} from "./cart.types";

import {addItemToCart,removeItem} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case CartActionsTypes.TOGGLE_CART_HIDDEN: 
            return ({
                ...state,
                hidden: !state.hidden
            })
        case CartActionsTypes.ADD_ITEM:
            return ({
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            })
        case CartActionsTypes.REMOVE_ITEM_FROM_CART:
            return ({
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id )
            })  
        case CartActionsTypes.REOMOVE_ITEM:
            return ({
                ...state,
                cartItems: removeItem(state.cartItems,action.payload)
            })      
        default:
            return state;
    }
}

export default cartReducer;