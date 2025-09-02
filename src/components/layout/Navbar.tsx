const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="navbar-brand">
          <a href="#home">ME</a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
