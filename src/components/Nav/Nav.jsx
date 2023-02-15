import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 112) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => "");
    };
  }, []);
  return (
    <nav className="">
      <div
        className={`z-10 w-screen h-28 bg-transparent  mx-auto flex justify-around items-center fixed top-0 left-0 right-0 ${
          show && "nav"
        }`}
      >
        <img src={Logo} alt="" className="z-1 h-28 w-28 p-2" />
        <ul className="z-1 flex">
          <li className="mx-10 text-white text-lg">
            <a href="#cursos">Cursos</a>
          </li>
          <li className="text-white text-lg">Contacto</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
