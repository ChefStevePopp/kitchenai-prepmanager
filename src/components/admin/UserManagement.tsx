import React, { useState } from 'react';
import { User, Edit, Trash2 } from 'lucide-react';

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Staff' },
  ]);

  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });

  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.role) {
      setUsers([...users, { ...newUser, id: Date.now() }]);
      setNewUser({ name: '', email: '', role: '' });
    }
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Name"
          className="border p-2"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <select
          className="border p-2"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Staff">Staff</option>
        </select>
        <button
          onClick={handleAddUser}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Add User
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">
                <button className="text-blue-500 mr-2"><Edit size={18} /></button>
                <button onClick={() => handleDeleteUser(user.id)} className="text-red-500"><Trash2 size={18} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;