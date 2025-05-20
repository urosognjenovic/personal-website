import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
