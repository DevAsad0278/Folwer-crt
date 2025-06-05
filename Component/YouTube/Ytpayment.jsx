import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaLock,
  FaCreditCard,
  FaArrowLeft,
  FaUpload,
  FaLink,
  FaUser,
} from "react-icons/fa";

const Ytpayment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const orderDetails = state?.formData || {};

  const [paymentData, setPaymentData] = useState({
    accountNumber: "",
    routingNumber: "",
    accountHolder: "",
    agreement: false,
    paymentScreenshot: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!paymentData.accountNumber.match(/^\d{9,18}$/))
      newErrors.accountNumber = "Invalid account number";
    if (!paymentData.routingNumber.match(/^\d{9}$/))
      newErrors.routingNumber = "Invalid routing number";
    if (!paymentData.accountHolder)
      newErrors.accountHolder = "Account holder name required";
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
      console.log("Payment Data:", formData);
      navigate("/payment-success");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FaUser className="w-6 h-6" />
            <h1 className="text-xl font-bold">Secure Bank Transfer</h1>
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
                Account Holder Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={paymentData.accountHolder}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    accountHolder: e.target.value,
                  })
                }
              />
              {errors.accountHolder && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.accountHolder}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Number
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={paymentData.accountNumber}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    accountNumber: e.target.value,
                  })
                }
              />
              {errors.accountNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.accountNumber}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Routing Number
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={paymentData.routingNumber}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    routingNumber: e.target.value,
                  })
                }
              />
              {errors.routingNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.routingNumber}
                </p>
              )}
            </div>

            {/* Screenshot Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Payment Confirmation
              </label>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
                <label className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
                  <FaUpload className="w-6 h-6 text-blue-600" />
                  <span className="text-sm text-gray-600 text-center">
                    {paymentData.paymentScreenshot
                      ? paymentData.paymentScreenshot.name
                      : "Upload transaction screenshot"}
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
              Confirm Bank Transfer
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-800">
              <FaUser className="text-blue-600" />
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
                <span>Secure end-to-end encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ytpayment;
