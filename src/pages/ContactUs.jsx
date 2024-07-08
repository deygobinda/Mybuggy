

export default function ContactUs() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4 text-black">Get In Touch</h2>
                    <p className="mb-6 text-gray-600">Have a question? Get in touch with us.</p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <i className="fas fa-map-marker-alt text-blue-600 w-8 h-8"></i>
                            <div>
                                <h3 className="font-medium text-blue-600">Location</h3>
                                <p className="text-gray-600">Hamilton Business Center (328)</p>
                                <p className="text-gray-600">1101 Hamilton St,</p>
                                <p className="text-gray-600">Allentown, PA 18101 USA</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="fas fa-phone-alt text-purple-600 w-8 h-8"></i>
                            <div>
                                <h3 className="font-medium text-purple-600">Phone</h3>
                                <p className="text-gray-600">+1 4847479294</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="fas fa-envelope text-green-600 w-8 h-8"></i>
                            <div>
                                <h3 className="font-medium text-green-600">Email</h3>
                                <p className="text-gray-600">contact@mybuggy.com</p>
                            </div>
                        </div>
                    </div>
                    <p className="mt-6 text-gray-500 text-sm">
                        FOR ANY SUGGESTION PLEASE CONTACT US <a href="mailto:contact@mybuggy.com" className="text-blue-500">contact@mybuggy.com</a> OR CALL 484.747.9294 
                    </p>
                </div>
                <div className="w-full md:w-1/2 p-8 bg-gray-50">
                    <form>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Your Name *</label>
                                    <input type="text" className="block w-full p-3 border rounded-lg" placeholder="First" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-600 invisible">Last</label>
                                    <input type="text" className="block w-full p-3 border rounded-lg" placeholder="Last" />
                                </div>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600">Your Email *</label>
                                <input type="email" className="block w-full p-3 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600">Your Mobile No *</label>
                                <input type="text" className="block w-full p-3 border rounded-lg" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-600">Your message</label>
                                <textarea className="block w-full p-3 border rounded-lg h-32"></textarea>
                            </div>
                            <button type="submit" className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 rounded-lg">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
