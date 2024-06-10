import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'
import Home from "../pages/Home";
import HowToUse from "../pages/HowToUse";
import Driver from "../pages/Driver";
import Offerings from "../pages/Offerings";
import Blog from "../pages/Blog";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";



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
        </Routes>
    </>
}