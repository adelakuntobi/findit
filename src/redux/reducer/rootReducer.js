import {combineReducers} from 'redux'
import products from './products';
import shopReducerFunction from './shopping-reducer'

const rootReducer = combineReducers({
  products: products,
  shop: shopReducerFunction
})

export default rootReducer;