import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/asset 0.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick =()=>{
    window.location.href = 'tel:+14847479294';
  }

  return (
    <nav id="nav-bar" className="flex justify-between bg-white p-3 px-10 items-center shadow-md min-w-full">
      <Link to="/" id="logo" className="flex gap-2 items-center">
        <img src={Logo} className="max-w-24 max-h-24 object-cover" alt="Logo" />
      </Link>

      <div className="hidden lg:flex gap-5">
        <Link to="/" className="font-medium text-primary">Home</Link>
        <Link to="/about-us" className="font-medium hover:text-primary">About us</Link>
        <Link to="/how-to-use" className="font-medium hover:text-primary">How To Use</Link>
        <Link to="/driver" className="font-medium hover:text-primary">Driver</Link>
        <Link to="/offerings" className="font-medium hover:text-primary">Offerings</Link>
        <Link to="/blog" className="font-medium hover:text-primary">Blog</Link>
        <Link to="/contact-us" className="font-medium hover:text-primary">Contact Us</Link>
      </div>

      <div id="button" className="hidden lg:flex gap-5">
        <button className="flex gap-4 p-2 border border-gray-400 hover:border-gray-600 rounded-lg px-5">
          <div>
            <span className="font-medium m-1">Book Now</span>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </button>
        <button className="flex gap-4 p-2 border border-gray-400 hover:border-gray-600 rounded-lg px-5">
          <div onClick={handleClick} >
            <i className="fa-solid fa-phone"></i>
            <span className="font-medium m-1">4847479294</span>
          </div>
        </button>
      </div>

      <button id="menu" className="p-2 lg:hidden" onClick={toggleMenu}>
        <i className="fa-solid fa-bars text-gray-500"></i>
      </button>

      {isMenuOpen && (
        <div id="nav-dailog" className="z-10 lg:hidden fixed bg-white inset-0 p-3 px-10 transition">
          <div id="navbar" className="flex justify-between">
            <Link to="/" id="logo" className="flex gap-2 items-center">
              <img src={Logo} className="max-w-24 max-h-24 object-cover" alt="Logo" />
            </Link>
            <button id="menu" className="p-2 lg:hidden" onClick={toggleMenu}>
              <i className="fa-solid fa-xmark text-gray-500"></i>
            </button>
          </div>
          <div className="m-4 flex flex-col gap-2">
            <Link to="/" className="font-medium hover:bg-gray-100 p-2 rounded" onClick={toggleMenu}>Home</Link>
            <Link to="/about-us" className="font-medium hover:bg-gray-100 p-2 rounded" onClick={toggleMenu}>About us</Link>
            <Link to="/how-to-use" className="font-medium hover:bg-gray-100 p-2 rounded" onClick={toggleMenu}>How To Use</Link>
            <Link to="/driver" className="font-medium hover:bg-gray -100 p-2 rounded" onClick={toggleMenu}>Driver</Link>
            <Link to="/offerings" className="font-medium hover:bg-gray-100 p-2 rounded" onClick={toggleMenu}>Offerings</Link>
            <Link to="/blog" className="font-medium hover:bg-gray-100 p-2 rounded" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact-us" className="font-medium hover:bg-gray-100 p-2 rounded" onClick={toggleMenu}>Contact Us</Link>
          </div>
          <div className="bg-gray-200 h-[1px]"></div>
          <div className="m-4 flex flex-col gap-4">
            <div className="hover:bg-gray-100 rounded p-3">
              <span className="font-medium">Book Now</span>
            </div>
            <button className="hover:bg-gray-100 rounded p-3 text-start" >
              <i className="fa-solid fa-phone"></i>
              <span className="font-medium" onClick={handleClick}>4847479294</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;