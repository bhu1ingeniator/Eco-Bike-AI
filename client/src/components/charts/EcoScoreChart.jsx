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

function EcoScoreChart() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700 mt-10">
      <h2 className="text-2xl font-bold text-green-400 mb-6">
        Eco Score Comparison
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={bikes}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />

          <XAxis
            dataKey="model"
            stroke="#ffffff"
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />

          <YAxis
            domain={[0, 100]}
            stroke="#ffffff"
            tick={{ fill: "#ffffff" }}
          />

          <Tooltip />

          <Bar
            dataKey="ecoScore"
            fill="#22c55e"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EcoScoreChart;