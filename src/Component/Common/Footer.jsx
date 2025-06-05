import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToTop = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="text-white body-font bg-[#001233]">
      <div className="container px-5 py-10 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col w-[90%] mx-auto">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex font-medium items-center md:justify-start justify-center text-white">
            <img src="/logo.svg" alt="logo" className="w-70 h-20" />
          </a>
          <p className="mt-2 text-sm font-semibold leading-6 text-white">
            Followerscart: Your Partner In Social Media Success. Your struggle
            to buy Premium-Quality, Cheap, and Reliable Social Media Growth
            Services ends here.
          </p>
        </div>

        <div className="flex justify-between flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center w-full">
          {/* Our Services */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-2">
            <h2 className="font-medium text-white tracking-widest text-xl mb-3">
              Our Services
            </h2>
            <nav>
              <ul className="list-none leading-9 space-y-2">
                <li>
                  <button
                    onClick={() =>
                      handleScrollToTop("/TikTok/TiktokLikes/Cardslikes")
                    }
                    className="text-white hover:text-sky-300"
                  >
                    Buy TikTok Likes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleScrollToTop("/TikTok/TiktokFollowers/PricingCards")
                    }
                    className="text-white hover:text-sky-300"
                  >
                    Buy TikTok Followers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleScrollToTop(
                        "/Instagram/InstagramReelsViews/CardsReelsViews"
                      )
                    }
                    className="text-white hover:text-sky-300"
                  >
                    Buy Instagram Reel Views
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleScrollToTop(
                        "/Facebook/FemaleFollowers/CardsFemaleFollowers"
                      )
                    }
                    className="text-white hover:text-sky-300"
                  >
                    Buy Facebook Female Followers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      handleScrollToTop(
                        "/Facebook/EnglishFollowers/CardsEngFollowers"
                      )
                    }
                    className="text-white hover:text-sky-300"
                  >
                    Buy Eng Facebook Followers
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Policies */}
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="font-medium text-white text-xl">
              Policies & Support
            </h2>
            <nav>
              <ul className="list-none leading-9 mb-10 space-y-2">
                <li>
                  <button
                    onClick={() => handleScrollToTop("/TrackOrder")}
                    className="text-white hover:text-sky-300"
                  >
                    Track Order
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToTop("/RefundPolicy")}
                    className="text-white hover:text-sky-300"
                  >
                    Refund Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScrollToTop("/PrivacyPolicy")}
                    className="text-white hover:text-sky-300"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="font-medium text-white text-lg mb-3">
              Contact Info
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <p className="text-white">
                  205 Kings Road, Fair Gate House, Birmingham, England, B112AA
                </p>
              </li>
              <li>
                <p className="text-white">Phone: +447862100023</p>
              </li>
              <li>
                <p className="text-white">Mobile: +447862100023</p>
              </li>
              <li>
                <p className="text-white">Email: info@followerscart.com</p>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div className="pb-4">
        <div className="flex justify-center items-center gap-2">
          <FaRegCopyright className="text-white" />
          <div className="text-white text-center">
            2025 Followers Cart | All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
