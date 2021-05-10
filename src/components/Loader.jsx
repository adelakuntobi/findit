import React from 'react'

const Loader = () => {
  return (
    <div className="grid place-items-center h-screen w-full">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
