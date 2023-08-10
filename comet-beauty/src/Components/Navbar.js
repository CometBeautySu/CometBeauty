import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Style/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsice_nav");
  }

  return (
    <header>
      <h3>Comet Beauty</h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Services</a>
        <a href="/#">Gallery</a>
        <a href="/#">Contact Us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;