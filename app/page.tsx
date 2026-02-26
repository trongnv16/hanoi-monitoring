import Navbar from "./components/Navbar";
import HeroBar from "./components/HeroBar";
import MapSection from "./components/MapSection";
import WeatherSection from "./components/WeatherSection";
import AlertSection from "./components/AlertSection";
import NewsSection from "./components/NewsSection";
import EventsSection from "./components/EventsSection";
import EconomySection from "./components/EconomySection";
import PolicySection from "./components/PolicySection";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroBar />
      <main>
        <AlertSection />
        <MapSection />
        <WeatherSection />
        <NewsSection />
        <EventsSection />
        <EconomySection />
        <PolicySection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
