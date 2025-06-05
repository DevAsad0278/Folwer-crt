import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Buynowyoutube = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("subscribers");

  // Options configuration for different service types
  const optionsConfig = {
    channel: [
      { value: "channel-1", label: "50 YouTube Subscribers" },
      { value: "channel-2", label: "100 YouTube Subscribers" },
      { value: "channel-3", label: "250 YouTube Subscribers" },
      { value: "channel-4", label: "500 YouTube Subscribers" },
      { value: "channel-5", label: "750 YouTube Subscribers" },
      { value: "channel-6", label: "1000 YouTube Subscribers" },
      { value: "channel-7", label: "1500 YouTube Subscribers" },
      { value: "channel-8", label: "2000 YouTube Subscribers" },
      { value: "channel-9", label: "2500 YouTube Subscribers" },
      { value: "channel-10", label: "5000 YouTube Subscribers" },
    ],
    livestream: [
      { value: "livestream-1", label: "1000 Livestream Views" },
      { value: "livestream-2", label: "1500 Livestream Views" },
      { value: "livestream-3", label: "2000 Livestream Views" },
      { value: "livestream-4", label: "2500 Livestream Views" },
      { value: "livestream-5", label: "5000 Livestream Views" },
      { value: "livestream-6", label: "10000 Livestream Views" },
    ],
    channelwatch: [
      { value: "channelwatch-1", label: "1000 YouTube Channel Watchtime" },
      { value: "channelwatch-2", label: "2000 YouTube Channel Watchtime" },
      { value: "channelwatch-3", label: "3000 YouTube Channel Watchtime" },
      { value: "channelwatch-4", label: "4000 YouTube Channel Watchtime" },
    ],
    videoviews: [
      { value: "videoviews-1", label: "500 YouTube Views" },
      { value: "videoviews-2", label: "1000 YouTube Views" },
      { value: "videoviews-3", label: "2000 YouTube Views" },
      { value: "videoviews-4", label: "2500 YouTube Views" },
      { value: "videoviews-5", label: "5000 YouTube Views" },
      { value: "videoviews-6", label: "10000 YouTube Views" },
      { value: "videoviews-7", label: "20000 YouTube Views" },
      { value: "videoviews-8", label: "50000 YouTube Views" },
      { value: "videoviews-9", label: "100000 YouTube Views" },
    ],
    videoshare: [
      { value: "videoshare-1", label: "50 YouTube Shares" },
      { value: "videoshare-2", label: "100 YouTube Shares" },
      { value: "videoshare-3", label: "300 YouTube Shares" },
      { value: "videoshare-4", label: "500 YouTube Shares" },
      { value: "videoshare-5", label: "1000 YouTube Shares" },
      { value: "videoshare-6", label: "2500 YouTube Shares" },
    ],
    videolikes: [
      { value: "videolikes-1", label: "100 YouTube Likes" },
      { value: "videolikes-2", label: "250 YouTube Likes" },
      { value: "videolikes-3", label: "500 YouTube Likes" },
      { value: "videolikes-4", label: "1000 YouTube Likes" },
      { value: "videolikes-5", label: "1500 YouTube Likes" },
      { value: "videolikes-6", label: "2000 YouTube Likes" },
      { value: "videolikes-7", label: "2500 YouTube Likes" },
    ],
  };

  useEffect(() => {
    if (location.state?.selectedPlan) {
      const plan = location.state.selectedPlan;
      setSelectedOption(plan.value);
      setServiceType(plan.type || "subscribers");
      setSelectedPlanDetails({
        name: plan.name,
        price: plan.price,
        type: plan.type,
      });
    }
  }, [location.state]);

  const handleSubmit = () => {
    if (!selectedOption || !inputValue || !email || !phone) {
      alert("Please fill in all required information before submitting!");
      return;
    }

    const formData = {
      package: selectedOption,
      profileLink: inputValue,
      email: email,
      phone: phone,
      ...selectedPlanDetails,
    };
    navigate("/Ytordersummery", { state: { formData } });

    console.log("Form Submission:", formData);
    // Add your submission logic here
  };

  const handleVerify = () => {
    if (!inputValue) {
      alert("Please enter your profile link to verify!");
      return;
    }
    console.log("Verifying Profile:", inputValue);
    // Add your verification logic here
  };

  return (
    <div className="py-20">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto mt-10 px-4 sm:px-6 lg:px-16 py-20 sm:py-12 lg:py-20 bg-white rounded-2xl shadow-lg border border-blue-600 space-y-6">
        {selectedPlanDetails && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 text-center">
              {selectedPlanDetails.name}
            </h2>
            <div className="text-center bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">
                Selected Package: {selectedPlanDetails.name}
              </h3>
              <p className="text-lg font-bold text-blue-600">
                Price: ${selectedPlanDetails.price}
              </p>
            </div>
          </>
        )}

        <div>
          <label className="block mb-1 text-sm text-black font-semibold">
            YouTube Packages
          </label>
          <select
            className="w-full p-2 border rounded-md text-black"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option disabled value="">
              -- Select --
            </option>
            {optionsConfig[serviceType]?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-bold text-sm text-black">
            YouTube Profile Link
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 pr-24 border rounded-md text-black"
              placeholder="Paste your profile link..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              onClick={handleVerify}
              className="absolute right-0 top-0 bottom-0 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg"
            >
              Verify
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-bold text-sm text-black">
            Email Address
          </label>
          <input
            type="email"
            className="w-full p-2 border rounded-md text-black"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 font-bold text-sm text-black">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full p-2 border rounded-md text-black"
            placeholder="Enter your phone number..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Buynowyoutube;
