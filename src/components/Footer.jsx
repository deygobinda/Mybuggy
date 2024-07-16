import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <footer className="bg-gray-50 py-8 text-center  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div >
              <h1 className="text-3xl font-bold text-black mb-1">MYBUGGY</h1>
              <h2 className="text-sm mb-3">An American Rideshare Company</h2>
              <div className="text-gray-600 text-center">
                <p>Hamilton Business  Center(S-328)</p>
                <p>1101 Hamilton St,</p>
                <p>Allentown, PA 18101.</p>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/" className="hover:text-primary ">Home</Link></li>
                <li><Link to="/about-us" className="hover:text-primary ">About us</Link></li>
                <li><Link to="/how-to-use" className="hover:text-primary ">How To Use</Link></li>
                <li><Link to="/driver" className="hover:text-primary ">Driver</Link></li>
                <li><Link to="/offerings" className="hover:text-primary ">Offerings</Link></li>
                <li><Link to="/blog" className="hover:text-primary ">Blog</Link></li>
                <li><Link to="/contact-us" className="hover:text-primary ">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/career" className="hover:text-primary">Career Opportunities</Link></li>
                <li><Link to="/terms-driver" className="hover:text-primary">Terms & Conditions For Driver</Link></li>
                <li><Link to="/terms-rider" className="hover:text-primary">Terms & Conditions For Rider</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <Link to={"/"} className="text-gray-600 hover:text-blue-600"><i className="fab fa-facebook-f"></i></Link>
                <Link to={"/"} className="text-gray-600 hover:text-blue-400"><i className="fab fa-twitter"></i></Link>
                <Link to={"/"} className="text-gray-600 hover:text-blue-700"><i className="fab fa-linkedin-in"></i></Link>
                <Link to={"/"} className="text-gray-600 hover:text-pink-500"><i className="fab fa-instagram"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;