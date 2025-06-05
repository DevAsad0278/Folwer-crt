import React from "react";
import img1 from "/socailmedia1.jpg"; // Replace with your image paths
import img2 from "/socailmedia2.jpg";
import img3 from "/socailmedia3.jpg";
import img4 from "/socailmedia4.jpg";

const AnimatedImageCards = () => {
  const images = [img1, img2, img3, img4];

  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto gap-4">
          {images.map((src, index) => (
            <a href="#_" key={index}>
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className={`rounded-xl ${
                  index % 2 === 0 ? "rotate-6" : "-rotate-12"
                } hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedImageCards;
