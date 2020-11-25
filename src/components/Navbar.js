import React, { useEffect } from 'react'
import logo from '../images/logo.svg'
import Flex from '../containers/flex'
import { HiShoppingCart } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
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
          <Flex className="hidden md:flex justify-start bg-gray-200 px-3 py-2 mx-4">
            {/* Search */}
            <BiSearch className="text-xl text-gray-600 mr-2" />
            <input type="search" placeholder="Search items, categories" className="w-64 px-2 py-1 border-0 outline-none bg-gray-100" />
          </Flex>
          <Link to="/login">
          <button className="hidden md:flex items-center justify-center py-3 px-8 bg-orange rounded border-0 outline-none text-white">
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
        <Flex className="bg-red-700 top-0 right-0 rounded-full text-white text-xs h-5 w-5 justify-center">2</Flex>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </nav>
  )
}

export default Navbar
