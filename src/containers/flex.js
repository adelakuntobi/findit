import React from 'react'

function Flex({ children,className }) {
  return (
    <div className={"flex items-center " + className}>
      {children}
    </div>
  )
}

export default Flex
