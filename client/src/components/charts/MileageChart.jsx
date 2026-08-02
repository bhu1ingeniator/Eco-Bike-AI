import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { bikes } from "../../data/bikes";

function MileageChart() {
  const data = bikes.map((bike) => ({
    model: bike.model,
    mileage: parseInt(bike.mileage),
  }));

  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700 mt-10">
      <h2 className="text-2xl font-bold text-green-400 mb-6">
        Mileage Comparison
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />

          <XAxis
            dataKey="model"
            stroke="#ffffff"
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />

          <YAxis
            stroke="#ffffff"
            tick={{ fill: "#ffffff" }}
          />

          <Tooltip />

          <Bar
            dataKey="mileage"
            fill="#3b82f6"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MileageChart;