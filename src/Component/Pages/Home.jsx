import React from "react";
// import "../styles/background.css"; // adjust path as needed
import Hero from "../Ui/Hero";

import Wchoose from "../Ui/Wchoose";
import StatisticMain from "../Ui/StatisticMain";
import StepSection from "../Ui/StepsSS";
import ContentMainCard from "../Ui/ContentMainCard";
import MainCardHero from "../Ui/MainCardHero";
import FacebookMain from "../Ui/FacebookMain";
import InstaMain from "../Ui/InstaMain";
import TestimonialSlider from "../Ui/TestimonialSilder";
import SwipeCarousel from "../Ui/SwipeCarousel";
import AnimatedImageCards from "../Ui/AnimatedImageCards";
import ImageGrid from "../Ui/ImageGrid";

const Home = () => {
  return (
    <div>
      <Hero />
      <Wchoose />
      <SwipeCarousel />
      <StepSection />
      <ContentMainCard />
      <MainCardHero />
      <ImageGrid />
      <FacebookMain />
      <AnimatedImageCards />
      <InstaMain />
      <StatisticMain />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
