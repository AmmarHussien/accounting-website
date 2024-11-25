import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide splash screen after a delay
    const timer = setTimeout(() => setIsLoading(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer); // Cleanup
  }, []);
  return (
    <>
      {isLoading ? (
        <SplashScreen delay={3} />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
        </div>
      )}
      ;
    </>
  );
};

export default App;
