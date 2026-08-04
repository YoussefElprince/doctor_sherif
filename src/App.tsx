import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Clinic from "./components/Clinic";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import SectionPulse from "./components/SectionPulse";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SectionPulse />
        <Services />
        <WhyChoose />
        <SectionPulse />
        <Clinic />
        <Contact />
      </main>
      <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}

export default App;
