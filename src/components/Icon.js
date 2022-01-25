import React from "react";
import {Link} from 'react-router-dom'

const Icon = (props) => {
  const icon = props.icon + " fa-stack-1x fa-inverse";
  return (
    <Link to="/">
      <span class="fa-stack fa-2x">
        <i class="fas fa-circle fa-stack-2x"></i>
        <i className={icon}></i>
      </span>
    </Link>
  );
};

export default Icon;
