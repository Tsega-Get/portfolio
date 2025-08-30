import "./App.css"; // You can add some main app styles here

// Import the layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Import the page sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    // Use a main container to wrap everything
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
