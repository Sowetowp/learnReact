import React, { memo } from 'react'

const UseCallBack = ({brand , setter}) => {
    console.log("i am rendering")
  return (
    <>
        <div>{brand}</div>
        <button onClick={setter}> second button</button>
    </>
  )
}

export default memo(UseCallBack)