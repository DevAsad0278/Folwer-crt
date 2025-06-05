import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaCreditCard,
  FaUser,
  FaLink,
} from "react-icons/fa";

const YtorderSummary = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const formData = state?.formData || {};

  const getQuantity = () => {
    const match = formData.name?.match(/\d+/);
    return match ? match[0] : "N/A";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 text-center text-white p-6">
          <div className="flex items-center justify-center space-x-3">
            <FaCheckCircle className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Order Confirmation</h1>
          </div>
          <p className="mt-2 opacity-90">
            Your order has been successfully processed
          </p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Order Summary Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaCreditCard className="mr-2 text-blue-600" />
              Order Summary
            </h2>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{formData.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-black">
                      Quantity:{" "}
                    </p>
                    <p className="text-lg font-semibold text-black">
                      {" "}
                      {getQuantity()}{" "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold text-black">Price: </p>
                    <p className="text-lg font-semibold text-black">
                      {" "}
                      ${formData.price?.toFixed(2)}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaUser className="mr-2 text-blue-600" />
              Customer Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
              <div>
                <label className="text-lg font-medium text-black">Email</label>
                <p className="font-medium text-gray-900">{formData.email}</p>
              </div>
              <div>
                <label className="text-lg font-medium text-black">Phone</label>
                <p className="font-medium text-gray-900">{formData.phone}</p>
              </div>
              <div className="md:col-span-2">
                <label className="text-lg font-medium text-black flex items-center">
                  <FaLink className="mr-1" />
                  Profile Link
                </label>
                <p className="font-medium text-gray-900 break-words">
                  {formData.profileLink}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 w-full sm:w-1/2 py-3 px-6 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
            >
              <FaArrowLeft />
              Modify Order
            </button>
            <button
              onClick={() => navigate("/Ytpayment", { state: { formData } })}
              className="w-full sm:w-1/2 py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              <FaCreditCard />
              Proceed to Payment
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500">
          Need help? Contact our{" "}
          <span className="text-blue-600 cursor-pointer">support team</span>
        </div>
      </div>
    </div>
  );
};

export default YtorderSummary;
