import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const saveToLocalStorage = (state) => {
  try {
    const serialState = JSON.stringify(state)
    localStorage.setItem('state', serialState)
  }
  catch (err) {
    console.log(err)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serialState = localStorage.getItem('state')
    if (serialState === null) return undefined
    return JSON.parse(serialState)
  }
  catch (err) {
    console.log(err)
    return undefined
  }
}

const normalState = loadFromLocalStorage();
const store = createStore(
  rootReducer,
  normalState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(() => saveToLocalStorage(store.getState()))
export default store;
