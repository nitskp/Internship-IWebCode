import React from "react";
import {Link} from 'react-router-dom'
import "../css/Icon.css"

const Icon = (props) => {
  const icon = props.icon + " fa-stack-1x fa-inverse";
  return (
    
      <span className="fa-stack fa-2x">
        <Link className="icon__link" to="/">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className={icon}></i>
        </Link>
      </span>
  );
};

export default Icon;
