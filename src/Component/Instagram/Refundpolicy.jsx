import {
  FaEnvelope,
  FaShieldAlt,
  FaExclamationTriangle,
  FaSyncAlt,
  FaHandshake,
} from "react-icons/fa";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Refund Policy
          </h1>
          <p className="text-gray-600">
            We strive to deliver exceptional service while maintaining
            transparent policies
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Followers Cart fulfills all orders with dedication and precision.
            While issues are rare, we've established clear guidelines to ensure
            fair resolutions for all parties.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Contact Support
            </h2>
          </div>
          <p className="text-gray-700">
            Reach our professional support team via email for assistance with:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>Order placement issues</li>
            <li>Delivery concerns</li>
            <li>Service drops (extremely rare)</li>
            <li>General inquiries</li>
          </ul>
        </div>

        {/* Service Guarantee */}
        <div className="bg-green-50 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-green-600 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Guarantees
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaSyncAlt className="text-green-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">
                  30-Day Refill Guarantee
                </h3>
                <p className="text-gray-600">
                  Automatic refills for any drops in followers/likes within 30
                  days
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaExclamationTriangle className="text-green-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">
                  Subscription Validity
                </h3>
                <p className="text-gray-600">
                  Auto-likes/views subscriptions expire 60 days after purchase
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Refund Restrictions */}
        <div className="bg-red-50 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaExclamationTriangle className="text-red-600 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Non-Refundable Scenarios
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>Instagram account suspension/content removal</li>
            <li>Username changes after order placement</li>
            <li>Opened PayPal cases/credit card chargebacks</li>
            <li>Orders currently in progress</li>
            <li>Partially delivered services (partial charges apply)</li>
          </ul>
        </div>

        {/* Refund Considerations */}
        <div className="bg-purple-50 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FaHandshake className="text-purple-600 text-2xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Refund Eligibility
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Full/Partial Refunds May Be Considered For:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Technical failures in our system</li>
                <li>Instagram platform changes/updates</li>
                <li>Account-related issues preventing delivery</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">
                Satisfaction Guarantee:
              </h3>
              <p className="text-gray-600">
                Contact us within 4-6 working days if unsatisfied - we'll work
                to find a mutually agreeable solution
              </p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="text-center text-gray-600 mt-8">
          <p>
            We appreciate your understanding and strive to maintain transparency
            in all transactions. For specific cases, please contact our support
            team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
