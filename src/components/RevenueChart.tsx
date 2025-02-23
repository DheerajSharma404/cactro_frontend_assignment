import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { REVENUE_DATA } from '../constants/charts.ts';

const RevenueChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl text-gray-700">Total revenue</h2>
          <p className="text-sm text-gray-500">Cost €</p>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-gray-700">Month</button>
          <button className="text-gray-500 hover:text-gray-700">Week</button>
        </div>
      </div>
      
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={REVENUE_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
              domain={[0, 7000]}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00BFA5"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;