import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import HowToUse from "../pages/HowToUse";
import Driver from "../pages/Driver";
import Offerings from "../pages/Offerings";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import TermsConditionsDriver from '../pages/TermsConditionsDriver';
import TermsConditionsRider from '../pages/TermsConditionsRider';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Career from '../pages/Career';

export default function Routing() {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms-driver" element={<TermsConditionsDriver />} />
            <Route path="/terms-rider" element={<TermsConditionsRider />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
            <Route path="/career" element={<Career/>}/>
        </Routes>
    </>
}