import React from "react";
import Heading from "../Heading/Heading";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Header = () => {
  const heading = "Full Stack Engineer";
  const links = ["Remote Optional", "Product Engineering", "Full Time"];
  
  return (
    <div className="header">
      <Heading name={heading} type="h1" />
      <Breadcrumbs links={links} />
    </div>
  );
};

export default Header;
