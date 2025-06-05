import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
function Wchoose() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 500], [-100, 100]); // scroll left to right

  return (
    <div class="main-Wchoose flex justify-center align-center relative w-full h-[70vh] overflow-hidden p-20 ">
      <motion.h1
        style={{ x }}
        className="absolute top-0 left-[-50px] text-[120px] md:text-[200px] font-bold text-gray-400 opacity-20 pointer-events-none select-none leading-none"
      >
        Why?
      </motion.h1>

      <div className="relative z-10 text-center px-4 ">
        <h2 className="text-2xl md:text-4xl font-[500] text-black max-w-2xl  mx-auto">
          We’re the #1 Choice for Thousands of Brands & Influencers
        </h2>
      </div>
    </div>
  );
}

export default Wchoose;
