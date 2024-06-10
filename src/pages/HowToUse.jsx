import sideimg from "../assets/asset16.png";
import sidevideo from "../assets/UseVideo.mp4";
import { Link } from "react-router-dom";

export default function HowToUse() {
  return (
    <div className="HowToUse-container py-10">
      <div className="HowToUse-heading-container text-center mb-8">
        <h2 className="HowToUse-heading text-2xl md:text-3xl font-bold">How To Use</h2>
      </div>

      <div className="backgroundcolor min-w-sm m-auto bg-gradient-to-r from-indigo-500 via-violet-500 to-red-200 py-12">
        <div className="flex flex-col-reverse h-fit items-center px-14 lg:flex-row lg:justify-around">
          <div className="flex flex-col items-center lg:items-start gap-5 lg:w-1/2">
            <div className="text-2xl md:text-3xl font-bold text-white lg:text-4xl">
              <span>INSTRUCTIONS FOR USING THE MYBUGGY APP</span>
            </div>
            <div className="text-2xl md:text-3xl font-light text-white lg:text-2xl">
              <span>
                Our main offering is the creation of software that <br />{" "}
                facilitates on-demand communication between <br /> drivers and
                passengers.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex lg:ml-96 items-center justify-around gap-5 mt-12 m-16">
        <div className="text-2xl md:text-4xl font-extrabold text-blue-800 lg:text-3xl">
          A company called MYBUGGY <br /> operating out of <br /> Allentown
          <div className="text-2xl md:text-3xl font-light text-gray-600">
            MyBuggy is a leading ride-hailing platform that connects passengers
            with safe and reliable transportation services, making commuting a
            hassle-free experience. With its user-friendly mobile application
            and extensive network of trained drivers, MyBuggy provides seamless
            and affordable transportation solutions for customers in Allentown.
          </div>
          <div className="button pt-10">
            <button className="relative border-2 overflow-hidden rounded-lg border-pink-500 bg-transparent py-2.5 px-5 text-xl uppercase text-red-900 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-500 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center lg:mr-28 py-10">
          <Link to="/">
            <img src={sideimg} alt="side image" />
          </Link>
        </div>
      </div>

      <div className="How-The-App-Operates-container text-center mb-8">
        <h2 className="How-The-App-Operates-heading text-2xl md:text-3xl font-extrabold pt-10 ml-10 mr-8">
          Here's A Summary (In Steps) Of How The App Operates
        </h2>
      </div>

      <div className="flex justify-between gap-5 mt-12">
        <div className="md:flex steps-to-operates lg:text-2xl">
          <div className="video ml-16 md:ml-28 lg:ml-96">
            <Link to="/">
              <iframe
                className="overflow-hidden rounded-lg"
                src={sidevideo}
                height="574"
                width="285"
                frameborder="0"
              ></iframe>
            </Link>
          </div>

          <div className="Total-steps ml-16 mt-12 mr-8">
            <div className="font-extrabold text-2xl md:text-3xl text-blue-800">
              Step 1
              <div className="font-bold text-gray-700">Create an account</div>
              <div className="text-2xl md:text-3xl font-light text-gray-600 lg:text-2xl pt-1 lg:w-1/2">
                To get started with MyBuggy, you can create an account using
                your email address and phone number. This simple and
                straightforward registration process allows you to request a
                ride from your browser or the MyBuggy app, whichever is more
                convenient for you.
              </div>
            </div>

            <div className="font-extrabold text-2xl md:text-3xl text-blue-800 mt-10">
              Step 2
              <div className="font-bold text-gray-700">Put where to go</div>
              <div className="text-2xl md:text-3xl font-light text-gray-600 lg:text-2xl pt-1 lg:w-1/2">
                The first step in using MyBuggy is for the passenger to open the
                app and type their destination into the "Where to?" field. The
                app will then present the rider with a list of available rides,
                each of which will include details such as the type of vehicle,
                the cost, and the expected arrival time. The rider can quickly
                and easily get where they need to go once they've decided on a
                ride and confirmed the pickup.
              </div>
            </div>

            <div className="font-extrabold text-2xl md:text-3xl text-blue-800 mt-10">
              Step 3
              <div className="font-bold text-gray-700">
                Check your driver details
              </div>
              <div className="text-2xl md:text-3xl font-light text-gray-600 lg:text-2xl pt-1 lg:w-1/2">
                Once the ride request is confirmed, MyBuggy's advanced algorithm
                matches the rider with a nearby driver who can fulfill the ride
                request. The driver will see the request and can choose to
                accept it. The rider will then receive automatic notifications
                from the app, letting them know when the driver's vehicle is
                approximately one minute away from the pickup location. This
                ensures a smooth and convenient pickup experience for the rider.
              </div>
            </div>

            <div className="font-extrabold text-2xl md:text-3xl text-blue-800 mt-10">
              Step 4
              <div className="font-bold text-gray-700">Verify your ride</div>
              <div className="text-2xl md:text-3xl font-light text-gray-600 lg:text-2xl pt-1 lg:w-1/2">
                Once the driver arrives at the pickup location, both the driver
                and the rider will verify each other's names and confirm the
                destination to ensure a secure and hassle-free ride. After the
                verification process is complete, the driver will start the ride
                and transport the rider to their desired location. MyBuggy's
                extensive network of trained and reliable drivers ensures a
                comfortable and safe journey for the rider.
              </div>
            </div>

            <div className="font-extrabold text-2xl md:text-3xl text-blue-800 mt-10">
              Step 5
              <div className="font-bold text-gray-700">Enjoy your ride</div>
              <div className="text-2xl md:text-3xl font-light text-gray-600 lg:text-2xl pt-1 lg:w-1/2">
                Once the ride has started, the driver will take the rider to
                their desired destination. To ensure an efficient and
                stress-free journey, MyBuggy provides drivers with turn-by-turn
                directions through the app. This feature allows the driver to
                navigate the route without any confusion and ensures that the
                rider reaches their destination safely and on time. With
                MyBuggy, riders can enjoy a comfortable and reliable
                transportation experience from start to finish.
              </div>
            </div>

            <div className="font-extrabold text-2xl md:text-3xl text-blue-800 mt-10">
              Step 6
              <div className="font-bold text-gray-700">
                Provide rating and review
              </div>
              <div className="text-2xl md:text-3xl font-light text-gray-600 lg:text-2xl pt-1 lg:w-1/2">
                After the trip is complete, both the driver and the rider have
                the opportunity to rate each other on a scale of 1 to 5 stars.
                This rating system helps maintain the quality of service and
                provides valuable feedback for both parties. In addition to the
                rating, riders also have the option to give compliments and a
                tip directly through the app, making the entire experience even
                more convenient and user-friendly. With MyBuggy, riders can rest
                assured that their feedback will be taken into consideration,
                and they can enjoy a seamless and enjoyable transportation
                experience every time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
