import React from 'react';

const Career = () => {
    return (
        <div className="bg-gray-100 min-h-screen md:px-14">
            <main className="container mx-auto  px-4 py-12 ">
                <div className=' flex justify-center items-center'>
                    <h2 className="text-3xl font-semibold text-black mb-6">Earn every day in an easy way with Mybuggy</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12  content-center md:items-star">
                    <div className="bg-white h-min  shadow-lg rounded-lg p-4 lg:p-6 ">
                        <h2 className="text-2xl font-semibold text-black mb-4">Apply Now</h2>
                        <form>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">Your Name</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 " id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">Your Email</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 " id="email" type="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="phone">Your Phone Number</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 " id="phone" type="tel" placeholder="Your Phone Number" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="jobTitle">Your Job Title</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 " id="jobTitle" type="text" placeholder="Your Job Title" />
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="resume">Upload Your Resume</label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" id="resume" type="file" />
                            </div>
                            <button className="w-full bg-orange-400 text-white font-bold py-2 px-4 rounded-md transition duration-300" type="button">
                                Send Application
                            </button>
                        </form>
                    </div>

                    <div className="lg:pl-12 col-span-2">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: "fa-car", title: "Simplicity", color: "blue" },
                                { icon: "fa-shield-alt", title: "Safety & Security", color: "purple" },
                                { icon: "fa-check-circle", title: "Reliability", color: "green" },
                                { icon: "fa-search", title: "Availability", color: "yellow" },
                                { icon: "fa-dollar-sign", title: "Cost-Effective", color: "green" },
                                { icon: "fa-credit-card", title: "Payments Gateways", color: "red" }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <i className={`fa ${item.icon} text-4xl text-${item.color}-500 mb-4`}></i>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Career;
