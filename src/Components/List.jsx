import React from 'react'
import Component1 from './Component1'

const List = () => {
    
    const myArray = [
        {
            name: "malik",
            email: "malik@gmail.com"
        },
        {
            name: "malik2",
            email: "malik@gmail.com"
        },
        {
            name: "malik3",
            email: "malik@gmail.com"
        }
    ]
  return (
    <>
        {
            myArray.map((i, index)=>(
                <div key={index} style={{backgroundColor:"aqua"}}>
                    <p>{i.name}</p>
                    <p>{i.email}</p>
                </div>
            ))
        }
        <Component1 myArray={myArray}/>
    </>
  )
}

export default List