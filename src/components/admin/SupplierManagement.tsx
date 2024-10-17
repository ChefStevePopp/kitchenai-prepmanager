import React from 'react';
import { Truck } from 'lucide-react';

const SupplierManagement: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Supplier Management</h2>
      <p className="mb-4">Manage your restaurant's suppliers and orders.</p>
      <div className="bg-white p-4 rounded-lg shadow">
        <Truck className="text-green-500 mb-2" size={24} />
        <h3 className="text-lg font-semibold">Coming Soon</h3>
        <p>Supplier database, order tracking, and performance metrics.</p>
      </div>
    </div>
  );
};

export default SupplierManagement;