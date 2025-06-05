import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import InstagramViewscontent from "./InstagarmViews-content";

const Cardsviews = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Buy 100 Instagram Views",
      value: "views-1",
      type: "views",
      price: 1.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 250 Instagram Views",
      value: "views-2",
      type: "views",
      price: 3.5,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 500 Instagram Views",
      value: "views-3",
      type: "views",
      price: 5.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 1000 Instagram Views",
      value: "views-4",
      type: "views",
      price: 8.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 2500 Instagram Views",
      value: "views-5",
      type: "views",
      price: 15.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 5000 Instagram Views",
      value: "views-6",
      type: "views",
      price: 28.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Instant Delivery",
      ],
    },
    {
      name: "Buy 10000 Instagram Views",
      value: "views-7",
      type: "views",
      price: 49.0,
      features: [
        "Sustainable Service",
        "100% English Names",
        "Instant Delivery",
      ],
    },
  ];

  const handleBuyNow = (plan) => {
    navigate("/BuyNowInstagram", { state: { selectedPlan: plan } });
  };

  return (
    <div className="w-full min-h-screen px-4 py-8 sm:px-6 md:px-10">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {plans.map((plan, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative flex flex-col items-stretch rounded-2xl p-6 border-2 border-[#001233] bg-white shadow-lg w-full mx-auto">
                <div className="text-center bg-[#001233] py-7 rounded-full">
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

        {/* Navigation Arrows (hidden on small screens) */}
        <div className="swiper-button-prev hidden md:flex absolute top-1/2 left-[-20px] transform -translate-y-1/2 text-white text-sm p-2 rounded-full z-10 shadow-lg bg-[#001233]">
          &lt;
        </div>
        <div className="swiper-button-next hidden md:flex absolute top-1/2 right-[-20px] transform -translate-y-1/2 text-white text-sm p-2 rounded-full z-10 shadow-lg bg-[#001233]">
          &gt;
        </div>
      </div>

      <InstagramViewscontent />
    </div>
  );
};

export default Cardsviews;
