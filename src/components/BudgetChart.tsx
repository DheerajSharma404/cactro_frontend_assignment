import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { BUDGET_DATA } from "../constants/charts.ts";

const BudgetChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-gray-700">Budget</h2>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            Profitability
          </button>
          <button className="text-gray-500 hover:text-gray-700">Status</button>
        </div>
      </div>

      <div className="h-[300px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={BUDGET_DATA}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {BUDGET_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) => (
                <span className="text-gray-600">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-semibold">5</div>
          <div className="text-sm text-gray-500">Total projects</div>
        </div>
      </div>
    </div>
  );
};

export default BudgetChart;
