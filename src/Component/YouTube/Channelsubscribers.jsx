import React from "react";
import { TbHandTwoFingers } from "react-icons/tb";
import Channelcards from "./components/channelsubscribers/Channelcards";
import Channalsubscribercontent from "./components/channelsubscribers/channalsubscribercontent";
import Accordiansubscriber from "./components/channelsubscribers/Accordiansubscriber";
const Channelsubscribers = () => {
  return (
    <>
      <div className=" hero-section-tiktok sm:mim-w-fit w-full">
        <div className="">
          <div className="text-white py-5 leading-8 text-center sm:text-base md:text-lg lg:text-xl  font-semibold">
            Buy Youtube Subscribers
            <br />
            with PayPal, Stripe | Real and Cheap
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-black text-sm sm:text-base md:text-lgfont-medium py-6 flex items-center justify-center gap-2">
          Swipe <TbHandTwoFingers className="text-amber-300" /> left/right to
          change packages.
        </div>
      </div>
      <Channelcards />
      <Channalsubscribercontent />
      <Accordiansubscriber />
    </>
  );
};

export default Channelsubscribers;
