import React from 'react';

const Sidebar = ({ setActiveComponent }) => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Admin Panel</div>
      <nav className="flex flex-col p-4 space-y-2">
        <li 
          onClick={() => setActiveComponent('Dashboard')} 
          className="hover:bg-gray-700 p-2 rounded cursor-pointer list-none"
        >
          Dashboard
        </li>
        <li 
          onClick={() => setActiveComponent('Users')} 
          className="hover:bg-gray-700 p-2 rounded cursor-pointer list-none"
        >
          Users
        </li>
        <li 
          onClick={() => setActiveComponent('Products')} 
          className="hover:bg-gray-700 p-2 rounded cursor-pointer list-none"
        >
          Products
        </li>
        <li 
          onClick={() => setActiveComponent('Orders')} 
          className="hover:bg-gray-700 p-2 rounded cursor-pointer list-none"
        >
          Orders
        </li>
        
        <li 
          onClick={() => setActiveComponent('ProductTable')} 
          className="hover:bg-gray-700 p-2 rounded cursor-pointer list-none"
        >
          Product Table
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
