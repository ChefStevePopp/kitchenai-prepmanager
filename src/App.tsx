import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Clipboard, Package, List, Settings } from 'lucide-react';
import Home from './components/Home';
import StockInventory from './components/StockInventory';
import PreparedItemsInventory from './components/PreparedItemsInventory';
import PrepListGenerator from './components/PrepListGenerator';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">Kitchen AI - Prep 'It</Link>
            <div className="space-x-4">
              <Link to="/stock" className="text-white hover:text-blue-200"><Package className="inline mr-1" />Stock</Link>
              <Link to="/prepared-items" className="text-white hover:text-blue-200"><Clipboard className="inline mr-1" />Prepared Items</Link>
              <Link to="/prep-list" className="text-white hover:text-blue-200"><List className="inline mr-1" />Prep List</Link>
              <Link to="/admin" className="text-white hover:text-blue-200"><Settings className="inline mr-1" />Admin</Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<StockInventory />} />
            <Route path="/prepared-items" element={<PreparedItemsInventory />} />
            <Route path="/prep-list" element={<PrepListGenerator />} />
            <Route path="/admin/*" element={<AdminPanel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;