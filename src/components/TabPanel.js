import React from 'react'
import EachItem from './EachItem'


function TabPanelJs({data,category}) {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 w-10/12">
    {
      data.map(product => {
      //  console.log(product.category)
       if(product.category === category){
        return <EachItem
        key={product.id} name={product.title}
        description={product.description} price={product.price}
        src={product.image} />
       }
       return ""
      })
    }
  </div>
  )
}

export default TabPanelJs
