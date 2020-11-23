import React from 'react'

function EachItem({src}) {
  return (
    <div className="flex flex-col lg:flex-row justify-between my-5">
      <img className="w-32 mx-auto lg:mr-4 object-contain" src={src} alt="ghghg" />
      <div className="flex justify-between flex-col py-5 text-center lg:text-left">
        <h1 className="break-words">Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5</h1>
        <p className="hidden">3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.</p>
        <h1 className="my-6 font-bold text-3xl">$109.00</h1>
        <div className="flex items-center justify-center lg:justify-start">
          <button className="rounded py-2 px-5 bg-orange text-white mr-4">Add To Cart</button>
          <button className="rounded py-2 px-5 bg-orange-700 text-white">View Item</button>
        </div>
      </div>
    </div>
  )
}

export default EachItem
