import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import FemaleFollowerscontent from "./FemaleFollowers-content";

const CardsFemaleFollowers = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Buy 250 Facebook Female Followers",
      value: "female-1",
      type: "femalefollowers", // Add type
      price: 11.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Only Female Accounts",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 500 Facebook Female Followerss",
      value: "female-2",
      type: "femalefollowers",
      price: 19.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Only Female Accounts",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 1000 Facebook Female Followers",
      value: "female-3",
      type: "femalefollowers",
      price: 32.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Only Female Accounts",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 2500 Facebook Female Followers",
      value: "female-4",
      type: "femalefollowers",
      price: 85.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Only Female Accounts",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 5000 Facebook Female Followers",
      value: "female-5",
      type: "femalefollowers",
      price: 160.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Only Female Accounts",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 10000 Facebook Female Followers",
      value: "female-6",
      type: "femalefollowers",
      price: 350.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Only Female Accounts",
        "Instant Delivery",
      ],
    },
  ];

  const handleBuyNow = (plan) => {
    navigate("/BuyNowInstagram", { state: { selectedPlan: plan } });
  };

  // ... rest of the component remains the same
  return (
    <div className="w-full min-h-screen p-10">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-[90%] mx-auto"
        >
          {plans.map((plan, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative flex flex-col justify-between rounded-2xl p-6 border-2 border-[#001233] bg-white shadow-lg w-full sm:w-[90%] md:w-[95%] h-[450px] mx-auto">
                <div
                  className={`text-center bg-[#001233] ${
                    idx < 3 ? "py-7" : "py-7"
                  }  px-5 rounded-bl-full rounded-tl-full rounded-tr-full rounded-br-full`}
                >
                  <span className="text-white font-medium">{plan.name}</span>
                </div>
                <div className="mt-4 pt-7 text-gray-800 text-2xl text-center font-semibold">
                  Price ${plan.price}
                </div>
                <ul className="py-4 w-[75%] mx-auto space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#001233]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex-1 flex items-end py-4">
                  <button
                    onClick={() => handleBuyNow(plan)}
                    className="px-3 py-2 rounded-lg w-[55%] mb-20 mx-auto font-semibold text-sm duration-150 text-white bg-[#001222] hover:bg-gray-800 active:bg-indigo-700"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev absolute top-1/2 left-[-40px] transform -translate-y-1/2  text-white text-sm p-2 rounded-full z-10 shadow-lg transition-colors duration-200">
          &lt;
        </div>
        <div className="swiper-button-next absolute top-1/2 right-[-40px] transform -translate-y-1/2  text-white text-sm p-2 rounded-full z-10 shadow-lg transition-colors duration-200">
          &gt;
        </div>
      </div>
      <FemaleFollowerscontent />
    </div>
  );
};

export default CardsFemaleFollowers;
