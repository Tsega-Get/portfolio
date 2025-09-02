import Hero from "../sections/Hero";

const Home = () => {
  return (
    // Move the hero-specific background and layout here
    <div className="relative w-full h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center bg-opacity-50">
      <Hero />
    </div>
  );
};

export default Home;
