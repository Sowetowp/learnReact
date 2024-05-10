import React, { createContext, useCallback, useState } from 'react'
import List from './Components/List'
import Component4 from './Components/Component4'
import UseState from './Components/UseState'
import UseRef from './Components/UseRef'
import Component1 from './Components/Component1'
import UseCallBack from './Components/UseCallBack'
import UseMemo from './Components/UseMemo'
import ReduxSample from './Components/ReduxSample'
import { Toaster } from 'react-hot-toast'

export const myContext = createContext()
const App = () => {
  const brand = "lexus"
  const [counter, setCounter] = useState(0)
  const setter = useCallback(()=>{
    setCounter(counter + 1)
  },[])
  return (
    <>
      {/* <List/>
      <Component4/> */}
      {/* <UseState/> */}
      {/* <UseRef/> */}
      {/* <myContext.Provider value={{brand}}> */}
      {/* <Component1/> */}
      {/* </myContext.Provider> */}
      {/* <UseCallBack counter={brand} setter={setter}/>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter + 1)}>app</button> */}
      {/* <UseMemo/> */}
      <ReduxSample/>
      <Toaster/>

    </>
  )
}

export default App