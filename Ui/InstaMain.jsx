import React from "react";
import { motion } from "framer-motion";
import "./InstaMain.css";
import { Link } from "react-router-dom";

const InstaMain = () => {
  return (
    <div className="p-h-insta">
      <div className="main-hero-insta">
        <motion.div
          className="image-hero-insta"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // Animate once when 50% in view
        >
          <img src="/123.svg" alt="Followers Cart" />
        </motion.div>

        {/* Text - Scroll-triggered animation */}
        <motion.div
          className="content-hero-insta flex"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-hero-insta  ">
            <h1>Buy Instagram Followers, Likes, and Views</h1>
            <p>
              Buy Instagram followers and unlock the perfect balance of
              affordability and authenticity. At FollowersCart, we understand
              the time and energy it takes to build a loyal audience — which is
              why we offer a powerful shortcut with real, active followers that
              keep your account safe from shadow bans and penalties. Our
              thoughtfully crafted packages are designed to elevate your profile
              without compromising on quality. No bots. No gimmicks. Just
              genuine growth that sets the stage for real success. Let us
              simplify your journey to influence — because with FollowersCart,
              reaching your Instagram goals is not just possible, it’s
              effortless.
            </p>
            <Link
              to="/Instagram/InstagramFollowers/Instafollowerscards"
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.95 }}
              className="bg-sky-500 border-2 border-sky-500 hover:bg-transparent hover:border-sky-500  text-white hover:text-sky-500 px-11 py-3 rounded mt-2 shadow-lg  transition"
            >
              Buy Instagram Followers
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InstaMain;
