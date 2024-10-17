import React, { useState, useEffect } from 'react';
import { Plus, Minus, Save } from 'lucide-react';
import ExcelUploader from './ExcelUploader';

interface PreparedItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
}

const PreparedItemsInventory: React.FC = () => {
  const [preparedItems, setPreparedItems] = useState<PreparedItem[]>([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 0, unit: '' });

  const handleExcelData = (data: any[]) => {
    const formattedData = data.map((item, index) => ({
      id: index + 1,
      name: item.name || '',
      quantity: item.quantity || 0,
      unit: item.unit || '',
    }));
    setPreparedItems(formattedData);
  };

  const handleQuantityChange = (id: number, change: number) => {
    setPreparedItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      )
    );
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.quantity > 0 && newItem.unit) {
      setPreparedItems([...preparedItems, { ...newItem, id: Date.now() }]);
      setNewItem({ name: '', quantity: 0, unit: '' });
    }
  };

  const handleSave = () => {
    console.log('Saving prepared items:', preparedItems);
    alert('Prepared items saved successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Prepared Items Inventory</h2>
      <ExcelUploader onDataLoaded={handleExcelData} />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item name"
          className="border p-2 mr-2"
          value={newItem.name}
          onChange={e => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="border p-2 mr-2"
          value={newItem.quantity}
          onChange={e => setNewItem({ ...newItem, quantity: parseInt(e.target.value) || 0 })}
        />
        <input
          type="text"
          placeholder="Unit"
          className="border p-2 mr-2"
          value={newItem.unit}
          onChange={e => setNewItem({ ...newItem, unit: e.target.value })}
        />
        <button
          onClick={handleAddItem}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          <Plus className="inline mr-1" /> Add Item
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Item</th>
            <th className="text-left p-2">Quantity</th>
            <th className="text-left p-2">Unit</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {preparedItems.map(item => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.quantity}</td>
              <td className="p-2">{item.unit}</td>
              <td className="p-2">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-red-500 text-white p-1 rounded mr-1 hover:bg-red-600"
                >
                  <Minus size={16} />
                </button>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-green-500 text-white p-1 rounded hover:bg-green-600"
                >
                  <Plus size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        <Save className="inline mr-1" /> Save Inventory
      </button>
    </div>
  );
};

export default PreparedItemsInventory;