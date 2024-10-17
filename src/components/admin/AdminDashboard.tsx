import React from 'react';
import { BarChart, DollarSign, ShoppingCart, AlertTriangle } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <DollarSign className="text-green-500 mb-2" size={24} />
          <h2 className="text-lg font-semibold">Total Revenue</h2>
          <p className="text-2xl font-bold">$24,500</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <ShoppingCart className="text-blue-500 mb-2" size={24} />
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl font-bold">156</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <BarChart className="text-purple-500 mb-2" size={24} />
          <h2 className="text-lg font-semibold">Inventory Value</h2>
          <p className="text-2xl font-bold">$18,750</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <AlertTriangle className="text-red-500 mb-2" size={24} />
          <h2 className="text-lg font-semibold">Low Stock Items</h2>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>
      {/* Add more dashboard widgets here */}
    </div>
  );
};

export default AdminDashboard;