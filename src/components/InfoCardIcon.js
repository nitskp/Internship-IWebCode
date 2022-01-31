import React from 'react'

const InfoCardIcon = (props) => {
  const infoIcon = props.infoIcon;
  const isImage = props.isImage;
  if(isImage){
    return(
      <img src={infoIcon} alt="icon" width="50px" height="50px"/>
    )
  }
  else{
    const iconClassName = props.infoIcon
    return(
      <i className={iconClassName}></i>
    )
  }
}

export default InfoCardIcon
