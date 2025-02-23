import BudgetChart from "./components/BudgetChart";
import BudgetStatus from "./components/BudgetStatus";
import Navbar from "./components/Navbar";
import RevenueChart from "./components/RevenueChart";
import Statistics from "./components/Statistics";
import TeamMood from "./components/TeamMood";

function App() {
  return (
    <div className="mb-12">
      <Navbar />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 p-4">
        <div className="lg:col-span-3">
          <Statistics />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div className="lg:col-span-1">
              <BudgetChart />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <TeamMood />
        </div>
      </div>
      <div className="container mx-auto ">
        <BudgetStatus />
      </div>
    </div>
  );
}

export default App;
