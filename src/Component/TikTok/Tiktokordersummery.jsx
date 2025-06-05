import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaCreditCard,
  FaUser,
  FaLink,
} from "react-icons/fa";

const TiktokOrderSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const formData = state?.formData || {};

  const getQuantity = () => {
    const match = formData.name?.match(/\d+/);
    return match ? match[0] : "N/A";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-green-500 w-5 h-5" />
            <h1 className="text-xl font-semibold text-gray-800">
              TikTok Order Summary
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Order Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">{formData.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="mr-4">Quantity: {getQuantity()}</span>
                  <span>Price: ${formData.price?.toFixed(2)}</span>
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <FaUser className="w-4 h-4 mr-2 text-blue-500" />
                <span>{formData.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaCreditCard className="w-4 h-4 mr-2 text-blue-500" />
                <span>{formData.phone}</span>
              </div>
              <div className="flex items-start text-gray-600">
                <FaLink className="w-4 h-4 mr-2 text-blue-500 mt-1" />
                <span className="break-words">{formData.profileLink}</span>
              </div>
            </div>
          </div>

          {/* Total Section */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total</span>
              <span className="text-lg font-semibold text-blue-600">
                ${formData.price?.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back
            </button>
            <button
              onClick={() =>
                navigate("/Tiktokpayment", { state: { formData } })
              }
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 text-sm"
            >
              <FaCreditCard />
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiktokOrderSummary;
