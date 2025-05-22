import React from "react";
import { Link } from "react-router-dom";

const Accordianfollowers = () => {
  return (
    <div className="w-[90%] mx-auto py-20">
      <Link to="/faqs" className="py-7">
        <h1 className="text-center font-bold text-2xl md:text-xl sm:text-lg bg-blue-950 text-white w-[30%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  p-5 rounded-4xl mx-auto">
          Frequently Asked Questions
        </h1>
      </Link>
      <div className=" flex justify-center">
        <div className="join join-vertical">
          <div className="collapse collapse-arrow join-item border-base-400 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">
              Can you get banned from tiktok by purchasing followers?
            </div>
            <div className="collapse-content text-sm">
              No. If you buy followers on TikTok, you cannot get blacklisted.{" "}
              <br /> These are being purchased by millions of other individuals,
              including celebrities, <br /> therefore the TikTok algorithm is
              tolerant of it. It's a well-liked strategy for growing your
              followers.{" "}
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-400 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">
              Why do followers matter on Tiktok?
            </div>
            <div className="collapse-content text-sm">
              Not everyone uses the app to the same extent as others, and not
              everyone is <br />
              listed on the main page or instantly famous. 'Popularity' these
              days also heavily depends <br /> on a person's number of
              followers. An individual's impact and reach on the app <br />{" "}
              increase with their number of followers and hence you can monetize
              your account.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-400 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">
              Can I customize the followers I want?
            </div>
            <div className="collapse-content text-sm">
              Yes, our service offers flexibility. You can choose from various{" "}
              <br />
              packages based on your specific needs and preferences.{" "}
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-400 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">
              What impact does buying followers have on my Tiktok Profile?
            </div>
            <div className="collapse-content text-sm">
              Buying followers increases the exposure of your account, possibly{" "}
              <br />
              bringing in more natural engagement and brand opportunities.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-400 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">
              How early can we see the results after purchasing?
            </div>
            <div className="collapse-content text-sm">
              In most cases, you will see results instantly on your profile.If
              you experience a delay, <br /> it means we are waiting for an
              update or that TikTok is making some algorithmic changes.{" "}
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-400 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg md:text-lg sm:text-sm font-bold">
              Is it safe to buy TikTok Followers?
            </div>
            <div className="collapse-content text-sm">
              Absolutely. We prioritize the security and privacy of our <br />
              clients. Our methods are compliant with TikTok’s terms of service,
              ensuring a safe <br />
              and risk-free experience for our customers.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordianfollowers;
