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
export const adjustQuantity = (productID, value) => {
  return {
    type: "CHANGE_QUANTITY_OF_CART",
    payload: {
      id: productID,
      qty: value
    }
  }
}
export const loadAllProducts = (productID) => {
  return {
    type: "LOAD_ALL_PRODUCTS",
    payload: item
  }
}
