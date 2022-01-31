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
          <Navbar />
          <FeatureSection />
        </div>
      
        <ChooseSection/>
        <WhyUsSection />
        <ReviewCarousel />

        <BlogPostSection />
        <Footer/> 
      {/*
      
      <div className="container">
        <BlogPostSection />
      </div>
      */}
    </>
  );
}

export default App;
