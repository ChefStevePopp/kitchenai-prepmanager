import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { BarChart, Users, Package, Truck, FileText, Settings } from 'lucide-react';
import AdminDashboard from './admin/AdminDashboard';
import UserManagement from './admin/UserManagement';
import InventoryManagement from './admin/InventoryManagement';
import SupplierManagement from './admin/SupplierManagement';
import Reports from './admin/Reports';
import AdminSettings from './admin/AdminSettings';

const AdminPanel: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link to="/admin" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <BarChart className="inline-block mr-2" size={20} />
            Dashboard
          </Link>
          <Link to="/admin/users" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <Users className="inline-block mr-2" size={20} />
            User Management
          </Link>
          <Link to="/admin/inventory" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <Package className="inline-block mr-2" size={20} />
            Inventory Management
          </Link>
          <Link to="/admin/suppliers" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <Truck className="inline-block mr-2" size={20} />
            Supplier Management
          </Link>
          <Link to="/admin/reports" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <FileText className="inline-block mr-2" size={20} />
            Reports
          </Link>
          <Link to="/admin/settings" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <Settings className="inline-block mr-2" size={20} />
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/suppliers" element={<SupplierManagement />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<AdminSettings />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;