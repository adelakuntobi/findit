import React, { useEffect, useState } from 'react'
import theSVG1 from '../images/theSVG4.svg'
import { BsArrowLeftShort } from 'react-icons/bs'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Flex from '../containers/flex'
import Shopcart from './Shopcart'


function Cart({ cart }) {
  const [price, setPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    var items = 0;
    var price = 0

    cart.forEach(item => {
      items += item.quantity;
      price += item.quantity * item.price;
    })

    setTotalItems(items)
    setPrice(price)

  }, [cart, price, setPrice, totalItems, setTotalItems])

  return (
    <section className="container mx-auto pt-6 relative">
      <div className="bg-orange-500 opacity-25 z-11 absolute"></div>
      <Flex className="justify-between mb-6 w-10/12 mx-auto">
        <h1 className="text-5xl font-black">My Cart</h1>
        <Flex className="justify-between">
          <h2 className="text-3xl font-black mr-5">$ {price}</h2>
          <Link className="hidden md:block" to="/">
            <button className="rounded py-2 px-5 bg-orange text-white mr-4 flex justify-center items-center">
              <BsArrowLeftShort className="text-2xl" />
        Continue Shopping</button>
          </Link>
        </Flex>
      </Flex>
      <Flex className={price ? "hidden" : "justify-center w-10/12 mx-auto"}>
        <img className="block w-6/12 cart" src={theSVG1} alt="" />
        <h1 className="text-5xl font-bold italic text-orange-500">Your cart is empty</h1>
      </Flex>
      <Flex className="flex-col ">
        {
          cart.map((item) => (
            <Shopcart key={item.id} itemData={item} />
          ))
        }
      </Flex>
    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart)
