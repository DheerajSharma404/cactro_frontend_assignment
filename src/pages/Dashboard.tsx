const Dashboard = () => {
  return (
    <div className="p-6 border border-black">
      {/* Top Section */}
      <nav></nav>
      <div className="mb-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-3xl font-bold">5</h1>
            <p className="text-gray-600">Total Projects</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-3xl font-bold">1</h1>
            <p className="text-gray-600">Completed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-3xl font-bold">3</h1>
            <p className="text-gray-600">Ongoing</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg shadow">
            <h1 className="text-3xl font-bold text-red-500">1</h1>
            <p className="text-gray-600">Delayed</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h1 className="text-3xl font-bold">5</h1>
            <p className="text-gray-600">Employees</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Total revenue</h2>
              <div className="flex gap-4">
                <span className="text-gray-600">Month</span>
                <span className="text-gray-600">Week</span>
              </div>
            </div>
            {/* Chart will go here */}
          </div>

          {/* Budget Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Budget</h2>
              <div className="flex gap-4">
                <span className="text-gray-600">Profitability</span>
                <span className="text-gray-600">Status</span>
              </div>
            </div>
            {/* Donut chart will go here */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Budget status</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-teal-500 text-white rounded-md">
              Add New Project
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-md">
              Download report
            </button>
            <button className="px-4 py-2 bg-white border border-gray-200 rounded-md">
              Filter
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="grid gap-4">{/* Project cards will go here */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
