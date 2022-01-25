import React from 'react'

const ImageContainer = (props) => {
    const imageUrl = props.imageUrl;
    const altText = props.alttext;
    const size= props.size?props.size:{"width":"initial", "height":"initial"}
  return (
    <>
        <img src={imageUrl} alt={altText} 
        style={{
          width:size.width,
          height: size.height
        }}/>

    </>
  )
}

export default ImageContainer
// 740*560