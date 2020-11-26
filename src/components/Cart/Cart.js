import React, { useEffect, useState } from 'react'
import theSVG1 from '../../images/theSVG4.svg'
import { BsArrowLeftShort } from 'react-icons/bs'
import { AiTwotoneDelete } from 'react-icons/ai'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Flex from '../../containers/flex'
import Shopcart from './Shopcart'
import { clearCart } from '../../redux/actions/shopping-action'
import StripeCheckout from 'react-stripe-checkout'
import Axios from 'axios'
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

toast.configure();


// General cart of the app
function Cart({ cart, clearCart }) { //Destructing the cart and clearCart props
  const [price, setPrice] = useState(0)   //Total price of the total items in the cart
  const [totalItems, setTotalItems] = useState(0)   //Total amount of products in the cart

  useEffect(() => {

    var items = 0;
    var price = 0

    // Looping through the items in the cart and getting all the items in the cart
    cart.forEach(item => {
      items += item.quantity;
      price += item.quantity * item.price; //Multiplying through all the items and multiplying it with their respective prices
    })

    setTotalItems(items)
    setPrice(price.toFixed(2)) //Making sure there aren't more two decimal place
    // Adding dependencies to the useEffect function
  }, [cart, price, setPrice, totalItems, setTotalItems])

  // A function to check if there are more than one item in the cart 



  const checkForPlural = () => {
    switch (totalItems) {
      case 1:
        return ""

      default:
        return "s"
    }
  }

  async function handleToken(token) {
    const response = await Axios.post("https://9s2fx.sse.codesandbox.io/checkout", {
      token
    })
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
  return (
    <section className="container mx-auto pt-6 relative">
      <div className="hidden md:block bg-orange-500 opacity-25 z-11 absolute"></div>
      <Flex className="justify-between mb-6 w-11/12 md:w-10/12 mx-auto">
        <h1 className="text-3xl md:text-5xl font-black">My Cart</h1>

        {/*
           If function to check if the are items in the cart. 
          If it returns true, it should return a button that clears the cart
          If not, it returns a button that redirects the user to continue shopping   */}
        {totalItems ?
          <button onClick={() => clearCart()}
            className="rounded py-2 px-5 bg-orange text-white md:mr-4 flex justify-center items-center">
            <AiTwotoneDelete className="text-2xl" />
              Clear Cart
          </button> :
          <Link className="hidden md:block" to="/shop">
            <button className="rounded py-2 px-5 bg-orange text-white mr-4 flex justify-center items-center">
              <BsArrowLeftShort className="text-2xl" />
              Continue Shopping
              </button>
          </Link>
        }
      </Flex>
      <div className={totalItems ? "flex flex-col-reverse items-end mr-5" : "hidden"}>
        <StripeCheckout stripeKey="pk_test_51HrY1KKU5aNhPL14fRocG1QxnMAQQpsUYJtD4cPizOiv7W3KLp1z4pPaXvHboBQr2XBBY8mkYnob8fzJWntJsHYO002VkgjGj6"
          token={handleToken} billingAddress shippingAddress amount={price * 100}
          name="FindIt Cart" />
        <div className="flex justify-end items-center mb-3">
          <h2 className="text-3xl mr-4">Total: ({totalItems} item{checkForPlural()})</h2>
          <h2 className="text-3xl font-black">$ {price}</h2>
        </div>
      </div>
      <Flex className={totalItems ? "hidden" : "justify-center w-10/12 mx-auto flex-col"}>
        <img className="block w-9/12 md:w-4/12 cart" src={theSVG1} alt="" />
        <h1 className="text-2xl md:text-5xl mt-4 font-bold">Your cart is empty</h1>
        <Link className="block md:hidden mx-auto" to="/shop">
          <button className="rounded py-2 px-5 bg-orange text-white mr-4 flex justify-center items-center">
            <BsArrowLeftShort className="text-2xl" />
                    Continue Shopping</button>
        </Link>
      </Flex>
      <Flex className="flex-col ">
        {/* Looping through the cart props and displaying the data */}
        {
          cart.map((item) => (
            <Shopcart key={item.id} itemData={item} />
          ))
        }
      </Flex>
    </section>
  )
}

// Mapping the cart state to props 
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

// Making the clearCart Action to props
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
