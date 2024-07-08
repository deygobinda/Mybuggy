const offers = [
    {
      title: "Simplicity",
      description: "Our user-friendly system streamlines the entire ride-hailing process, from booking to real-time driver tracking.",
      icon: "fas fa-car",
      bgColor: "bg-blue-500"
    },
    {
      title: "Safety & Security",
      description: "Our number one concern is the security of our riders and drivers, so we've put in place a number of checks and balances and monitoring systems to make sure everyone gets where they're going safely.",
      icon: "fas fa-shield-alt",
      bgColor: "bg-purple-500"
    },
    {
      title: "Reliability",
      description: "Every effort is made to ensure that our service is dependable, from the moment of your reservation until the time of your pickup. There is no cancelation is available from the driver’s side.",
      icon: "fas fa-map-marker-alt",
      bgColor: "bg-green-500"
    },
    {
      title: "Availability",
      description: "Over a fifty-mile radius of Allentown, Pennsylvania, Mybuggy is a highly-utilized service. As a result, you can probably guess that we're open to the idea of meeting up.",
      icon: "fas fa-map-pin",
      bgColor: "bg-indigo-500"
    },
    {
      title: "Cost-Effective",
      description: "Enjoy Allentown's best attractions without worrying about the cost – with our unbeatable prices! No one comes to our pricing structure in Allentown.",
      icon: "fas fa-dollar-sign",
      bgColor: "bg-blue-700"
    },
    {
      title: "Payments Gateways",
      description: "We provide a variety of payment methods including cash to ensure that every one of our rides is as stress-free and convenient as possible.",
      icon: "fas fa-credit-card",
      bgColor: "bg-red-500"
    },
  ];
  
  const OfferCard = ({ title, description, icon, bgColor }) => (
    <div className="offer bg-white rounded-lg  hover:shadow-lg p-6 text-left hover:scale-105 transition-all">
      <div className={`icon ${bgColor} w-12 h-12 rounded-full mb-4 flex items-center justify-center text-white`}>
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  const Offerings = () => (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-14">
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-black mb-8">What We Offer</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard 
              key={index} 
              title={offer.title} 
              description={offer.description} 
              icon={offer.icon} 
              bgColor={offer.bgColor} 
            />
          ))}
        </div>
      </div>
    </div>
  );
  
  export default Offerings;