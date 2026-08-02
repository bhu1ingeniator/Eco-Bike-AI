import { useState } from "react";
import { bikes } from "../data/bikes";
import bikeImages from "../data/bikeImages";
import { getBikeRecommendation } from "../services/gemini";

import EcoScoreChart from "./charts/EcoScoreChart";
import MileageChart from "./charts/MileageChart";
import EmissionChart from "./charts/EmissionChart";

function SearchSection() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [selectedBike, setSelectedBike] = useState(null);
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const brands = [...new Set(bikes.map((bike) => bike.brand))];
  const models = bikes.filter((bike) => bike.brand === brand);

  const handleAnalyze = async () => {
    const bike = bikes.find(
      (b) => b.brand === brand && b.model === model
    );

    if (!bike) return;

    setSelectedBike(bike);

    setLoading(true);

    const response = await getBikeRecommendation(bike);

    setAiResponse(response);

    setLoading(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Search Card */}

      <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 shadow-2xl">

        <h2 className="text-4xl font-bold text-center mb-10">
          Find Your Bike
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {/* Brand */}

          <select
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              setModel("");
            }}
            className="bg-black border border-zinc-700 rounded-xl p-4 focus:border-green-500 outline-none"
          >
            <option value="">Select Brand</option>

            {brands.map((brand) => (
              <option key={brand}>{brand}</option>
            ))}
          </select>

          {/* Model */}

          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="bg-black border border-zinc-700 rounded-xl p-4 focus:border-green-500 outline-none"
          >
            <option value="">Select Model</option>

            {models.map((bike) => (
              <option key={bike.id}>{bike.model}</option>
            ))}
          </select>

          {/* Button */}

          <button
            onClick={handleAnalyze}
            disabled={!brand || !model || loading}
            className="bg-green-500 hover:bg-green-600 disabled:bg-zinc-700 disabled:cursor-not-allowed text-black font-bold rounded-xl transition-all duration-300"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>

        </div>

        {/* Result */}

        {selectedBike && (

          <div className="mt-12 bg-black rounded-3xl border border-zinc-700 p-8 animate-fade-in">

            {/* Image */}

            <div className="flex justify-center">

              <img
                src={bikeImages[selectedBike.model]}
                alt={selectedBike.model}
                className="w-80 object-contain rounded-xl hover:scale-105 transition duration-500"
              />

            </div>

            {/* Name */}

            <h2 className="text-center text-4xl font-bold text-green-500 mt-8 mb-10">
              {selectedBike.brand} {selectedBike.model}
            </h2>

            {/* Specifications */}

            <div className="grid md:grid-cols-2 gap-6 text-lg">

              <p><strong>Engine:</strong> {selectedBike.engine}</p>

              <p><strong>Fuel:</strong> {selectedBike.fuel}</p>

              <p><strong>Mileage:</strong> {selectedBike.mileage}</p>

              <p><strong>Emission:</strong> {selectedBike.emission}</p>

            </div>

            {/* Eco Score */}

            <div className="mt-10">

              <div className="flex justify-between mb-2">

                <span className="font-bold">
                  Eco Score
                </span>

                <span className="font-bold text-green-400">
                  {selectedBike.ecoScore}/100
                </span>

              </div>

              <div className="w-full h-5 rounded-full bg-zinc-700 overflow-hidden">

                <div
                  className="h-5 bg-green-500 rounded-full transition-all duration-700"
                  style={{
                    width: `${selectedBike.ecoScore}%`,
                  }}
                />

              </div>

              <div className="mt-5">

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${
                    selectedBike.ecoScore >= 90
                      ? "bg-green-600"
                      : selectedBike.ecoScore >= 80
                      ? "bg-yellow-400 text-black"
                      : "bg-red-600"
                  }`}
                >
                  {selectedBike.ecoScore >= 90
                    ? "🌱 Eco Friendly"
                    : selectedBike.ecoScore >= 80
                    ? "⚡ Efficient"
                    : "⚠ Needs Improvement"}
                </span>

              </div>

            </div>

            {/* Recommendation */}

            <div className="mt-10 bg-zinc-900 rounded-2xl border border-green-500 p-8">

              <h2 className="text-3xl font-bold text-green-400 mb-6">
                AI Recommendation
              </h2>

              {/* Gemini */}

              <div className="mb-8">

                <h3 className="font-bold text-xl mb-3">
                   AI Analysis
                </h3>

                {loading ? (

                  <div className="flex items-center gap-3">

                    <div className="w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>

                    <p>Gemini is analyzing your bike...</p>

                  </div>

                ) : (

                  <p className="leading-8 whitespace-pre-line text-zinc-300">
                    {aiResponse}
                  </p>

                )}

              </div>

              <hr className="border-zinc-700 mb-8" />

              {/* Advantages */}

              <h3 className="font-bold text-xl mb-3">
                Advantages
              </h3>

              <ul className="list-disc ml-6 mb-8 space-y-2">

                {selectedBike.pros.map((pro, index) => (

                  <li key={index}>{pro}</li>

                ))}

              </ul>

              {/* Disadvantages */}

              <h3 className="font-bold text-xl mb-3">
                Disadvantages
              </h3>

              <ul className="list-disc ml-6 mb-8 space-y-2">

                {selectedBike.cons.map((con, index) => (

                  <li key={index}>{con}</li>

                ))}

              </ul>

              {/* Suitable */}

              <h3 className="font-bold text-xl mb-3">
                Best For
              </h3>

              <div className="flex flex-wrap gap-3 mb-8">

                {selectedBike.suitableFor.map((item, index) => (

                  <span
                    key={index}
                    className="bg-green-600 px-4 py-2 rounded-full font-semibold"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Static Recommendation */}

              <h3 className="font-bold text-xl mb-3">
                Recommendation
              </h3>

              <p className="text-zinc-300 leading-8">
                {selectedBike.recommendation}
              </p>

            </div>

            {/* Verdict */}

            <div className="mt-8 bg-zinc-900 border border-green-500 rounded-2xl p-8">

              <h2 className="text-3xl font-bold text-green-400 mb-5">
                Final Verdict
              </h2>

              <p className="leading-8 text-zinc-300">

                <strong className="text-white">
                  {selectedBike.brand} {selectedBike.model}
                </strong>{" "}
                is highly recommended for{" "}

                <strong className="text-green-400">
                  {selectedBike.suitableFor[0]}
                </strong>.

                With an Eco Score of{" "}

                <strong className="text-green-400">
                  {selectedBike.ecoScore}/100
                </strong>
                , it provides a balanced combination of efficiency,
                practicality, and environmental friendliness.

              </p>

            </div>

          </div>

        )}

      </div>

      {/* Charts */}

      <EcoScoreChart />

      <MileageChart />

      <EmissionChart />

    </section>
  );
}

export default SearchSection;