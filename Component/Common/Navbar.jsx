import React, { useState, useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  // Helper: unified navigation + scroll
  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false); // close mobile menu after click
  };

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(null), 150);
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Instagram",
      submenu: [
        {
          name: "Buy Followers",
          path: "/Instagram/InstagramFollowers/Instafollowerscards",
        },
        { name: "Buy Likes", path: "/Instagram/InstagarmLikes/CardsLikes" },
        { name: "Buy Views", path: "/Instagram/InstagramViews/Cardsviews" },
        {
          name: "Buy Reels Views",
          path: "/Instagram/InstagramReelsViews/CardsReelsViews",
        },
        {
          name: "Buy Story Views",
          path: "/Instagram/InstagramStoryViews/CardsStoryViews",
        },
        {
          name: "Buy Comments",
          path: "/Instagram/InstagramComments/ CardsComments",
        },
      ],
    },
    {
      name: "YouTube",
      submenu: [
        {
          name: "Buy Subscribers",
          path: "/Youtube/ChannelSubscriber/ChannelCards/ChannelCards",
        },
        { name: "Buy Views", path: "/YouTube/videoviews/Videoviewscards" },
        { name: "Buy Likes", path: "/YouTube/Videolikes/Videolikescards" },
        { name: "Buy Share", path: "/YouTube/videoshare/Videosharecards" },
        {
          name: "Buy Watch Time",
          path: "/YouTube/channalwatchtime/ChannelwatchtimeCards",
        },
        {
          name: "Buy Live Stream",
          path: "/YouTube/Lifestream/LifestreamCards",
        },
      ],
    },
    {
      name: "Facebook",
      submenu: [
        {
          name: "Buy Followers",
          path: "/Facebook/FacebookFolowers/CardsFacebookFollowers",
        },
        {
          name: "Buy Likes",
          path: "/Facebook/FacebookPageLikes/CardsFacebookPageLikes",
        },
        {
          name: "Female Follower",
          path: "/Facebook/FemaleFollowers/CardsFemaleFollowers",
        },
        {
          name: "English Follower",
          path: "/Facebook/EnglishFollowers/CardsEngFollowers",
        },
      ],
    },
    {
      name: "TikTok",
      submenu: [
        {
          name: "Buy Followers",
          path: "/TikTok/TiktokFollowers/PricingCards",
        },
        { name: "Buy Likes", path: "/TikTok/TiktokLikes/Cardslikes" },
        { name: "Page Likes", path: "/TikTok/TiktokViews/Cardsviews" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faqs" },
    // { name: "LOG IN", path: "/Pages/Login" },
  ];

  return (
    <header className="text-gray-600 body-font shadow-sm sticky top-0 z-50 backdrop-blur-lg backdrop-filter bg-opacity-80">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <BiMenu className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Logo */}
        <div
          className="flex-1 flex justify-center md:justify-center cursor-pointer"
          onClick={() => navigateTo("/")}
        >
          <img src="/logo.svg" alt="logo" className="w-100 h-20" />
        </div>

        {/* log in */}
        <Link
          to="/Pages/Login"
          className="flex items-center px-5 py-2 text-Black-899   transition-colors"
          onClick={() => navigateTo("/login")}
        >
          LOG IN
        </Link>
        {/* Light */}
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex items-center justify-center gap-4 py-2 transition-all duration-300`}
      >
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group text-center"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="cursor-pointer relative px-3 py-1 transition-all duration-300 hover:text-black"
              onClick={() => !item.submenu && navigateTo(item.path)}
            >
              <span className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full after:absolute after:top-0 after:left-0 after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full">
                {item.name}
              </span>
            </div>

            {item.submenu && hovered === index && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-md mt-2 w-44 z-10 transition-all duration-200"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.submenu.map((subItem, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigateTo(subItem.path)}
                    className="block w-full text-left px-4 py-2 m-1 text-sm text-gray-700 rounded-lg bg-white hover:bg-sky-500 hover:text-white transition"
                  >
                    {subItem.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
