import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const handleSubmit = () => {
  // ... validation code ...
  navigate("/Tiktokordersummery", { state: { formData } });
};
const Buynowtiktok = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("followers");

  // Options configuration for different service types
  const optionsConfig = {
    followers: [
      { value: "followers-1", label: "250 TikTok Followers" },
      { value: "followers-2", label: "500 TikTok Followers" },
      { value: "followers-3", label: "1000 TikTok Followers" },
      { value: "followers-4", label: "2500 TikTok Followers" },
    ],
    likes: [
      { value: "likes-1", label: "100 TikTok Likes" },
      { value: "likes-2", label: "250 TikTok Likes" },
      { value: "likes-3", label: "500 TikTok Likes" },
      { value: "likes-4", label: "1000 TikTok Likes" },
      { value: "likes-5", label: "2500 TikTok Likes" },
      { value: "likes-6", label: "5000 TikTok Likes" },
      { value: "likes-7", label: "10000 TikTok Likes" },
      { value: "likes-8", label: "20000 TikTok Likes" },
    ],
    views: [
      { value: "views-1", label: "500 TikTok Views" },
      { value: "views-2", label: "1000 TikTok Views" },
      { value: "views-3", label: "5000 TikTok Views" },
      { value: "views-4", label: "10000 TikTok Views" },
    ],
  };

  useEffect(() => {
    if (location.state?.selectedPlan) {
      const plan = location.state.selectedPlan;
      setSelectedOption(plan.value);
      setServiceType(plan.type || "followers");
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
            TikTok Packages
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
          <label className="block mb-1 font-semibold text-sm text-black">
            TikTok Profile Link
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
          <label className="block mb-1 font-semibold text-sm text-black">
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
          <label className="block mb-1 font-semibold text-sm text-black">
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

export default Buynowtiktok;

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const Buynowtiktok = () => {
//   const location = useLocation();
//   const [selectedOption, setSelectedOption] = useState('');
//   const [inputValue, setInputValue] = useState('');
//   const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   // Receive and process the selected plan data
//   useEffect(() => {
//     if (location.state?.selectedPlan) {
//       const plan = location.state.selectedPlan;
//       setSelectedOption(plan.value);
//       setSelectedPlanDetails({
//         name: plan.name,
//         price: plan.price
//       });
//     }
//   }, [location.state]);

//   const handleSubmit = () => {
//     // Check if any required field is empty
//     if (!selectedOption || !inputValue || !email || !phone) {
//       alert('Please fill in all required information before submitting!');
//       return;
//     }

//     const formData = {
//       package: selectedOption,
//       profileLink: inputValue,
//       email: email,
//       phone: phone,
//       ...selectedPlanDetails
//     };
//     console.log('Form Submission:', formData);
//     // Add your submission logic here
//   };

//   const handleVerify = () => {
//     if (!inputValue) {
//       alert('Please enter your profile link to verify!');
//       return;
//     }
//     console.log('Verifying Profile:', inputValue);
//     // Add your verification logic here
//   };

//   return (
//     <div className='py-20'>
//       <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto mt-10 px-4 sm:px-6 lg:px-16 py-20 sm:py-12 lg:py-20 bg-white rounded-2xl shadow-lg border border-blue-600 space-y-6">

//         {/* Display selected package details */}
//         {selectedPlanDetails && (
//           <>
//           <h2 className="text-2xl font-semibold text-gray-800 text-center">
//           {selectedPlanDetails.name}
//         </h2>
//           <div className="text-center bg-blue-50 p-4 rounded-lg">
//             <h3 className="font-semibold text-blue-800">
//               Selected Package: {selectedPlanDetails.name}
//             </h3>
//             <p className="text-lg font-bold text-blue-600">
//               Price: ${selectedPlanDetails.price}
//             </p>
//           </div>
//           </>
//         )}

//         <div>
//           <label className="block mb-1 text-sm text-black font-semibold">
//             TikTok Packages
//           </label>
//           <select
//             className="w-full p-2 border rounded-md text-black"
//             value={selectedOption}
//             onChange={(e) => setSelectedOption(e.target.value)}
//           >
//             <option disabled value="">-- Select --</option>
//             <option value="option1">250 TikTok Followers</option>
//             <option value="option2">500 TikTok Followers</option>
//             <option value="option3">1000 TikTok Followers</option>
//             <option value="option4">2500 TikTok Followers</option>
//             <option value="option5">100 TikTok Followers</option>
//             <option value="option10">5000 TikTok Followers</option>
//             <option value="option11">10000 TikTok Followers</option>
//             <option value="option12">20000 TikTok Followers</option>

//           </select>
//         </div>

//         <div>
//           <label className="block mb-1 font-semibold text-sm text-black">
//             TikTok Profile Link
//           </label>
//           <div className="relative">
//             <input
//               type="text"
//               className="w-full p-2 pr-24 border rounded-md text-black"
//               placeholder="Paste your profile link..."
//               value={inputValue}
//               onChange={(e) => setInputValue(e.target.value)}
//             />
//             <button
//               onClick={handleVerify}
//               className="absolute right-0 top-0 bottom-0 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-lg"
//             >
//               Verify
//             </button>
//           </div>
//         </div>

//         <div>
//           <label className="block mb-1 font-semibold text-sm text-black">
//             Email Address
//           </label>
//           <input
//             type="email"
//             className="w-full p-2 border rounded-md text-black"
//             placeholder="Enter your email..."
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-semibold text-sm text-black">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             className="w-full p-2 border rounded-md text-black"
//             placeholder="Enter your phone number..."
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Submit Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Buynowtiktok;
