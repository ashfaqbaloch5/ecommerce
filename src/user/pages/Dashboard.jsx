// src/pages/Dashboard.js
const Dashboard = () => {
    return (
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl">120</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold">Total Products</h3>
            <p className="text-2xl">230</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded shadow-md">
            <h3 className="text-lg font-semibold">Total Orders</h3>
            <p className="text-2xl">340</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  