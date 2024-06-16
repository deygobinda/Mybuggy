import img1 from "../assets/asset 19.jpg";
import img2 from "../assets/asset 3.png";

export default function Driver() {
    return (
        <div id="Driver">
            <div className="bg-gray-100 flex justify-center items-center min-h-screen  pt-14 pb-14">
                <div className="bg-white max-w-4xl w-full flex flex-col md:flex-row gap-5 p-5 shadow-lg rounded-lg">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img
                            src={img1}
                            alt="Driving"
                            className="object-contain w-full h-full rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <h2 className="text-2xl font-bold mb-6">Earn every day in an easy way with Easy Taxi</h2>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Your name</label>
                                    <input type="text" className="block w-full p-3 border rounded-lg" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Your Driving License No</label>
                                    <input type="text" className="block w-full p-3 border rounded-lg" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Your Registration No</label>
                                    <input type="text" className="block w-full p-3 border rounded-lg" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Your Social Security No</label>
                                    <input type="text" className="block w-full p-3 border rounded-lg" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Your email</label>
                                    <input type="email" className="block w-full p-3 border rounded-lg" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-600">Your Car Insurance No</label>
                                    <input type="text" className="block w-full p-3 border rounded-lg" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600">Your Profile Photo</label>
                                <input type="file" className="block w-full text-sm text-gray-600" />
                            </div>
                            <button type="submit" className="mt-6 w-full bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 rounded-lg">Send</button>
                        </form>
                        <div className="mt-6 text-center">
                            <img src={img2} alt="Get it on Google Play" className="h-20 w-auto mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
