
export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find( i => i.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity + 1}
            : cartItem
        ) )
    }

    return [...cartItems, {...cartItemToAdd,quantity:1} ]

}

export const removeItem = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find( item => item.id === cartItemToRemove.id );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter( item => item.id !== cartItemToRemove.id );
    }

    return cartItems.map( item => item.id === cartItemToRemove.id ? {...item,quantity:item.quantity - 1} : item  );
}