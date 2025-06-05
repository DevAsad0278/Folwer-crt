import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MainCardHero = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-15 py-10">
        <div class="relative flex w-80 flex-col rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-sky-500 to-sky-600">
            <FaSquareFacebook className="w-full my-3 text-8xl" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased ">
              FACEBOOK
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Boost your brand’s credibility with real Facebook followers and
              likes. We help you evolve from hidden potential to a powerful
              presence — the kind of transformation that takes your profile from
              overlooked to unforgettable.
            </p>
          </div>
          <Link
            to="/Facebook/FacebookFolowers/CardsFacebookFollowers"
            class="p-6 pt-0"
          >
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
            >
              Buy Facebook Followers
            </button>
          </Link>
        </div>
        <div class="relative flex w-80 flex-col transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-sky-500 to-sky-600">
            <FaSquareInstagram className="w-full my-3 text-8xl" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              INSTAGRAM
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Accelerate your Instagram growth with trusted third-party services
              delivering 100% real, active users. Whether you're aiming for more
              followers, views, likes, or comments — we help you build a strong,
              stable presence that stands out.
            </p>
          </div>
          <Link
            to="/Instagram/InstagramFollowers/Instafollowerscards"
            class="p-6 pt-0"
          >
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
            >
              Buy Instagram Followers
            </button>
          </Link>
        </div>
        <div class="relative flex w-80 flex-col transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-sky-500 to-sky-600">
            <AiFillTikTok className="w-full my-3 text-8xl" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              TIKTOK
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Make a bold impact on TikTok with real followers, likes, shares,
              and views. Unlock powerful visibility and unmatched growth — all
              in one place. At FollowersCart, we deliver everything you need to
              thrive on TikTok.
            </p>
          </div>
          <Link to="/TikTok/TiktokLikes/Cardslikes" class="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
            >
              Buy TikTok Likes
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainCardHero;
