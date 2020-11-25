import React from 'react'

function EachItem(props) {
  const { name, description, price, src } = props
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:justify-start my-5">
      <img className="w-32 mx-auto lg:ml-0 lg:mr-4 object-contain" src={src} alt="ghghg" />
      <div className="flex justify-between flex-col py-5 text-center lg:text-left">
        <h1 className="break-words">{name}</h1>
        <p className="hidden">{description}</p>
        <h1 className="my-6 font-bold text-3xl">$ {price}</h1>
        <div className="flex items-center justify-center lg:justify-start">
          <button className="rounded py-2 px-5 bg-orange text-white mr-4">Add To Cart</button>
          <button className="rounded py-2 px-5 bg-orange-700 text-white">View Item</button>
        </div>
      </div>
    </div>
  )
}

export default EachItem
