import React, { useContext, useReducer } from 'react'
import { myContext } from '../App'


const initialtodo = [
  {
    task: "learn react",
    complete: false
  },
  {
    task: "learn redux",
    complete: false
  }
]
const reducer = (value, action)=>{
  switch(action.type){
    case "yes":
      return value.map((val, index)=>{
        if(val.task  === action.task1){
          return {...val, complete: !val.complete};

        }else{
          return val
        }
      })
    default:
      return state
  }
}
const Component4 = () => {
  

  const {brand} = useContext(myContext)
  const [todo, dispatch] = useReducer(reducer, initialtodo)
  return (
    <>
      <p style={{fontSize:"70px"}}>{brand}</p>
      <div style={{backgroundColor:"blue"}}>Component4</div>
      {
        todo.map((todo, index)=>(
          <div key={index} style={{display:"flex"}}>
            <input checked={todo.complete} onChange={()=>dispatch({type: "yes", task1: todo.task})} type="checkbox" />
            <p>{todo.task}</p>
            <p>{todo.complete && "complete"}</p>
          </div>

        ))
      }
    </>
  )
}

export default Component4