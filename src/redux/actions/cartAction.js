export const addToCart = productId => {
    return { type: 'ADD_TO_CART', payload: productId }
};

export const removeCart = productId => {
    return { type: 'REMOVE_CART', payload: productId }
};


