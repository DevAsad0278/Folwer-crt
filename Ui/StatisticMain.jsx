import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { end: 100000, label: "Followers Delivered" },
  { end: 1800, label: "Satisfied Clients" },
  { end: 99.8, label: "Satisfaction Rate", decimals: 1, suffix: "%" },
  { end: 100, label: "Secure Transactions", suffix: "%" },
];

const StatisticMain = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="body-font bg-[#09117ee3] text-white">
      <div className="container px-5 py-24 mx-auto flex flex-wrap gap-2">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font text-5xl mb-4 text-white">
              Why Thousands Trust FollowersCart?
            </h1>
            <p className="leading-relaxed">
              At FollowersCart, numbers don’t just speak — they inspire. Our
              growing track record reflects the trust our clients place in us
              every day. Whether you’re a budding creator, a brand in bloom, or
              an influencer on the rise, we’re here to fuel your journey with
              proven performance and unmatched reliability.
            </p>
          </div>

          {stats.map((stat, idx) => (
            <div key={idx} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">
                {inView ? (
                  <CountUp
                    end={stat.end}
                    duration={10}
                    separator=","
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix || "+"}
                  />
                ) : (
                  0
                )}
              </h2>
              <p className="leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="/growth-img2.svg"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticMain;
