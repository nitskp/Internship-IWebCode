import "./App.css";
import brandImg from "../../assets/imgs/render-logo.png";
import leverLogo from "../../assets/imgs/lever-logo-full.svg";
import {Form} from "../Form";

function App() {
  return (
    <div className="app">
      {/* Brand Image  */}
      <div className="brand">
        <div className="brand-image-container">
          <img src={brandImg} alt="brandImg" className="brand-img" />
        </div>
      </div>
      {/* Header  */}
      <header className="app-header">
        <h2>Full-Stack Engineer</h2>
        <div className="breadcrumbs">
          <span>Remote Optional /</span>
          <span>PRODUCT – ENGINEERING /</span>
          <span>FULL-TIME</span>
        </div>
      </header>
      {/* Form  */}
      <Form />

      {/* Footer  */}
      <footer className="app-footer">
        <div className="footer__link-container">
          <a href="https://www.google.com/">Render Home Page</a>
        </div>
        <div className="footer__content">
          Jobs powered by
          <img src={leverLogo} alt="lever logo" className="lever-logo" />
        </div>
      </footer>
    </div>
  );
}

export default App;
