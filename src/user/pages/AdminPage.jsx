import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/nav';
import Dashboard from './Dashboard';
import Users from './Users';
import Products from './Products';
import Orders from './Orders';

import ProductTable from '../Components/ProductTable';

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  // Function to render the active component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Users':
        return <Users />;
      case 'Products':
        return <Products />;
      case 'Orders':
        return <Orders />;
      
      case 'ProductTable':
        return <ProductTable />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
