import phoneImg from '../assets/phoneImg.png';
import emailImg from '../assets/emailImg.png';
import addressImg from '../assets/addressImg.png';

function ContactUsCard({ image, title, text }) {
    return (
        <div className="contact_us_card_container p-4 border rounded-lg shadow-md flex flex-col items-center h-48 md:h-64 w-full sm:w-3/4 md:w-full mx-auto">
            <div className="upper_icon mb-4">
                <img src={image} alt={title} className="w-16 h-16" />
            </div>
            <div className="lower-text text-center">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    );
}

export default function ContactUs() {
    return (
        <div className="contact-us-container p-6">
            <div className="contact-us-heading-container text-center mb-8">
                <h2 className="contact-us-heading text-3xl font-bold">Contact Us</h2>
            </div>
            <div className="contact-us-element grid grid-cols-1 md:grid-cols-3 gap-6">
                <ContactUsCard 
                    image={phoneImg} 
                    title="Phone" 
                    text="+4847479294" 
                />
                <ContactUsCard 
                    image={emailImg} 
                    title="Email" 
                    text="contact@example.com" 
                />
                <ContactUsCard 
                    image={addressImg} 
                    title="Address" 
                    text="Allentown, Pennsylvania 18102, United States" 
                />
            </div>
        </div>
    );
}
