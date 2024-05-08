import React, { useMemo, useState } from 'react'
const looper = (param)=>{
    console.log("looping")
    for(let i = 0; i < 10000000; i++){
        param += i
    }
}
const UseMemo = () => {
    const [num, setNum] = useState(0)
    const [count, setCount] = useState(0)
    const loo = useMemo(()=>looper(num),[])
  return (
    <>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}></button>
    </>
  )
}

export default UseMemo