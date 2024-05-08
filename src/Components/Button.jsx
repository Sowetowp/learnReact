import React from 'react'

const Button = (props) => {
    const {nameOfButton} = props
  return (
    <button>{nameOfButton}</button>
  )
}

export default Button