import React from 'react'
import {connect} from 'react-redux'

const sort= (items) => {
    return items.sort((a,b) => (a.id - b.id))
}

const totalPrice = (items) => {
    return items.map((item) => {
        return item.price * item.quantity
    })
    .reduce((sum, value) => sum + value)
    
}
const Cart = (props) => {
    return props.cart.length ? (<table border='1' cellSpacing='0' cellPadding='5'>
                <thead>
                    <tr>
                    <th>NAME</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th colSpan='3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sort(props.cart).map((item) => 
                        <tr>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price * item.quantity}</td>
                                <td><button onClick={() => props.addToCart(item)}>+</button></td>
                                <td><button onClick={() => props.removeFromCart(item)}>-</button></td>
                                <td><button onClick={() => props.removeAllFromCart(item)}>RemoveAll</button></td>
                        </tr> 
                        )
                    }
                    <tr>
                        <td colSpan='2'>Total Price</td>
                        <td>{totalPrice(props.cart)}</td>
                        <td colSpan='3'><button onClick={() => alert('TOTAL AMOUNT TO PAY :'+totalPrice(props.cart))}>Checkout</button></td>
                    </tr>
                </tbody>
            </table>) : <h3>No Items Found In the Cart</h3>
}

function mapStateToProps(state) {
 return {
     cart: state.cart
 }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({type: 'REMOVE', payload: item})
        },
        removeAllFromCart: (item) => {
            dispatch({type: 'REMOVEALL', payload: item})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)