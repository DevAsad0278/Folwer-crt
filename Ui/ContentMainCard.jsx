import React from "react";
import { motion } from "framer-motion";
const ContentMainCard = () => {
  return (
    <motion.div
      className="ani container mx-auto px-4 py-10 w-[90%] m-auto  bg-white mt-10 mb-10"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="ani container mx-auto px-4 py-10 w-[90%] m-auto  bg-white mt-10 mb-10">
        <div className="font-bold text-4xl text-center mb-8">
          <h2>
            Unlock Rapid Social Media Growth – Get Real Followers, Likes, and
            Engagement with Just a Few Clicks!
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center text-center gap-15 py-10"></div>
      </div>
    </motion.div>
  );
};

export default ContentMainCard;
