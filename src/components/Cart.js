import React from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Flex from '../containers/flex'
import Shopcart from './Shopcart'

function Cart() {
  return (
    <section className="container mx-auto pt-6 relative">
      <div className="bg-orange-500 opacity-25 z-11 absolute"></div>
      <Flex className="justify-between mb-6 w-10/12 mx-auto">
        <h1 className="text-5xl font-black">My Cart</h1>
        <Flex className="justify-between">
          <h2 className="text-3xl font-black mr-5">$ 4500</h2>
          <Link className="hidden md:block" to="/">
            <button className="rounded py-2 px-5 bg-orange text-white mr-4 flex justify-center items-center">
              <BsArrowLeftShort className="text-2xl" />
        Continue Shopping</button>
          </Link>
        </Flex>
      </Flex>
      <Flex className="flex-col">
        <Shopcart />
        <Shopcart />
        <Shopcart />
      </Flex>
    </section>
  )
}

export default Cart
