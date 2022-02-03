import React, { Fragment } from "react";
import Link from "../Link/Link";
import './Breadcrumbs.css'

const Breadcrumbs = (props: { links: string[] }) => {
  const links = props.links;

  return (
    <div className="breadcrumbs-container">
      {links.map((ele, indx) => {
        return (
          
            <span key={"Breadcrumbs" + ele.toString()+ indx.toString()} className="breadcrumbs__item">
              <Link linkName={ele} />
              {indx != links.length - 1 ? " /" : ""}
            </span>
          
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
