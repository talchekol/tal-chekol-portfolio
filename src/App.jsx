import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="sharingan-preloader">
          <div className="sharingan-container">
            <img
              src="/sharingan.svg"
              alt="Sharingan Loading..."
              className="sharingan-eye"
            />
            <div className="sharingan-glow"></div>
          </div>
        </div>
      ) : (
        <div className="app-container portfolio-fade-in ">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
