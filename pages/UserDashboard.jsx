import {
  ShoppingBag,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  User,
  Package,
} from "lucide-react";

import Navbar from "../src/components/Navbar";

function UserDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-green-50 pt-24 px-4">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              My Dashboard
            </h1>
            <p className="text-gray-500 mt-1">
              Track your orders, delivery status & account activity
            </p>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
              <ShoppingBag className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <h2 className="text-xl font-bold">18</h2>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
              <CheckCircle className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Completed</p>
                <h2 className="text-xl font-bold">12</h2>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
              <Clock className="text-yellow-500" />
              <div>
                <p className="text-sm text-gray-500">Processing</p>
                <h2 className="text-xl font-bold">4</h2>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
              <XCircle className="text-red-500" />
              <div>
                <p className="text-sm text-gray-500">Cancelled</p>
                <h2 className="text-xl font-bold">2</h2>
              </div>
            </div>

          </div>

          {/* PROFILE + QUICK INFO */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">

            <div className="bg-white rounded-2xl shadow p-5 flex items-center gap-3">
              <User className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">User</p>
                <h2 className="font-bold">Abu Musa</h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 flex items-center gap-3">
              <Package className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Active Orders</p>
                <h2 className="font-bold">4 Running</h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 flex items-center gap-3">
              <Truck className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Delivery Status</p>
                <h2 className="font-bold">On the way</h2>
              </div>
            </div>

          </div>

          {/* ORDER TRACKING LIST */}
          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-5">
              Order Tracking
            </h2>

            <div className="space-y-5">

              {/* ORDER 1 */}
              <div className="border rounded-xl p-4">

                <div className="flex justify-between">
                  <h3 className="font-semibold">Modern Sofa</h3>
                  <span className="text-green-600 font-semibold">
                    Delivered
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Order ID: #1023
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle size={16} /> Delivered on 12 May 2026
                </div>

              </div>

              {/* ORDER 2 */}
              <div className="border rounded-xl p-4">

                <div className="flex justify-between">
                  <h3 className="font-semibold">Wood Table</h3>
                  <span className="text-yellow-500 font-semibold">
                    Processing
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Order ID: #1024
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-yellow-600">
                  <Clock size={16} /> Packed & preparing for shipment
                </div>

              </div>

              {/* ORDER 3 */}
              <div className="border rounded-xl p-4">

                <div className="flex justify-between">
                  <h3 className="font-semibold">Chair Set</h3>
                  <span className="text-red-500 font-semibold">
                    Cancelled
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Order ID: #1025
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-red-500">
                  <XCircle size={16} /> Order cancelled by user
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default UserDashboard;