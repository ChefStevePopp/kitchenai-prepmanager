import React from 'react';
import { Link } from 'react-router-dom';
import { Clipboard, Package, List } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Kitchen AI - Prep 'It</h1>
      <p className="text-xl mb-8">Manage your kitchen's inventory and prep lists efficiently with AI assistance.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/stock" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <Package className="mx-auto mb-4 text-blue-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Stock Inventory</h2>
          <p>Manage your kitchen's stock items</p>
        </Link>
        <Link to="/prepared-items" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <Clipboard className="mx-auto mb-4 text-green-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Prepared Items</h2>
          <p>Track your prepared items inventory</p>
        </Link>
        <Link to="/prep-list" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <List className="mx-auto mb-4 text-red-600" size={48} />
          <h2 className="text-2xl font-semibold mb-2">AI Prep List Generator</h2>
          <p>Generate prioritized prep lists with AI assistance</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;