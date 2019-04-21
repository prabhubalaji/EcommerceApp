const cartWithoutItem = (cart, item) => cart.filter(cartitem => cartitem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartitem => cartitem.id === item.id)[0]

const addToCart = (cart, item) => {
    const cartitem = itemInCart(cart, item)
    return cartitem === undefined ? 
    [...cartWithoutItem(cart, item), {...item,quantity: 1}]
    : [...cartWithoutItem(cart, item), {...cartitem,quantity: cartitem.quantity + 1}];
}

const removeFromCart = (cart, item) => {
    return item.quantity === 1 ? 
        [...cartWithoutItem(cart, item)] 
        : [...cartWithoutItem(cart, item),{...item,quantity: item.quantity - 1}]
}

const removeAllFromCart = (cart, item) => {
    return [...cartWithoutItem(cart, item)]
}

const cartReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD':
            return addToCart(state, action.payload);
        case 'REMOVE':
            return removeFromCart(state, action.payload)
        case 'REMOVEALL':
            return removeAllFromCart(state, action.payload)
        default:
            return state;
    }
}

export default cartReducer;