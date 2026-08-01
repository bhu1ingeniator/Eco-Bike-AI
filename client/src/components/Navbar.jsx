import { FaMotorcycle } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-green-500 p-2 rounded-xl">
            <FaMotorcycle className="text-black text-xl" />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Eco<span className="text-green-500">Bike AI</span>
            </h1>

            <p className="text-xs text-gray-400">
              Sustainable Bike Intelligence
            </p>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li className="hover:text-green-500 cursor-pointer transition">
            Home
          </li>

          <li className="hover:text-green-500 cursor-pointer transition">
            Explore
          </li>

          <li className="hover:text-green-500 cursor-pointer transition">
            Dashboard
          </li>

          <li className="hover:text-green-500 cursor-pointer transition">
            AI Insights
          </li>
        </ul>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-all duration-300 text-black px-6 py-2 rounded-xl font-semibold">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;