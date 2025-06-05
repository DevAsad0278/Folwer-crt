import { useState } from "react";
import {
  FaInfoCircle,
  FaSearch,
  FaBox,
  FaLink,
  FaChartLine,
  FaSync,
  FaCheckCircle,
} from "react-icons/fa";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDetails(true);
  };

  const orderDetails = {
    service: "Instagram Followers",
    quantity: "5,000 Followers",
    link: "https://instagram.com/yourprofile",
    startCount: "1,234 Followers",
    remains: "3,766 Remaining",
    status: "Running",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">
            Track Your Order
          </h1>
          <p className="text-gray-600">
            Enter your order ID below to check real-time progress
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mb-16">
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g. m35vh2mf110ad7_2j4a)"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 flex items-center justify-center gap-2"
            >
              <FaChartLine /> Track Order
            </button>
          </div>
        </form>

        {showDetails && (
          /* Order Details */
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 p-4 rounded-xl">
                <h3 className="text-indigo-600 font-semibold mb-2 flex items-center gap-2">
                  <FaBox /> Service
                </h3>
                <p className="text-gray-700">{orderDetails.service}</p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <h3 className="text-green-600 font-semibold mb-2 flex items-center gap-2">
                  <FaCheckCircle /> Status
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    orderDetails.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : orderDetails.status === "Running"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {orderDetails.status}
                </span>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <h3 className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                  <FaLink /> Target Link
                </h3>
                <a
                  href={orderDetails.link}
                  className="text-blue-600 hover:underline break-all"
                >
                  {orderDetails.link}
                </a>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl">
                <h3 className="text-purple-600 font-semibold mb-2 flex items-center gap-2">
                  <FaSync /> Progress
                </h3>
                <p className="text-gray-700">{orderDetails.remains}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 transition-all duration-500"
                  style={{ width: "75%" }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Started: {orderDetails.startCount}</span>
                <span>{orderDetails.quantity}</span>
              </div>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <FaInfoCircle className="text-indigo-600" /> How to Track Your Order
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Find Your Order ID
                </h3>
                <p className="text-gray-600">
                  Check your email for the order confirmation containing your
                  unique Order ID.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Real-time Tracking
                </h3>
                <p className="text-gray-600">
                  Our system automatically updates progress every 15 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Automatic Refill Guarantee
                </h3>
                <p className="text-gray-600">
                  Our system automatically replenishes any drops within 30 days
                  of order completion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-8 bg-indigo-50 rounded-xl p-6 text-center">
          <p className="text-indigo-600 font-medium">
            🚀 Advanced delivery system • 99.9% completion rate • Automatic
            refills • 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
