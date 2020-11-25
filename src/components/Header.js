import React from 'react'
import theSVG from '../images/theSVG1.svg'
import theSVG1 from '../images/theSVG4.svg'
function Header() {
  return (
    <header className="py-16 lg:py-24 overflow-hidden relative bg-orange-100">
      <div className="bg-orange-500 opacity-25 z-1 absolute"></div>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center container mx-auto w-full lg:w-11/12 px-5">
        <div className="w-full lg:w-1/2 z-10">
          <h1 className="font-extrabold text-4xl lg:text-5xl capitalize mt-8 md:mt-0 leading-tight">Find Products you Like with all Desired Features</h1>
          <p className="font-medium my-5 text-lg leading-relaxed">We are a platform devoted to helping you find all products you desire across all stores within and outside your location</p>
          <button className="flex items-center justify-center py-3 text-lg px-10 bg-orange rounded border-0 outline-none text-white">Shop Now</button>
        </div>
        <img className="hidden md:block lg:w-5/12 z-10" src={theSVG} alt="" />
        <img className="block md:hidden w-full z-10" src={theSVG1} alt="" />
      </div>
    </header>
  )
}

export default Header
