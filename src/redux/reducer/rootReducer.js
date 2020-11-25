import { combineReducers } from 'redux'
import products from './products';
import shopReducerFunction from './shopping-reducer'

// Using a combine reducers function to combine the reducers
const rootReducer = combineReducers({
  products: products,
  shop: shopReducerFunction
})

export default rootReducer;