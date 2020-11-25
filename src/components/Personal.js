import React from 'react'

function Personal() {
  return (
    <section className="container mx-auto flex justify-between items-center w-8/12">
      <img className="w-4/12 mx-6 " src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="cart" />
      <div className="flex justify-between flex-row md:flex-col text-left mx-8">
        <div>
          <h1 className="text-3xl font-bold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
          <p className="my-4 text-lg">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
          <h2 className="text-5xl font-extrabold">$ 15</h2>
        </div>
        <div>
          {/* <label htmlFor="quantity">Quantity:</label> */}
          <input min="1" type="number" name="quantity" />
        </div>
        <button className="rounded py-2 px-5 bg-orange text-white mr-4">Add To Cart</button>
      </div>
    </section>
  )
}

export default Personal
