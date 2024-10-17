import React from 'react';
import { Settings } from 'lucide-react';

const AdminSettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
      <p className="mb-4">Configure system-wide settings for your restaurant inventory app.</p>
      <div className="bg-white p-4 rounded-lg shadow">
        <Settings className="text-gray-500 mb-2" size={24} />
        <h3 className="text-lg font-semibold">Coming Soon</h3>
        <p>Customize app behavior, set up notifications, and manage integrations.</p>
      </div>
    </div>
  );
};

export default AdminSettings;