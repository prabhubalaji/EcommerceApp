import {createStore, combineReducers} from 'redux'
import cartReducer from '../features/cart/reducer'

const rootreducer = combineReducers({
    cart: cartReducer
})

const store = createStore(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store