import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SearchSection from "../components/SearchSection";

function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <SearchSection />
      <Footer />
    </div>
  );
}

export default Home;