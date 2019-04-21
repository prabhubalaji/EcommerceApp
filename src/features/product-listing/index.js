import React from 'react'
import ProductListItem from './product-listing-item'
import {connect} from 'react-redux'

const ProductListing = (props) => {
    return <div className='product-listing'>
        {
            props.products.map( product => 
                <ProductListItem product={product} cartItem={props.cart.filter(item=> item.id === product.id)[0]} addToCart={props.addToCart} removeFromCart={props.removeFromCart}/>
            )
        }
    </div>
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({type: 'REMOVE', payload: item})
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ProductListing);