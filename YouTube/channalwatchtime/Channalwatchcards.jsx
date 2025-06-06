import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Channalwatchcontent from "./Channalwatchcontent";

const ChannelwatchtimeCards = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Buy 1000 Youtube WatchTime",
      value: "channelwatch-1",
      type: "channelwatch",
      price: 33.0,
      features: [
        "Video: min 15-30 Minutes Long",
        "4-5 Videos Required",
        "Finishes in: 3-5 Days",
        "Safe and Secure Service",
      ],
    },
    {
      name: "Buy 2000 Youtube WatchTime",
      value: "channelwatch-2",
      type: "channelwatch",
      price: 65.0,
      features: [
        "Video: min 15-30 Minutes Long",
        "4-6 Videos Required",
        "Finishes in: 3-5 Days",
        "Safe and Secure Service",
      ],
    },
    {
      name: "Buy 3000 Youtube WatchTime",
      value: "channelwatch-3",
      type: "channelwatch",
      price: 99.0,
      features: [
        "Video: min 15-30 Minutes Long",
        "5-8 Videos Required",
        "Finishes in: 3-5 Days",
        "Safe and Secure Service",
      ],
    },
    {
      name: "Buy 4000 Youtube WatchTime",
      value: "channelwatch-4",
      type: "channelwatch",
      price: 120.0,
      features: [
        "Video: min 15-30 Minutes Long",
        "7-8 Videos Required",
        "Finishes in: 3-5 Days",
        "Safe and Secure Service",
      ],
    },
  ];

  const handleBuyNow = (plan) => {
    navigate("/buynowyoutube", { state: { selectedPlan: plan } });
  };

  // ... rest of the component remains the same
  return (
    <div className="w-full min-h-screen p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Pricing Plans</h1>
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
              <div className="relative flex flex-col items-stretch rounded-2xl p-6 border-2 border-[#001233] bg-white shadow-lg w-full sm:w-[90%] md:w-[95%] mx-auto">
                <div className="text-center bg-[#001233] py-7 rounded-bl-full rounded-tl-full rounded-tr-full rounded-br-full">
                  <span className="text-white font-medium">{plan.name}</span>
                </div>
                <div className="mt-4 pt-7 text-gray-800 text-2xl text-center font-semibold">
                  Price ${plan.price}
                </div>
                <ul className="py-7 w-[75%] mx-auto space-y-3">
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
                <div className="flex-1 flex items-end py-6">
                  <button
                    onClick={() => handleBuyNow(plan)}
                    className="px-3 py-2 rounded-lg w-[55%] mx-auto font-semibold text-sm duration-150 text-white bg-[#001222] hover:bg-gray-800 active:bg-indigo-700"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 text-white text-sm p-2 rounded-full z-10 shadow-lg transition-colors duration-200">
          &lt;
        </div>
        <div className="swiper-button-next absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-gray-400 hover:bg-gray-600 text-white text-sm p-2 rounded-full z-10 shadow-lg transition-colors duration-200">
          &gt;
        </div>
      </div>
      <Channalwatchcontent />
    </div>
  );
};

export default ChannelwatchtimeCards;
