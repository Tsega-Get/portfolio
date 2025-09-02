import "./App.css"; // You can add some main app styles here

// Import the layout components
// import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Import the page sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    // Use a main container to wrap everything
    <div className=" bg-primary">
      <section className="m-12 items-center justify-center text-center text-3xl p-12 md:p-14 lg:p-16 xl:p-20">
        <div className="bg-hero-pattern h-screen bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0  h-screen">
          <About />
        </div>{" "}
        <div className="relative z-0  h-screen">
          <Projects />
        </div>{" "}
        <div className="relative z-0  h-screen">
          <Contact />
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default App;
