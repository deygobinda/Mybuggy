import sideimg from "../assets/asset 20.png";
import { Link } from "react-router-dom";

export default function HowToUse() {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto py-12">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around items-center px-4 lg:px-14">
          <div className="flex flex-col items-center lg:items-start gap-5 lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              INSTRUCTIONS FOR USING THE MYBUGGY APP
            </h1>
            <p className="text-xl text-gray-600 mt-5">
              Our main offering is the creation of software that facilitates on-demand communication between drivers and passengers.
            </p>
          </div>
          <div className="flex justify-center items-center lg:mr-28 py-10">
            <Link to="/">
              <img src={sideimg} height="400" width="300" alt="side image" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-5 mx-4 lg:mx-16 text-center">
        <div className="text-2xl md:text-4xl font-bold text-black lg:w-1/2">
          <h2 className="lg:text-4xl">A company called MyBuggy operating out of Allentown</h2>
          <p className="text-xl text-gray-600 mt-5">
            MyBuggy is a leading ride-hailing platform that connects passengers with safe and reliable transportation services, making commuting a hassle-free experience. With its user-friendly mobile application and extensive network of trained drivers, MyBuggy provides seamless and affordable transportation solutions for customers in Allentown.
          </p>
          <div className="pt-10">
            <button className="relative border-2 overflow-hidden rounded-lg border-pink-500 bg-transparent py-2.5 px-5 text-xl uppercase text-red-900 transition-colors hover:text-white before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-500 before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold pt-10">
          Here's A Summary (In Steps) Of How The App Operates
        </h2>
      </div>

      <div className="flex flex-col items-center gap-10 mt-12 px-4">
        {steps.map((step, index) => (
          <div key={index} className="text-center lg:text-left max-w-3xl">
            <h3 className="font-extrabold text-2xl md:text-3xl text-blue-800">
              Step {index + 1}
            </h3>
            <h4 className="font-bold text-gray-500">{step.title}</h4>
            <p className="text-xl text-gray-600 pt-1">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Create an account",
    description: "To get started with MyBuggy, you can create an account using your email address and phone number. This simple and straightforward registration process allows you to request a ride from your browser or the MyBuggy app, whichever is more convenient for you."
  },
  {
    title: "Put where to go",
    description: "The first step in using MyBuggy is for the passenger to open the app and type their destination into the 'Where to?' field. The app will then present the rider with a list of available rides, each of which will include details such as the type of vehicle, the cost, and the expected arrival time. The rider can quickly and easily get where they need to go once they've decided on a ride and confirmed the pickup."
  },
  {
    title: "Check your driver details",
    description: "Once the ride request is confirmed, MyBuggy's advanced algorithm matches the rider with a nearby driver who can fulfill the ride request. The driver will see the request and can choose to accept it. The rider will then receive automatic notifications from the app, letting them know when the driver's vehicle is approximately one minute away from the pickup location. This ensures a smooth and convenient pickup experience for the rider."
  },
  {
    title: "Verify your ride",
    description: "Once the driver arrives at the pickup location, both the driver and the rider will verify each other's names and confirm the destination to ensure a secure and hassle-free ride. After the verification process is complete, the driver will start the ride and transport the rider to their desired location. MyBuggy's extensive network of trained and reliable drivers ensures a comfortable and safe journey for the rider."
  },
  {
    title: "Enjoy your ride",
    description: "Once the ride has started, the driver will take the rider to their desired destination. To ensure an efficient and stress-free journey, MyBuggy provides drivers with turn-by-turn directions through the app. This feature allows the driver to navigate the route without any confusion and ensures that the rider reaches their destination safely and on time. With MyBuggy, riders can enjoy a comfortable and reliable transportation experience from start to finish."
  },
  {
    title: "Provide rating and review",
    description: "After the trip is complete, both the driver and the rider have the opportunity to rate each other on a scale of 1 to 5 stars. This rating system helps maintain the quality of service and provides valuable feedback for both parties. In addition to the rating, riders also have the option to give compliments and a tip directly through the app, making the entire experience even more convenient and user-friendly. With MyBuggy, riders can rest assured that their feedback will be taken into consideration, and they can enjoy a seamless and enjoyable transportation experience every time."
  }
];
