// src/pages/AboutUs.jsx
import React from 'react';
import img1 from '../assets/asset 17.jpg';
import img2 from '../assets/asset 18.png';

const AboutUs = () => {
  return (
    <div id="about-us">
      <div className="bg-gray-100 flex flex-col items-center justify-center py-12 px-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center mb-12">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img src={img1} alt="Mission" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
              <p className="text-gray-700">
                At Mybuggy, we’re committed to making a positive impact on the environment while providing our customers with the highest level of service. We understand that eco-friendly transportation is the future, and we’re excited to play a part in shaping it. That’s why we’re working tirelessly to bring you the best-in-class, clean, and extremely reliable public transport services. We guarantee you’ll save anywhere from $1.50 compared to the going rate to $20-$30 or more, depending on how far you travel.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-4">
              Mybuggy aims to provide our customers with the most convenient and enjoyable experience possible while maintaining the highest levels of safety and comfort. Our team is dedicated to working hard to deliver the best service every day, striving to exceed your expectations at every turn. With Mybuggy , we want to create a transportation experience that is not just easy and efficient, but also enjoyable and memorable. We believe that with our commitment to innovation and customer satisfaction, we can be the transportation service that people turn to time and time again. Thus, we are also investigating the ongoing future investment discussion going on for driverless cars. For the good of the Allentown/Lehigh Valley, we have committed to returning $1,000,000 through reduced fares on all rides.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={img2} alt="Vision Car" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
