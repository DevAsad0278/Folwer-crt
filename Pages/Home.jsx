import React from "react";
import Hero from "../Ui/Hero";
import Wchoose from "../Ui/Wchoose";
import StatisticMain from "../Ui/StatisticMain";
import StepSection from "../Ui/StepsSS";
import ContentMainCard from "../Ui/ContentMainCard";
import MainCardHero from "../Ui/MainCardHero";
import FacebookMain from "../Ui/FacebookMain";
import InstaMain from "../Ui/InstaMain";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestimonialSlider from "../Ui/TestimonialSilder";

const Home = () => {
  return (
    <div>
      <Hero />
      <Wchoose />
      <StepSection />
      <ContentMainCard />
      <MainCardHero />
      <FacebookMain />
      <InstaMain />
      <StatisticMain />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
