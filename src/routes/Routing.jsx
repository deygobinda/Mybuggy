import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'
const Home = lazy(() => import("../pages/Home"));
const HowToUse = lazy(() => import("../pages/HowToUse"));
const Driver = lazy(() => import("../pages/Driver"));
const Offerings = lazy(() => import("../pages/Offerings"));
const Blog = lazy(() => import("../pages/Blog"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const AboutUs = lazy(() => import("../pages/AboutUs"));



export default function Routing() {
    return <>
        <Suspense fallback={<div className=' h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-transparent  flex justify-center items-center'>Loading....</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/how-to-use" element={<HowToUse />} />
                <Route path="/driver" element={<Driver />} />
                <Route path="/offerings" element={<Offerings />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Suspense>
    </>
}