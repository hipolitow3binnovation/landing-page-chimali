import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import isotipo from "../../assets/isotipo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 w-full backdrop-blur-md ${
        scrolled ? "bg-white/30" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between px-6 mx-auto py-7 xl:px-0">
        <div>
          <img
            src={isotipo}
            alt="Isotipo"
            className="object-contain w-16 sm:w-20"
          />
        </div>

        <nav className="flex flex-row items-center gap-6 font-medium text-sm text-[#4A4242] uppercase">
          <ul className="flex-row items-center hidden gap-6 lg:flex">
            <li>
              <Link
                to="/#quienes-somos"
                className={`nav-link ${scrolled ? "scrolled-link-color" : ""}`}
                onClick={(e) => handleSmoothScroll(e, "quienes-somos")}
              >
                Quienes somos
              </Link>
            </li>
            <li>
              <Link
                to="/#productos"
                className={`nav-link ${scrolled ? "scrolled-link-color" : ""}`}
                onClick={(e) => handleSmoothScroll(e, "productos")}
              >
                Nuestros Productos
              </Link>
            </li>
            <li>
              <Link
                to="/#contacto"
                className={`nav-link ${scrolled ? "scrolled-link-color" : ""}`}
                onClick={(e) => handleSmoothScroll(e, "contacto")}
              >
                Contacto
              </Link>
            </li>
          </ul>

          <ul className="flex flex-row items-center gap-6">
            <li>
              <Link
                to="/#productos"
                onClick={(e) => handleSmoothScroll(e, "productos")}
                className="border border-[#623D21] bg-[#956851] text-white font-sans text-sm font-semibold py-2 px-4 lg:py-3 lg:px-6"
              >
                Explora Ahora
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
