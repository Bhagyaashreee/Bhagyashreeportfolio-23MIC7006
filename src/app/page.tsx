import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero/Hero";
import Story from "@/sections/Story/Story";
import Journey from "@/sections/Journey/Journey";
import Tools from "@/sections/Tools/Tools";
import Projects from "@/sections/Projects/Projects";
import Contact from "@/sections/Contact/Contact";
import BackgroundBlobs from "@/components/effects/BackgroundBlobs";
import NoiseOverlay from "@/components/effects/NoiseOverlay";

export default function Home() {
  return (
    <main>
      <BackgroundBlobs />
      <NoiseOverlay />
      
      <Navbar />
      
      <Hero />
      <Story />
      <Journey />
      <Tools />
      <Projects />
      <Contact />
      
      <Footer />
    </main>
  );
}
