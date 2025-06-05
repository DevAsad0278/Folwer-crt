import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaLock,
  FaCreditCard,
  FaArrowLeft,
  FaInstagram,
  FaUpload,
  FaLink,
} from "react-icons/fa";

const InstaPayment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderDetails = state?.formData || {};

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    agreement: false,
    paymentScreenshot: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!paymentData.cardNumber.match(/^\d{16}$/))
      newErrors.cardNumber = "Invalid card number";
    if (!paymentData.expiry.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/))
      newErrors.expiry = "MM/YY format required";
    if (!paymentData.cvc.match(/^\d{3}$/))
      newErrors.cvc = "3-digit CVC required";
    if (!paymentData.agreement)
      newErrors.agreement = "You must agree to the terms";
    if (!paymentData.paymentScreenshot)
      newErrors.paymentScreenshot = "Payment screenshot is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      Object.entries(paymentData).forEach(([key, value]) => {
        if (key === "paymentScreenshot" && value) {
          formData.append(key, value);
        } else {
          formData.append(key, value);
        }
      });
      console.log("Instagram Payment Data:", formData);
      navigate("/payment-success");
    }
  };

  const getQuantity = () => {
    const match = orderDetails.name?.match(/\d+/);
    return match ? match[0] : "N/A";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaInstagram className="w-6 h-6" />
            <h1 className="text-xl font-bold">Instagram Payment Gateway</h1>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-100 hover:text-white"
          >
            <FaArrowLeft />
            Back to Order
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6">
          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="4242 4242 4242 4242"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={paymentData.cardNumber}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardNumber: e.target.value.replace(/\s/g, ""),
                  })
                }
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={paymentData.expiry}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, expiry: e.target.value })
                  }
                />
                {errors.expiry && (
                  <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={paymentData.cvc}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, cvc: e.target.value })
                  }
                />
                {errors.cvc && (
                  <p className="text-red-500 text-sm mt-1">{errors.cvc}</p>
                )}
              </div>
            </div>

            {/* Screenshot Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Screenshot
              </label>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
                <label className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
                  <FaUpload className="w-6 h-6 text-blue-600" />
                  <span className="text-sm text-gray-600 text-center">
                    {paymentData.paymentScreenshot
                      ? paymentData.paymentScreenshot.name
                      : "Click to upload payment confirmation"}
                  </span>
                  <span className="text-xs text-blue-600">
                    (PNG, JPG, or JPEG)
                  </span>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        paymentScreenshot: e.target.files[0],
                      })
                    }
                  />
                </label>
              </div>
              {errors.paymentScreenshot && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.paymentScreenshot}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="text-blue-600 focus:ring-blue-500"
                checked={paymentData.agreement}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    agreement: e.target.checked,
                  })
                }
              />
              <span className="text-sm text-gray-600">
                I authorize payment of ${orderDetails.price?.toFixed(2)} for
                services
              </span>
            </div>
            {errors.agreement && (
              <p className="text-red-500 text-sm">{errors.agreement}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium flex items-center justify-center gap-2"
            >
              <FaCreditCard />
              Confirm Payment
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
              <FaInstagram className="text-blue-600" />
              Order Details
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium text-gray-800">
                  {orderDetails.name}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Quantity:</span>
                <span className="font-medium text-gray-800">
                  {getQuantity()}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount:</span>
                <span className="font-bold text-blue-600">
                  ${orderDetails.price?.toFixed(2)}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaLink className="flex-shrink-0 text-blue-600" />
                  <span className="break-words">
                    {orderDetails.profileLink}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaLock className="text-blue-600" />
                <span>Secure TLS encrypted transaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPayment;
