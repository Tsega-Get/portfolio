import { useState } from "react";
// 1. Import HashLink instead of Link
import { HashLink as Link } from "react-router-hash-link";
import { face } from "../../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="bg-primary text-white shadow-lg fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Site Title */}
          <div className="flex-shrink-0">
            <Link
              smooth
              to="#home" // 2. Point to the #home ID
              className="flex items-center gap-3 text-2xl font-bold text-white"
              onClick={closeMobileMenu}
            >
              <div className="relative inline-flex items-center justify-center rounded-full bg-[radial-gradient(circle,white,transparent_50%)] p-1">
                <img src={face} alt="me" className="h-8 w-8 object-cover" />
              </div>
              <div>ME</div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                smooth
                to="#about"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                smooth
                to="#experience"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Experience
              </Link>
              <Link
                smooth
                to="#contact"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
              <Link
                smooth
                to="#resume"
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Resume
              </Link>
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {/* Hamburger/Close Icons */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              smooth
              to="/#about"
              onClick={closeMobileMenu}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              smooth
              to="/#experience"
              onClick={closeMobileMenu}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Experience
            </Link>
            <Link
              smooth
              to="/#contact"
              onClick={closeMobileMenu}
              className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
