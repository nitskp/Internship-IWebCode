import React from 'react'
import './Brand.css'

const Brand = (props: {brandImage:string}) => {
  return (
    <div className='img-container'>
      <img src={props.brandImage} alt="Brand Image" />
    </div>
  )
}

export default Brand
