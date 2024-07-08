import sideimg from "../assets/asset 20.png";


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

export default function HowToUse() {
  return (
    <div className="py-16 bg-gray-50 px-7">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-5">
        <div className="md:w-1/5 ">
          <img src={sideimg} alt="MyBuggy" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="text-black lg:w-1/2   md:text-center">
          <h2 className="md:text-3xl text-lg font-bold mb-5">A company called MyBuggy operating out of Allentown</h2>
          <p className="md:text-lg text-gray-700 leading-relaxed">
            MyBuggy is a leading ride-hailing platform that connects passengers with safe and reliable transportation services, making commuting a hassle-free experience. With its user-friendly mobile application and extensive network of trained drivers, MyBuggy provides seamless and affordable transportation solutions for customers in Allentown.
          </p>
        </div>
      </div>

      <div className="md:text-center mt-16 mb-12 px-4">
        <h2 className="md:text-3xl text-lg font-bold">Here's A Summary (In Steps) Of How The App Operates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mt-8 lg:px-28">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
            <h3 className="text-3xl font-extrabold text-black mb-3">Step {index + 1}</h3>
            <h4 className="text-xl font-bold text-gray-500 mb-3">{step.title}</h4>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
