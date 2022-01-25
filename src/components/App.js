import "../css/App.css";
import React from "react";
import Navbar from "./Navbar";
import FeatureSection from "./FeatureSection";
import ChooseSection from "./ChooseSection";
import WhyUsSection from "./WhyUsSection";
import GettingStartedSection from "./GettingStartedSection";
import ReviewCarousel from "./ReviewCarousel";
import BlogPostSection from "./BlogPostSection";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="blue">
        <div className="container">
          <Navbar />
          <FeatureSection />
        </div>
        <div className="container"></div>
      </div>
      <div className="container">
        <ChooseSection/>
      </div>
      <div className="container">
        <WhyUsSection />
      </div>
      <div className="container">
        <GettingStartedSection />
      </div>
      <div className="container">
        <ReviewCarousel />
      </div>
      <div className="container">
        <BlogPostSection />
      </div>
      <Footer/>
    </>
  );
}

export default App;
