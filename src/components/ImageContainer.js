import React from 'react'

const ImageContainer = (props) => {
    const imageUrl = props.imageUrl;
    const altText = props.alttext;
  return (
    <>
        <img src={imageUrl} alt={altText}/>

    </>
  )
}

export default ImageContainer
