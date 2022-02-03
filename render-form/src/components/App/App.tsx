import React from "react";
import "./App.css";
import Brand from "../Brand/Brand";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import './App.css'

import brandImage from '../../assets/imgs/brandImage.png'

function App() {
  return (
    <div className="App">
      <Brand brandImage={brandImage}/>
      <Header/>
      <Form />
      <Footer/>
      {/* <Brand />
      <Header>
        <Heading/>
        <Breadcrumbs />
      </Header>
      <Form>
        <FormSection>
          {" "}
          * 6
          <Heading />
          <Details>
            Choice 1 - <Information />
            Choice 2 -{" "}
            <FormInput>
              <Label />
              <Input />
            </FormInput>
          </Details>
        </FormSection>
        <Captcha />
        <SubmitButton />
      </Form>
      <Footer /> */}
    </div>
  );
}

export default App;
