import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Instagram = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div>
        <button onClick={() => navigate("/")} className="text-lg font-semibold">
          Home
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-gray-800 px-4 py-2 hover:text-blue-600"
        >
          Instagram
        </button>

        {isDropdownOpen && (
          <div className="absolute bg-white shadow-md mt-2 rounded w-48">
            <button
              onClick={() => navigate("/instagram/followers")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Buy Followers
            </button>
            <button
              onClick={() => navigate("/instagram/likes")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Buy Likes
            </button>
            <button
              onClick={() => navigate("/instagram/views")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Buy Views
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Instagram;
