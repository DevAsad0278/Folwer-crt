import React, { useState } from "react";

const SwipeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      src: "/socailmedia1.jpg",
      alt: "Slide 1",
    },
    {
      src: "/socailmedia2.jpg",
      alt: "Slide 2",
    },
    {
      src: "/socailmedia3.jpg",
      alt: "Slide 3",
    },
    {
      src: "/socailmedia4.jpg",
      alt: "Slide 4",
    },
    {
      src: "/socailmedia5.jpg",
      alt: "Slide 5",
    },
  ];

  const scrollCarousel = (direction) => {
    const totalSlides = slides.length;
    const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Carousel wrapper */}
        <div className="overflow-hidden relative rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="min-w-full" key={index}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
          onClick={() => scrollCarousel(-1)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
          onClick={() => scrollCarousel(1)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SwipeCarousel;
