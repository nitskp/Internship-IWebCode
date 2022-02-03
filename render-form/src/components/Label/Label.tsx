import React from 'react'
import './Label.css'
const Label = (props:{labelValue:string, htmlFor:string}) => {
  return (
    <label htmlFor={props.htmlFor} className='input__label'>{props.labelValue}</label>
     
  )
}

export default Label
