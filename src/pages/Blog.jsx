import blog1img from '../assets/blog1.png';
import bl2 from '../assets/blog2.png';
import bl3 from '../assets/blog3.png';
function Recentblog() {
    return (
        <div className="blogcard bg-white p-5 rounded-lg shadow-lg">
            <div className="imageofblog">
                <img src={blog1img} className="w-full h-60 object-cover rounded-lg" alt="Recent Blog" />
            </div>
            <div className="textofblog text-gray-900 mt-4">
                <h2 className="text-3xl font-bold">This is the updated blog from us</h2>
                <p className="text-sm mt-2">Date: 09/06/2024</p>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quidem architecto. Assumenda, velit veritatis a distinctio incidunt et dolorem ut quis voluptatum nobis odio sequi eligendi itaque recusandae illum cum!</p>
                <button type="button" className="border-4 p-2 mt-4 rounded-md border-deepBlack text-customBlue hover:bg-yellow-500 hover:text-white">View More</button>
            </div>
        </div>
    );
}

function Oldblog() {
    return (
        <div className="oldblogcontainer grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-1 mt-5">
            <div className="firstoldbox bg-white p-2 rounded-lg shadow-md">
                <img src={bl2} className="w-full h-40 object-cover rounded-md" alt="Old Blog 1" />
                <p className="text-gray-900 mt-2">This is the old blog</p>
            </div>
            <div className="secondoldbox bg-white p-2 rounded-lg shadow-md">
                <img src={bl3} className="w-full h-40 object-cover rounded-md" alt="Old Blog 2" />
                <p className="text-gray-900 mt-2">This is the old blog</p>
            </div>
            <div className="thirdoldbox bg-white p-2 rounded-lg shadow-md">
                <img src={blog1img} className="w-full h-40 object-cover rounded-md" alt="Old Blog 3" />
                <p className="text-gray-900 mt-2">This is the old blog</p>
            </div>
        </div>
    );
}

export default function Blog() {
    return (
        <div id="blog" className="container-blog-main min-h-screen bg-white text-gray-900 flex flex-col items-center py-10">
            <div className="heading flex items-start justify-center">
                <h1 className="blog-title text-4xl md:text-6xl font-bold">THE BLOG</h1>
            </div>
            <div className="blog-card-container mt-10 w-full px-4 md:px-0 md:w-3/4 lg:w-2/3 grid gap-10 md:grid-cols-2">
                <div className="blog-content-leftside">
                    <Recentblog />
                </div>
                <div className="blog-content-rightside">
                    <Oldblog />
                </div>
            </div>
        </div>
    );
}
