import React from 'react'

const InfoCardIcon = (props) => {
 
  const infoIcon = props.infoIcon;
  const isImage = props.isImage;
  const isReactIcon = props.isReactIcon;
  const ReactIcon = props.ReactIcon;
  
  if(isImage){
    return(
      <img src={infoIcon} alt="icon" width="50px" height="50px"/>
    )
  }
  else if(isReactIcon){
    return(
      <span>
      {ReactIcon[0]}
      </span>
      
    )
    
  }
  else{
    return(
      <></>
    )
  }
}

export default InfoCardIcon
