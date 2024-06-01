import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-white py-8 text-center  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div >
              <h2 className="text-2xl font-bold text-purple-700 mb-4">MYBUGGY</h2>
              <p className="text-gray-600 text-center">Allentown, Pennsylvania 18102, United States</p>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/" className="hover:text-purple-700">Home</Link></li>
                <li><Link to="/about-us" className="hover:text-purple-700">About us</Link></li>
                <li><Link to="/how-to-use" className="hover:text-purple-700">How To Use</Link></li>
                <li><Link to="/driver" className="hover:text-purple-700">Driver</Link></li>
                <li><Link to="/offerings" className="hover:text-purple-700">Offerings</Link></li>
                <li><Link to="/blog" className="hover:text-purple-700">Blog</Link></li>
                <li><Link to="/contact-us" className="hover:text-purple-700">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/" className="hover:text-purple-700">Career Opportunities</Link></li>
                <li><Link to="/" className="hover:text-purple-700">Terms & Conditions For Driver</Link></li>
                <li><Link to="/" className="hover:text-purple-700">Terms & Conditions For Rider</Link></li>
                <li><Link to="/" className="hover:text-purple-700">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <Link to={"/"} className="text-gray-600 hover:text-purple-700"><i className="fab fa-facebook-f"></i></Link>
                <Link to={"/"} className="text-gray-600 hover:text-purple-700"><i className="fab fa-twitter"></i></Link>
                <Link to={"/"} className="text-gray-600 hover:text-purple-700"><i className="fab fa-linkedin-in"></i></Link>
                <Link to={"/"} className="text-gray-600 hover:text-purple-700"><i className="fab fa-instagram"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;