
export const addToCart = (productID) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: productID
    }
  }
}

export const removeFromCart = (productID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: productID
    }
  }
}

export const clearCart = () => {
  return {
    type: "CLEAR_ALL_ITEMS",
    // payload: 
  }
}
export const adjustQuantity = (productID, value) => {
  return {
    type: "CHANGE_QUANTITY_OF_CART",
    payload: {
      id: productID,
      quantity: value
    }
  }
}
export const loadAllProducts = (item) => {
  return {
    type: "LOAD_ALL_PRODUCTS",
    payload: item
  }
}
