export const addItemsToCart = (cartItems, cartItemsToAdd) => {
    const existedCartItems = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
    );

    if (existedCartItems) {
        return cartItems.map( cartItem => 
            cartItem.id === cartItemsToAdd.id 
            ? {...cartItem, quantity:cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems , {...cartItemsToAdd, quantity: 1}]
}

export const removeItemsFromCart = (cartItems, cartItemsToRemove) => {
    const existedCartItems = cartItems.find(
        cartItem => cartItem.id === cartItemsToRemove.id
    );
    
    if (existedCartItems.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemsToRemove.id);    
    }
    return cartItems.map( cartItem =>
        cartItem.id === cartItemsToRemove.id ?
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};

