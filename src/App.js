import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import MobileHeader from "./components/MobileHeader";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiance from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>

      <Header />
      <MobileHeader />
      <Hero />
      <About/>
      <Skills/>
      <Projects />
      <Experiance/>
      <Contact />
    </div>
  );
}

export default App;
