import img1 from '../assets/asset 4.png'
import img2 from '../assets/asset 2.png'
import img3 from '../assets/asset 3.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div id="home">
            <div
                id="hero"
                className="bg-gradient-to-br from-purple-50 via-orange-50 to-transparent  flex items-center justify-center py-10" 
            >
                <div className='flex flex-col-reverse h-fit items-center px-14 lg:flex-row lg:justify-around'>
                    <div className='flex flex-col items-center lg:items-start gap-5 lg:w-1/2'>
                        <div className='text-3xl font-bold lg:text-4xl'>
                            <span>Pay CASH, CARD, Wallet</span><br />
                            <span>Hours of Operations:</span>
                        </div>
                        <div className=' text-center'>Mon - Sunday 9 AM to 11:30 PM</div>
                        <div className=' leading-relaxed lg:leading-loose'>New Mobile App, Registered, reliable & affordable Ride Hailing Ride Share transportation service, provides safe and efficient travel to Lehigh County Customers. Our goal is to provide a sustainable and convenient transportation option for everyone, with guaranteed savings from 1.50 $ compared to the market up to 20-30$ based on your ride</div>
                        <div className='flex '>
                            <Link to="/"><img src={img2} alt="play-store" className="lg:w-9/12" /></Link>
                            <Link to="/"><img src={img3} alt="apple-store" className="lg:w-9/12"/></Link>
                            
                        </div>
                    </div>
                    <div className='h-fit'>
                        <img src={img1} alt="" className=" w-fit lg:w-10/12" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;