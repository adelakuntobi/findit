import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.svg'
import Flex from '../../containers/flex'
import { HiShoppingCart } from 'react-icons/hi'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Navbar({ cart }) {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }
  const [cartNum, setCartNum] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    let count = 0
    cart.forEach(item => {
      count += item.quantity
    });
    setCartNum(count)
  }, [cart])
  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <nav className={navbarClasses.join(" ") + " overflow-hidden navbar bg-white shadow-b-lg"}>
      <Flex className="justify-between container mx-auto py-6 ">
        <Link to="/">
          <img className="ml-4 md:ml-0 w-32 md:w-auto" src={logo} alt="logo" />
        </Link>
        <Flex className="justify-between ">
          <Link to="/login">
            <button className="hidden md:flex items-center justify-center py-2 px-6 bg-orange rounded border-0 outline-none text-white">
              {/* Login */}
              <FaUser className="text-lg mr-2" />
        Login
      </button>
          </Link>
          <Link to="/cart">
            <Flex className="relative justify-center px-8">
              {/* Cart */}
              <HiShoppingCart className="text-lg mr-2" />
        Cart
        <Flex className={cartNum ? "bg-red-700 top-0 right-0 rounded-full text-white text-xs h-5 w-5 justify-center" : "hidden"}>{cartNum}</Flex>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </nav>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Navbar)
