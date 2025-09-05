import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// Import layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Import the page sections
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Home from "./pages/Home";
import Tech from "./components/technologies/Teck";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <Router>
      <div className="bg-primary relative z-0">
        <Navbar />
        {/* Each section needs an 'id' that matches the Navbar links */}
        <section id="home" className="relative z-0 h-screen">
          <Home />
        </section>
        <section id="about" className="relative z-0 ">
          <About />
        </section>
        <section id="experience">
          <Experience />
          <Tech />
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
