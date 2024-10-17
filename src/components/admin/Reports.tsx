import React from 'react';
import { FileText } from 'lucide-react';

const Reports: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports</h2>
      <p className="mb-4">Generate and view various reports for your restaurant.</p>
      <div className="bg-white p-4 rounded-lg shadow">
        <FileText className="text-purple-500 mb-2" size={24} />
        <h3 className="text-lg font-semibold">Coming Soon</h3>
        <p>Sales reports, inventory turnover analysis, and waste tracking.</p>
      </div>
    </div>
  );
};

export default Reports;