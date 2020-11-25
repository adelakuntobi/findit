import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/shopping-action'

function Personal({ addToCart, currentItem }) {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full md:w-8/12 py-12">
      <img className="w-1/2 md:w-4/12 mx-6 " src={currentItem.image} alt={currentItem.title} />
      <div className="flex justify-between flex-col text-left mx-4 md:mx-8">
        <div>
          <h1 className="text-3xl font-bold">{currentItem.title}</h1>
          <p className="my-4 text-lg">{currentItem.description}</p>
          <h2 className="text-5xl font-extrabold">$ {currentItem.price}</h2>
        </div>
        <button onClick={() => addToCart(currentItem.id)}
          className="rounded py-2 px-5 bg-orange text-white mr-4">Add To Cart</button>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => ({
  currentItem: state.shop.currentItem
})

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    // loadAllProducts: (id) => dispatch(loadAllProducts(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal)
