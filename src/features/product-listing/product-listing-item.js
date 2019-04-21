import React from 'react'
import AddToCart from './add-btn'
import RemoveFromCart from './remove-btn'

export default function ProductListItem(props){

    return <div className="product-list-item">
                <div>Item:  {props.product.name}</div>
                <div>{props.product.description}</div>
                <img alt="Img not available" width={100} src={`/images/${props.product.image}`} />
                <div>${props.product.price}</div>
                <AddToCart cartItem={props.cartItem} addToCart={props.addToCart} product={props.product}/>            
                <RemoveFromCart removeFromCart={props.removeFromCart} cartItem={props.cartItem}/>
            </div>
}