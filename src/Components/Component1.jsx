import React, { useEffect } from 'react'
import Component2 from './Component2'
import { useDispatch } from 'react-redux'
import { get_posts } from '../Redux/Action/UserAction'

const Component1 = () => {
  
  return (
    <>
    {/* {
            myArray.map((i, index)=>(
                <div key={index} style={{backgroundColor:"aqua"}}>
                    <p>{i.name}</p>
                    <p>{i.email}</p>
                </div>
            ))
        } */}
        {/* <p>{brand}</p> */}
        <Component2/>
    </>
  )
}

export default Component1