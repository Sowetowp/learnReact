import React, { useEffect } from 'react'
import Button from './Button'

const Malik = ({brand, color}) => {
  
  return (
    <>
    <div>Malik {brand} {color}</div>
    <Button nameOfButton={"Benz"}/>
    </>
  )
}

export default Malik