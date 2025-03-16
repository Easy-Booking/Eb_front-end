import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { FaUsers, FaDollarSign, FaClipboardList, FaCrown, FaClock } from "react-icons/fa";
import { useState } from "react";

const bookingData = [
    { month: "Jan", bookings: 120 },
    { month: "Feb", bookings: 90 },
    { month: "Mar", bookings: 150 },
    { month: "Apr", bookings: 200 },
    { month: "May", bookings: 300 },
  ];
  
  const revenueData = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 7500 },
    { month: "Mar", revenue: 12000 },
    { month: "Apr", revenue: 18000 },
    { month: "May", revenue: 25000 },
  ];
  
  const userDemographics = [
    { name: "Male", value: 55 },
    { name: "Female", value: 40 },
    { name: "Others", value: 5 },
  ];

  const latestTransactions = [
    { id: "#TXN001", user: "John Doe", service: "Luxury Bus", amount: "$50", date: "2025-03-15" },
    { id: "#TXN002", user: "Alice Smith", service: "Hair Salon", amount: "$30", date: "2025-03-14" },
    { id: "#TXN003", user: "Michael Lee", service: "Private Car", amount: "$70", date: "2025-03-13" },
    { id: "#TXN004", user: "Emma Brown", service: "Luxury Bus", amount: "$60", date: "2025-03-12" },
    { id: "#TXN005", user: "David Wilson", service: "Healthcare Checkup", amount: "$120", date: "2025-03-11" },
  ];
  
  const bestServices = [
    { service: "Luxury Bus", bookings: 350 },
    { service: "Private Car", bookings: 280 },
    { service: "Hair Salon", bookings: 220 },
    { service: "Healthcare Checkup", bookings: 180 },
  ];
  
  
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const Report = () => {
  const [timeRange, setTimeRange] = useState("monthly");
    return(
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Reports & Analytics</h1>

      <div className="mb-4 flex space-x-4">
        <button className={`px-4 py-2 rounded ${timeRange === "daily" ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setTimeRange("daily")}>
          Daily
        </button>
        <button className={`px-4 py-2 rounded ${timeRange === "monthly" ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setTimeRange("monthly")}>
          Monthly
        </button>
        <button className={`px-4 py-2 rounded ${timeRange === "yearly" ? "bg-blue-500" : "bg-gray-700"}`} onClick={() => setTimeRange("yearly")}>
          Yearly
        </button>
      </div>

      <div className="bg-gray-800 p-5 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl mb-4">Booking Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bookingData}>
            <XAxis dataKey="month" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="bookings" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 p-5 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl mb-4">Revenue Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <XAxis dataKey="month" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">User Demographics</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={userDemographics} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
              {userDemographics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pt-4">
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center space-x-4">
          <FaClipboardList className="text-blue-400 text-4xl" />
          <div>
            <h2 className="text-lg">Total Bookings</h2>
            <p className="text-2xl font-bold">1,250</p>
          </div>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center space-x-4">
          <FaDollarSign className="text-green-400 text-4xl" />
          <div>
            <h2 className="text-lg">Total Revenue</h2>
            <p className="text-2xl font-bold">$50,000</p>
          </div>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex items-center space-x-4">
          <FaUsers className="text-yellow-400 text-4xl" />
          <div>
            <h2 className="text-lg">Active Users</h2>
            <p className="text-2xl font-bold">5,400</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 p-5 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl mb-4">Booking Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bestServices}>
            <XAxis dataKey="service" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="bookings" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-800 p-5 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl flex items-center mb-4"><FaCrown className="text-yellow-400 mr-2" /> Best-Performing Services</h2>
        <ul>
          {bestServices.map((service, index) => (
            <li key={index} className="flex justify-between py-2 border-b border-gray-700">
              <span>{service.service}</span>
              <span className="text-green-400 font-bold">{service.bookings} Bookings</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
        <h2 className="text-xl flex items-center mb-4"><FaClock className="text-blue-400 mr-2" /> Latest Transactions</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="py-2">ID</th>
              <th className="py-2">User</th>
              <th className="py-2">Service</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {latestTransactions.map((txn) => (
              <tr key={txn.id} className="border-b border-gray-700">
                <td className="py-2">{txn.id}</td>
                <td className="py-2">{txn.user}</td>
                <td className="py-2">{txn.service}</td>
                <td className="py-2">{txn.amount}</td>
                <td className="py-2">{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    )
}

export default Report 