import Heading from "../Heading";
import Breadcrumbs from "./Breadcrumbs";
import './Header.css'

const Header = () => {
  const heading = "Full-Stack Engineer";
  const links = ["Remote Optional", "Product Engineering", "Full Time"];
  
  return (
    <div className="header">
      <Heading name={heading} type="h2" />
      <Breadcrumbs links={links} />
    </div>
  );
};

export default Header;
