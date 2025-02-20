import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const data = [
  { name: "Jan", usage: 400 },
  { name: "Feb", usage: 350 },
  { name: "Mar", usage: 420 },
  { name: "Apr", usage: 390 },
  { name: "May", usage: 450 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Header */}
      <header className="text-center text-3xl font-bold text-blue-600 mb-5">
        AI-Powered Water Conservation Dashboard
      </header>

      {/* Animated Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-md text-center"
      >
        <h2 className="text-xl font-semibold mb-3">Real-time Water Consumption Analysis</h2>
        <p className="text-gray-600">
          This AI-driven dashboard provides real-time insights into water consumption and
          suggests ways to reduce wastage based on historical patterns.
        </p>
      </motion.div>

      {/* Chart */}
      <div className="flex justify-center mt-6">
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="usage" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </div>

      {/* AI Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-100 p-6 mt-6 rounded-xl shadow-md"
      >
        <h2 className="text-lg font-semibold text-blue-700">AI-Powered Water Saving Tips</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Fix leaky faucets to save up to 10,000 liters of water per year.</li>
          <li>Use water-efficient appliances to reduce consumption by 30%.</li>
          <li>Collect rainwater for gardening to minimize usage.</li>
        </ul>
      </motion.div>
    </div>
  );
}
