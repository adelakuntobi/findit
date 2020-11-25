import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeFromCart,adjustQuantity } from '../redux/actions/shopping-action'

function Shopcart(props) {
  const { itemData, removeFromCart, adjustQuantity } = props

  const [inputValue, setInputValue] = useState(itemData.quantity)
  const changeHandler = (e) => {
    setInputValue(e.target.value);
    adjustQuantity(itemData.id, e.target.value)
  }
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center w-8/12 my-6">
      <img className="w-6/12 md:w-3/12 mx-6 " src={itemData.image} alt="cart" />
      <div className="flex justify-between flex-col text-left mx-8 items-start">
        <div>
          <h1 className="text-xl font-bold">{itemData.title}</h1>
          <p className="my-4">{itemData.description}</p>
          <h2 className="text-3xl font-extrabold">$ {itemData.price}</h2>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input min="1" type="number" name="quantity" value={inputValue} onChange={changeHandler} />
        </div>
        <button onClick={() => removeFromCart(itemData.id)}
          className="rounded py-2 px-5 bg-orange text-white mr-4">Delete</button>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
  }
}


export default connect(null, mapDispatchToProps)(Shopcart)
