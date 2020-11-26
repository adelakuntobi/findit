import React from 'react'
import Category from '../Shop/Category'
import Header from './Header'

function Fullpage() {
  return (
    // To merge the shop and the header
    <div>
      <Header />
      <Category />
    </div>
  )
}

export default Fullpage
