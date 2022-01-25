import React from 'react'
import "../css/Button.css"

const Button = (props) => {
    const buttonText = props.buttonText;
  return (
    <button className='btn btn-lg btn-danger'>
      {buttonText}
    </button>
  )
}

export default Button
