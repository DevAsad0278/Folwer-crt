import React from "react";
import { motion } from "framer-motion";
import "./FacebookMain.css";
import { Link } from "react-router-dom";

const FacebookMain = () => {
  return (
    <div className="p-h-insta">
      <div className="main-hero-insta">
        <div className="text-hero-insta  ">
          <motion.div
            className="content-hero-insta flexflex-col "
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1>Buy TikTok Followers, Likes, and Views</h1>
            <p>
              Buy TikTok likes and watch your videos rise to the spotlight —
              faster, louder, and brighter! Every like boosts your visibility,
              reach, and viral potential, turning your content into a magnet for
              attention. After all, on TikTok, every single like counts. We get
              it — getting likes isn’t always easy. That’s why FollowersCart
              makes it simple, fun, and incredibly effective. With just a few
              clicks, you can power up your video and let the algorithm work its
              magic. Ready to shine? Get your TikTok likes now and watch your
              channel grow like never before!
            </p>
          </motion.div>
          <Link
            to="/TikTok/TiktokLikes/Cardslikes"
            // whileHover={{ scale: 1.1 }}
            // whileTap={{ scale: 0.95 }}
            className="bg-sky-500 border-2 border-sky-500 hover:bg-transparent hover:border-sky-500  text-white hover:text-sky-500 px-11 py-3 rounded mt-2 shadow-lg  transition"
          >
            Buy TikTok Likes
          </Link>
        </div>
        <motion.div
          className="image-hero-insta"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // Animate once when 50% in view
        >
          <img src="/insta-img.svg" alt="Followers Cart" />
        </motion.div>

        {/* Text - Scroll-triggered animation */}
        {/* <motion.div
               className="content-hero-insta flex"
               initial={{ opacity: 0, y: -50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
               viewport={{ once: true, amount: 0.5 }}
             >
        </motion.div> */}
      </div>
    </div>
  );
};

export default FacebookMain;
