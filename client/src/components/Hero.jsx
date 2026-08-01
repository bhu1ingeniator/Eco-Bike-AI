import { FaMotorcycle } from "react-icons/fa6";

function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6">

      <div className="bg-green-500/20 p-6 rounded-full mb-8 ">
        <FaMotorcycle className="text-7xl md:text-8xl" />
      </div>

      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
        Ride <span className="text-green-500">Smarter.</span>
        <br />
        Ride <span className="text-green-500">Greener.</span>
      </h1>

      <p className="max-w-3xl text-gray-400 text-lg md:text-xl mt-8 leading-8">
        Analyze bike emissions, compare models, visualize sustainability
        metrics, and receive AI-powered recommendations for cleaner and
        smarter mobility.
      </p>

      <div className="flex gap-5 mt-10">
        <button className="bg-green-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:scale-105 duration-300 transition-all">
          Explore Bikes
      </button>

      <button className="border border-green-500 text-green-500 px-8 py-4 rounded-xl hover:bg-green-500 hover:text-black hover:scale-105 duration-300 transition-all">
        AI Analysis
     </button>
      </div>

    </section>
  );
}

export default Hero;