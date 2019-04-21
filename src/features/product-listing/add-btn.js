import React from 'react'

export default function AddToCart(props) {
    return (<button onClick={() => props.addToCart(props.product)}>
                ADD TO CART({(props.cartItem && props.cartItem.quantity) || 0})
            </button>)
}