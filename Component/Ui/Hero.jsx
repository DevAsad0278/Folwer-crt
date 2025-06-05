import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="p-h">
      <div className="main-hero">
        <motion.div
          className="image-hero"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // Animate once when 50% in view
        >
          <img src="/home1.svg" alt="Followers Cart" />
        </motion.div>

        {/* Text - Scroll-triggered animation */}
        <motion.div
          className="content-hero flex"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-hero flex flex-col ">
            <h1 className="text-4xl font-bold mb-4">
              Fuel Your Social Media Game – One Click, Unlimited Growth
            </h1>
            <p className="text-lg mb-4">
              No bots. No gimmicks. Just real, scalable results that turn your
              brand into a social powerhouse – trusted by creators, businesses,
              and agencies worldwide.
            </p>
            <Link
              to="/Facebook/FacebookFolowers/CardsFacebookFollowers"
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.95 }}
              className="bg-sky-500 border-2 border-sky-500 hover:bg-transparent hover:border-sky-500  text-white hover:text-sky-500 px-11 py-3 rounded mt-2 shadow-lg  transition"
            >
              BUY NOW
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
