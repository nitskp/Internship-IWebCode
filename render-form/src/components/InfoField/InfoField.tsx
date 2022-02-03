import React from 'react'
import './InfoField.css'

const InfoField = (props:{data:String}) => {
    const data = props.data;
  return (
    <p>
      {data}
    </p>
  )
}

export default InfoField
