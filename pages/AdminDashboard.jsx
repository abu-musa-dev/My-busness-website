import {
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  Plus,
  Edit,
  Tag,
  BarChart3,
} from "lucide-react";

import Navbar from "../src/components/Navbar";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-red-50 pt-24 px-4">

        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Control Panel
            </h1>
            <p className="text-gray-500 mt-1">
              Manage everything from products to revenue
            </p>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">

            <Stat icon={<Users />} title="Users" value="120" />
            <Stat icon={<ShoppingCart />} title="Orders" value="58" />
            <Stat icon={<Package />} title="Products" value="35" />
            <Stat icon={<DollarSign />} title="Revenue" value="$12,450" />

          </div>

          {/* QUICK ACTIONS */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">

            <ActionCard
              icon={<Plus />}
              title="Add Product"
              desc="Create new product listing"
              color="green"
            />

            <ActionCard
              icon={<Edit />}
              title="Edit Products"
              desc="Update existing items"
              color="blue"
            />

            <ActionCard
              icon={<Tag />}
              title="Coupons & Discount"
              desc="Manage discount offers"
              color="purple"
            />

          </div>

          {/* SALES OVERVIEW */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">

            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BarChart3 /> Sales Overview
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Today Sales</p>
                <h2 className="text-2xl font-bold text-green-600">$1,200</h2>
              </div>

              <div className="bg-yellow-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">This Week</p>
                <h2 className="text-2xl font-bold text-yellow-600">$5,800</h2>
              </div>

              <div className="bg-red-50 p-4 rounded-xl">
                <p className="text-sm text-gray-500">This Month</p>
                <h2 className="text-2xl font-bold text-red-600">$12,450</h2>
              </div>

            </div>

          </div>

          {/* PRODUCT MANAGEMENT */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">

            <h2 className="text-xl font-bold mb-4">
              Product Management
            </h2>

            <div className="space-y-4">

              <ProductItem name="Modern Sofa" price="$250" stock="In Stock" />
              <ProductItem name="Wood Table" price="$180" stock="Low Stock" />
              <ProductItem name="Chair Set" price="$120" stock="Out of Stock" />

            </div>

          </div>

          {/* ORDERS */}
          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
              Latest Orders
            </h2>

            <div className="space-y-3">

              <Order id="#101" item="Sofa" status="Completed" />
              <Order id="#102" item="Table" status="Processing" />
              <Order id="#103" item="Chair" status="Cancelled" />

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;

/* ---------- COMPONENTS ---------- */

function Stat({ icon, title, value }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex items-center gap-3">
      <div className="text-red-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </div>
  );
}

function ActionCard({ icon, title, desc, color }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
      <div className={`text-${color}-600 mb-2`}>{icon}</div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function ProductItem({ name, price, stock }) {
  return (
    <div className="flex justify-between items-center border p-3 rounded-xl">
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{stock}</p>
      </div>

      <div className="font-bold text-red-600">{price}</div>
    </div>
  );
}

function Order({ id, item, status }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span>{id} - {item}</span>

      <span
        className={`font-semibold ${
          status === "Completed"
            ? "text-green-600"
            : status === "Processing"
            ? "text-yellow-500"
            : "text-red-500"
        }`}
      >
        {status}
      </span>
    </div>
  );
}