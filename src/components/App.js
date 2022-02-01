import "../css/App.css";
import React from "react";
import Navbar from "./Navbar";
import FeatureSection from "./FeatureSection";
import ChooseSection from "./ChooseSection";
import WhyUsSection from "./WhyUsSection";
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
    </>
  );
}

export default App;
