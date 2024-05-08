import React, { useEffect, useRef, useState } from 'react'
import "./Style.css"

const UseRef = () => {
    const [myInput, setMyInput] = useState("")
   const [counter, setCounter] = useState(0)
    
    const myRef = useRef(myInput)


    const mySecondRef = useRef(null)
    const changer = ()=>{
      const myElement = mySecondRef.current
      myElement.style.color = "red"
    }

    useEffect(()=>{
      setCounter(counter + 1)

    },[myInput])

    const setter = (e)=>{
      setMyInput(e.target.value)
      myRef.current = myInput
      console.log(myRef.current)
    }
  return (
    <>
    <p>{counter}</p>
    <p ref={mySecondRef}>i have a ref</p>
    <input value={myInput} type="text" onChange={(e)=>setter(e)} className='myInput'/>
    <p>{myRef.current}</p>
    <button onClick={()=> changer()}></button>
    </>
  )
}

export default UseRef