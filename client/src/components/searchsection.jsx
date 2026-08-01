import { useState } from "react";
import { bikes } from "../data/bikes";

function SearchSection() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [selectedBike, setSelectedBike] = useState(null);

  const brands = [...new Set(bikes.map((bike) => bike.brand))];

  const models = bikes.filter((bike) => bike.brand === brand);

  const handleAnalyze = () => {
    const bike = bikes.find(
      (b) => b.brand === brand && b.model === model
    );

    setSelectedBike(bike);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

        <h2 className="text-3xl font-bold mb-8 text-center">
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
            className="bg-black border border-zinc-700 rounded-xl p-4"
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
            className="bg-black border border-zinc-700 rounded-xl p-4"
          >
            <option value="">Select Model</option>

            {models.map((bike) => (
              <option key={bike.id}>{bike.model}</option>
            ))}
          </select>

          {/* Button */}

          <button
            onClick={handleAnalyze}
            className="bg-green-500 text-black rounded-xl font-bold hover:bg-green-600 transition-all"
          >
            Analyze
          </button>

        </div>

        {/* Result */}

        {selectedBike && (

          <div className="mt-10 bg-black rounded-2xl p-8 border border-zinc-700">

            <h3 className="text-2xl font-bold text-green-500 mb-5">
              {selectedBike.brand} {selectedBike.model}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              <p><strong>Engine:</strong> {selectedBike.engine}</p>

              <p><strong>Fuel:</strong> {selectedBike.fuel}</p>

              <p><strong>Mileage:</strong> {selectedBike.mileage}</p>

              <p><strong>Emission:</strong> {selectedBike.emission}</p>

              <p><strong>Eco Score:</strong> {selectedBike.ecoScore}/100</p>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default SearchSection;