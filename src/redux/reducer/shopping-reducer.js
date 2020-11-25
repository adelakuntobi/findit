
// Initial states
const initialState = {
  products: [],
  cart: [],
  currentItem: null
}



const shopReducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_GOTTEN_SUCCESSFUL":
      return { //Adding the data gotten from the API to the state
        ...state,
        products: action.payload,
      }

    case "ADD_TO_CART":
      // Looping through the array and mapping the id gotten and getting the item object
      const item = state.products.find(prod => prod.id === action.payload.id);
      // To check if the item is in the cart and it returns true or false
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart ?   //If in cart, spread the cart and look for the object. if it is in the cart
          // then spread the object and increase the quantity number by one.
          state.cart.map((item) => item.id === action.payload.id ?
            { ...item, quantity: item.quantity + 1 } :      //If not add it to the cart array, add it to cart and set quantity to 1
            item) :
          [...state.cart, { ...item, quantity: 1 }],
      }

    case "REMOVE_FROM_CART":
      return {
        // Filter the cart and return every other object that does match the ID gotten
        ...state,
        cart: state.cart.filter(item =>
          item.id !== action.payload.id
        ),
      }

    case "CLEAR_ALL_ITEMS":
      // Removing everything in the cart array
      return {
        ...state,
        cart: []
      }


    case "CHANGE_QUANTITY_OF_CART":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: +action.payload.quantity } : item
        ),
      }

    case "LOAD_ALL_PRODUCTS":
      return {
        ...state,
        currentItem: action.payload
      }

    default:
      // console.log(state)
      return state;
  }
}

export default shopReducerFunction