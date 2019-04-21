import React from 'react'
 
export default function RemoveFromCart(props) {

     return props.cartItem ? <button onClick={() => props.removeFromCart(props.cartItem)}>
                Remove
            </button>
            : null
}