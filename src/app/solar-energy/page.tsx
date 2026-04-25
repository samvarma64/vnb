import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolarHero from "@/components/solar-energy/SolarHero";
import SolarSolutions from "@/components/solar-energy/SolarSolutions";
import SolarAchievements from "@/components/solar-energy/SolarAchievements";
import WhyChooseAvaada from "@/components/solar-energy/WhyChooseAvaada";
import IndustriesServed from "@/components/solar-energy/IndustriesServed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Energy Solutions | Avaada Group",
  description:
    "Avaada Group is a leader in India's solar energy sector, providing innovative, sustainable, and reliable solar energy solutions from utility-scale to rooftop installations.",
};

export default function SolarEnergyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <SolarHero />
      <SolarSolutions />
      <SolarAchievements />
      <WhyChooseAvaada />
      <IndustriesServed />
      <Footer />
    </main>
  );
}
