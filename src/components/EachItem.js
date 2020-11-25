import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, loadAllProducts } from '../redux/actions/shopping-action'

function EachItem(props) {
  const { productData, addToCart, loadAllProducts } = props

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:justify-start my-5">
      <img className="w-32 mx-auto lg:ml-0 lg:mr-4 object-contain" src={productData.image} alt={productData.title} />
      <div className="flex justify-between flex-col py-5 text-center lg:text-left">
        <h1 className="break-words">{productData.title}</h1>
        <p className="hidden">{productData.description}</p>
        <h1 className="my-6 font-bold text-3xl">$ {productData.price}</h1>
        <div className="flex items-center justify-center lg:justify-start">
          <button onClick={() => addToCart(productData.id)}
            className="rounded py-2 px-5 bg-orange text-white mr-4">Add To Cart</button>
          <Link to={`/product/${productData.id}`}>
            <button onClick={() => loadAllProducts(productData)}
             className="rounded py-2 px-5 bg-orange-700 text-white">View Item</button>
          </Link>
        </div>

      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadAllProducts: (id) => dispatch(loadAllProducts(id)),
  }
}

export default connect(null, mapDispatchToProps)(EachItem)
